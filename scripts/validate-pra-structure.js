#!/usr/bin/env node

/**
 * Validation Script: PRA Structure
 *
 * Validates the Markdown structure of PRA MDX files.
 *
 * Checks:
 * - Required sections presence (Overview, Context, Architecture, ADR, Examples, Proven-in-use)
 * - Heading format correctness (## for sections)
 * - At least 1 concrete example
 * - ADRs numbered correctly (ADR-001, ADR-002, etc.)
 * - Proper heading hierarchy
 *
 * Usage:
 *   node scripts/validate-pra-structure.js <file-path>
 *
 * Exit codes:
 *   0 - Validation passed
 *   1 - Validation failed
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Required sections in PRA documents
const REQUIRED_SECTIONS = [
  'Overview',
  'Context',
  'Architecture',
  'ADR',
  'Examples',
  'Proven-in-use'
];

// ADR numbering pattern (ADR-001, ADR-002, etc.)
const ADR_PATTERN = /^###\s+ADR-\d{3}/m;

class ValidationError extends Error {
  constructor(message, section) {
    super(message);
    this.section = section;
    this.name = 'ValidationError';
  }
}

/**
 * Extract sections from markdown content
 * @param {string} content - Markdown content (without frontmatter)
 * @returns {Array} - Array of section objects {level, title, line}
 */
function extractSections(content) {
  const sections = [];
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      sections.push({
        level,
        title,
        line: index + 1
      });
    }
  });

  return sections;
}

/**
 * Check if a section exists in the sections array
 * @param {Array} sections - Extracted sections
 * @param {string} sectionName - Name of the section to find
 * @returns {boolean}
 */
function hasSectionWithName(sections, sectionName) {
  return sections.some(section =>
    section.title.toLowerCase().includes(sectionName.toLowerCase()) &&
    section.level === 2  // Must be level 2 heading (##)
  );
}

/**
 * Validate PRA structure
 * @param {string} filePath - Path to the MDX file
 * @returns {Object} - Validation result with errors array
 */
function validatePRAStructure(filePath) {
  const errors = [];

  try {
    // Read file
    if (!fs.existsSync(filePath)) {
      throw new ValidationError(`File not found: ${filePath}`, 'file');
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);

    // Extract sections
    const sections = extractSections(content);

    if (sections.length === 0) {
      errors.push({
        section: 'structure',
        message: 'No headings found in the document'
      });
      return { valid: false, errors };
    }

    // 1. Validate required sections presence
    for (const requiredSection of REQUIRED_SECTIONS) {
      if (!hasSectionWithName(sections, requiredSection)) {
        errors.push({
          section: requiredSection,
          message: `Missing required section: ## ${requiredSection}`
        });
      }
    }

    // 2. Validate heading hierarchy (should start with ## not #)
    const topLevelHeadings = sections.filter(s => s.level === 1);
    if (topLevelHeadings.length > 0) {
      errors.push({
        section: 'heading-hierarchy',
        message: `Found ${topLevelHeadings.length} top-level heading(s) (#). PRAs should use ## for main sections. Lines: ${topLevelHeadings.map(h => h.line).join(', ')}`
      });
    }

    // 3. Check for at least 1 code block (example)
    const hasCodeBlocks = /```[\s\S]*?```/m.test(content);
    if (!hasCodeBlocks) {
      errors.push({
        section: 'Examples',
        message: 'No code examples found. PRAs must include at least 1 concrete code example (```...```)'
      });
    }

    // 4. Validate ADR numbering format
    const adrSection = sections.find(s =>
      s.title.toLowerCase().includes('adr') && s.level === 2
    );

    if (adrSection) {
      // Find all ADR sub-headings (###)
      const adrHeadings = sections.filter(s =>
        s.level === 3 &&
        s.line > adrSection.line &&
        (sections.find(next => next.level === 2 && next.line > s.line)?.line > s.line || true)
      );

      // Check if ADRs follow numbering convention
      const adrNumbered = adrHeadings.filter(h => /^ADR-\d{3}/.test(h.title));

      if (adrHeadings.length > 0 && adrNumbered.length === 0) {
        errors.push({
          section: 'ADR',
          message: 'ADRs should be numbered following the pattern: ADR-001, ADR-002, etc.'
        });
      }

      // Check sequential numbering
      if (adrNumbered.length > 0) {
        const numbers = adrNumbered.map(h => {
          const match = h.title.match(/^ADR-(\d{3})/);
          return match ? parseInt(match[1], 10) : 0;
        });

        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] !== i + 1) {
            errors.push({
              section: 'ADR',
              message: `ADR numbering is not sequential. Expected ADR-${String(i + 1).padStart(3, '0')}, found ADR-${String(numbers[i]).padStart(3, '0')}`
            });
            break;
          }
        }
      }
    }

    // 5. Validate Proven-in-use section has content
    const provenSection = sections.find(s =>
      s.title.toLowerCase().includes('proven') && s.level === 2
    );

    if (provenSection) {
      // Find content between Proven-in-use and next ## section
      const contentLines = content.split('\n');
      const sectionStart = provenSection.line;
      const nextSection = sections.find(s => s.level === 2 && s.line > provenSection.line);
      const sectionEnd = nextSection ? nextSection.line : contentLines.length;

      const sectionContent = contentLines.slice(sectionStart, sectionEnd).join('\n');

      // Check if section has meaningful content (more than just heading)
      const contentWithoutHeading = sectionContent.replace(/^##\s+.+$/m, '').trim();

      if (contentWithoutHeading.length < 50) {
        errors.push({
          section: 'Proven-in-use',
          message: 'Proven-in-use section appears to be empty or too short. Document real implementations here.'
        });
      }
    }

    return {
      valid: errors.length === 0,
      errors,
      structure: {
        totalSections: sections.length,
        hasCodeBlocks,
        requiredSectionsFound: REQUIRED_SECTIONS.filter(s => hasSectionWithName(sections, s)).length
      }
    };

  } catch (error) {
    if (error instanceof ValidationError) {
      errors.push({
        section: error.section,
        message: error.message
      });
    } else {
      errors.push({
        section: 'general',
        message: `Unexpected error: ${error.message}`
      });
    }

    return { valid: false, errors };
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node validate-pra-structure.js <file-path>');
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);
  const result = validatePRAStructure(filePath);

  if (result.valid) {
    console.log('✅ Structure validation PASSED');
    console.log(`   Total sections: ${result.structure.totalSections}`);
    console.log(`   Required sections found: ${result.structure.requiredSectionsFound}/${REQUIRED_SECTIONS.length}`);
    console.log(`   Has code blocks: ${result.structure.hasCodeBlocks ? 'Yes' : 'No'}`);
    process.exit(0);
  } else {
    console.error('❌ Structure validation FAILED');
    console.error(`   Found ${result.errors.length} error(s):\n`);

    result.errors.forEach((error, index) => {
      console.error(`   ${index + 1}. [${error.section}] ${error.message}`);
    });

    process.exit(1);
  }
}

module.exports = { validatePRAStructure, REQUIRED_SECTIONS };
