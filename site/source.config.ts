import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';

// =========================================
// GUIDES (French and English)
// =========================================

export const guides_fr = defineDocs({
  dir: '../content/guides/fr',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const guides_en = defineDocs({
  dir: '../content/guides/en',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// =========================================
// PRAs - BANK-WIDE (Transversal)
// =========================================

// Bank-Wide - Candidate - French
export const pras_bank_wide_candidate_fr = defineDocs({
  dir: '../content/pras/bank-wide/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Bank-Wide - Candidate - English
export const pras_bank_wide_candidate_en = defineDocs({
  dir: '../content/pras/bank-wide/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Bank-Wide - Approved - French
export const pras_bank_wide_approved_fr = defineDocs({
  dir: '../content/pras/bank-wide/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Bank-Wide - Approved - English
export const pras_bank_wide_approved_en = defineDocs({
  dir: '../content/pras/bank-wide/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Bank-Wide - Deprecated - French
export const pras_bank_wide_deprecated_fr = defineDocs({
  dir: '../content/pras/bank-wide/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Bank-Wide - Deprecated - English
export const pras_bank_wide_deprecated_en = defineDocs({
  dir: '../content/pras/bank-wide/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// =========================================
// PRAs - DOMAIN-WIDE - PARTICULIERS
// =========================================

// Particuliers - Candidate - French
export const pras_particuliers_candidate_fr = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Particuliers - Candidate - English
export const pras_particuliers_candidate_en = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Particuliers - Approved - French
export const pras_particuliers_approved_fr = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Particuliers - Approved - English
export const pras_particuliers_approved_en = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Particuliers - Deprecated - French
export const pras_particuliers_deprecated_fr = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Particuliers - Deprecated - English
export const pras_particuliers_deprecated_en = defineDocs({
  dir: '../content/pras/domain-wide/particuliers/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// =========================================
// PRAs - DOMAIN-WIDE - ENTREPRISES
// =========================================

// Entreprises - Candidate - French
export const pras_entreprises_candidate_fr = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Entreprises - Candidate - English
export const pras_entreprises_candidate_en = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Entreprises - Approved - French
export const pras_entreprises_approved_fr = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Entreprises - Approved - English
export const pras_entreprises_approved_en = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Entreprises - Deprecated - French
export const pras_entreprises_deprecated_fr = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Entreprises - Deprecated - English
export const pras_entreprises_deprecated_en = defineDocs({
  dir: '../content/pras/domain-wide/entreprises/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// =========================================
// PRAs - DOMAIN-WIDE - GESTION PATRIMOINE
// =========================================

// Gestion Patrimoine - Candidate - French
export const pras_patrimoine_candidate_fr = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Gestion Patrimoine - Candidate - English
export const pras_patrimoine_candidate_en = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/candidate',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Gestion Patrimoine - Approved - French
export const pras_patrimoine_approved_fr = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Gestion Patrimoine - Approved - English
export const pras_patrimoine_approved_en = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/approved',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Gestion Patrimoine - Deprecated - French
export const pras_patrimoine_deprecated_fr = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// Gestion Patrimoine - Deprecated - English
export const pras_patrimoine_deprecated_en = defineDocs({
  dir: '../content/pras/domain-wide/gestion-patrimoine/deprecated',
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// =========================================
// BACKWARD COMPATIBILITY ALIASES
// =========================================

export const docs_fr = guides_fr;
export const docs_en = guides_en;
export const docs = docs_fr;

// Main registre aliases (pointing to guides for now)
export const registre_fr = guides_fr;
export const registre_en = guides_en;

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});
