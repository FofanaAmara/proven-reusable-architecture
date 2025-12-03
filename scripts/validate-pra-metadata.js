#!/usr/bin/env node

/**
 * Validation Script: PRA Metadata
 *
 * Validates YAML frontmatter metadata in PRA MDX files.
 *
 * Checks:
 * - Required fields presence
 * - Valid status values
 * - Valid category values
 * - Proven-in-use structure
 * - Date formats (ISO 8601)
 * - Tags array
 *
 * Usage:
 *   node scripts/validate-pra-metadata.js <file-path>
 *
 * Exit codes:
 *   0 - Validation passed
 *   1 - Validation failed
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Valid enum values
const VALID_STATUSES = ['candidate', 'approved', 'deprecated'];
const VALID_CATEGORIES = ['tech', 'integration', 'security', 'business'];

// ISO 8601 date regex (YYYY-MM-DD)
const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
    this.name = 'ValidationError';
  }
}

/**
 * Validate PRA metadata from frontmatter
 * @param {string} filePath - Path to the MDX file
 * @returns {Object} - Validation result with errors array
 */
function validatePRAMetadata(filePath) {
  const errors = [];

  try {
    // Read file
    if (!fs.existsSync(filePath)) {
      throw new ValidationError(`File not found: ${filePath}`, 'file');
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter } = matter(fileContent);

    // Check if 'pra' metadata exists
    if (!frontmatter.pra) {
      errors.push({
        field: 'pra',
        message: 'Missing "pra" metadata section in frontmatter'
      });
      return { valid: false, errors };
    }

    const pra = frontmatter.pra;

    // 1. Validate required fields
    const requiredFields = ['name', 'category', 'status', 'tags', 'created_at', 'updated_at'];

    for (const field of requiredFields) {
      if (!pra[field]) {
        errors.push({
          field: `pra.${field}`,
          message: `Missing required field: ${field}`
        });
      }
    }

    // 2. Validate 'status' enum
    if (pra.status && !VALID_STATUSES.includes(pra.status)) {
      errors.push({
        field: 'pra.status',
        message: `Invalid status: "${pra.status}". Must be one of: ${VALID_STATUSES.join(', ')}`
      });
    }

    // 3. Validate 'category' enum
    if (pra.category && !VALID_CATEGORIES.includes(pra.category)) {
      errors.push({
        field: 'pra.category',
        message: `Invalid category: "${pra.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`
      });
    }

    // 4. Validate 'tags' is an array
    if (pra.tags && !Array.isArray(pra.tags)) {
      errors.push({
        field: 'pra.tags',
        message: 'Tags must be an array'
      });
    }

    // 5. Validate date formats
    if (pra.created_at && !ISO_DATE_REGEX.test(pra.created_at)) {
      errors.push({
        field: 'pra.created_at',
        message: `Invalid date format: "${pra.created_at}". Must be ISO 8601 (YYYY-MM-DD)`
      });
    }

    if (pra.updated_at && !ISO_DATE_REGEX.test(pra.updated_at)) {
      errors.push({
        field: 'pra.updated_at',
        message: `Invalid date format: "${pra.updated_at}". Must be ISO 8601 (YYYY-MM-DD)`
      });
    }

    // 6. Validate 'proven_in_use' structure
    if (pra.proven_in_use) {
      if (!Array.isArray(pra.proven_in_use)) {
        errors.push({
          field: 'pra.proven_in_use',
          message: 'proven_in_use must be an array'
        });
      } else {
        pra.proven_in_use.forEach((entry, index) => {
          const requiredProvenFields = ['project', 'team', 'date', 'feedback'];

          for (const field of requiredProvenFields) {
            if (!entry[field]) {
              errors.push({
                field: `pra.proven_in_use[${index}].${field}`,
                message: `Missing required field in proven_in_use entry ${index}: ${field}`
              });
            }
          }

          // Validate date format in proven_in_use
          if (entry.date && !ISO_DATE_REGEX.test(entry.date)) {
            errors.push({
              field: `pra.proven_in_use[${index}].date`,
              message: `Invalid date format in proven_in_use entry ${index}: "${entry.date}". Must be ISO 8601 (YYYY-MM-DD)`
            });
          }
        });
      }
    }

    // 7. Validate status/proven_in_use coherence
    if (pra.status === 'approved' && (!pra.proven_in_use || pra.proven_in_use.length === 0)) {
      errors.push({
        field: 'pra.proven_in_use',
        message: 'Approved PRAs must have at least 1 proven_in_use entry'
      });
    }

    // 8. Count proven_in_use entries (useful for workflows)
    const provenCount = pra.proven_in_use ? pra.proven_in_use.length : 0;

    return {
      valid: errors.length === 0,
      errors,
      metadata: {
        name: pra.name,
        category: pra.category,
        status: pra.status,
        provenCount
      }
    };

  } catch (error) {
    if (error instanceof ValidationError) {
      errors.push({
        field: error.field,
        message: error.message
      });
    } else {
      errors.push({
        field: 'general',
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
    console.error('Usage: node validate-pra-metadata.js <file-path>');
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);
  const result = validatePRAMetadata(filePath);

  if (result.valid) {
    console.log('✅ Metadata validation PASSED');
    console.log(`   Name: ${result.metadata.name}`);
    console.log(`   Category: ${result.metadata.category}`);
    console.log(`   Status: ${result.metadata.status}`);
    console.log(`   Proven count: ${result.metadata.provenCount}`);
    process.exit(0);
  } else {
    console.error('❌ Metadata validation FAILED');
    console.error(`   Found ${result.errors.length} error(s):\n`);

    result.errors.forEach((error, index) => {
      console.error(`   ${index + 1}. [${error.field}] ${error.message}`);
    });

    process.exit(1);
  }
}

module.exports = { validatePRAMetadata, VALID_STATUSES, VALID_CATEGORIES };
