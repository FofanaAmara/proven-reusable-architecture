'use client';

import { useState, useEffect } from 'react';
import { searchWithFilters, type SearchFilters } from '@/lib/search';

interface PageData {
  url: string;
  data: any;
}

interface PRASearchProps {
  onResults: (results: any[]) => void;
  filters: SearchFilters;
  pages: PageData[];
}

export function PRASearch({ onResults, filters, pages }: PRASearchProps) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (query.length === 0 && Object.keys(filters).length === 0) {
        onResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const results = await searchWithFilters(query, filters, pages);
        onResults(results.hits.map((hit: any) => hit.document));
      } catch (error) {
        console.error('Search error:', error);
        onResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    // Debounce search
    const timeoutId = setTimeout(performSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [query, filters, onResults, pages]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un PRA..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {isSearching && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
