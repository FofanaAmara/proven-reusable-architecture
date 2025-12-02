import { create, insert, search as oramaSearch } from '@orama/orama';
import type { AnyOrama } from '@orama/orama';

// Schema pour l'index de recherche Orama
const searchSchema = {
  id: 'string',
  name: 'string',
  category: 'string',
  tags: 'string[]',
  status: 'string',
  url: 'string',
} as const;

interface PageData {
  url: string;
  data: {
    id?: string;
    name?: string;
    title?: string;
    category?: string;
    tags?: string[];
    status?: string;
  };
}

let searchIndex: AnyOrama | null = null;

// Créer l'index de recherche Orama
export async function createSearchIndex(pages: PageData[]) {
  if (searchIndex) return searchIndex;

  const db = await create({
    schema: searchSchema,
  });

  for (const page of pages) {
    const metadata = page.data;
    if (!metadata) continue;

    await insert(db, {
      id: metadata.id || '',
      name: metadata.name || metadata.title || '',
      category: metadata.category || 'tech',
      tags: metadata.tags || [],
      status: metadata.status || 'candidate',
      url: page.url,
    });
  }

  searchIndex = db;
  return db;
}

// Rechercher dans les PRAs
export async function searchPRAs(query: string, pages: PageData[]) {
  const db = await createSearchIndex(pages);

  const results = await oramaSearch(db, {
    term: query,
    properties: ['name', 'tags'],
    limit: 20,
  });

  return results;
}

// Filtrer les PRAs
export interface SearchFilters {
  category?: string;
  status?: string;
  tags?: string[];
}

export async function filterPRAs(filters: SearchFilters, pages: PageData[]) {
  const db = await createSearchIndex(pages);

  const where: any = {};

  if (filters.category) {
    where.category = filters.category;
  }

  if (filters.status) {
    where.status = filters.status;
  }

  const results = await oramaSearch(db, {
    term: '',
    where,
    limit: 100,
  });

  // Filter by tags if provided (Orama doesn't support array filtering in where)
  let hits = results.hits;
  if (filters.tags && filters.tags.length > 0) {
    hits = hits.filter((hit: any) => {
      const docTags = hit.document.tags as string[];
      return filters.tags!.some((tag) => docTags.includes(tag));
    });
  }

  return { ...results, hits };
}

// Rechercher avec filtres combinés
export async function searchWithFilters(query: string, filters: SearchFilters, pages: PageData[]) {
  const db = await createSearchIndex(pages);

  const where: any = {};

  if (filters.category) {
    where.category = filters.category;
  }

  if (filters.status) {
    where.status = filters.status;
  }

  const results = await oramaSearch(db, {
    term: query,
    properties: ['name', 'tags'],
    where,
    limit: 20,
  });

  // Filter by tags if provided
  let hits = results.hits;
  if (filters.tags && filters.tags.length > 0) {
    hits = hits.filter((hit: any) => {
      const docTags = hit.document.tags as string[];
      return filters.tags!.some((tag) => docTags.includes(tag));
    });
  }

  return { ...results, hits };
}
