'use client';

import { useState } from 'react';
import type { SearchFilters } from '@/lib/search';

interface PRAFiltersProps {
  allTags: string[];
  onChange: (filters: SearchFilters) => void;
}

const categories = [
  { value: 'tech', label: 'Tech' },
  { value: 'integration', label: 'Integration' },
  { value: 'security', label: 'Security' },
  { value: 'business', label: 'Business' },
];

const statuses = [
  { value: 'approved', label: 'Approved' },
  { value: 'candidate', label: 'Candidate' },
];

export function PRAFilters({ allTags, onChange }: PRAFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const updateFilters = (
    category: string,
    status: string,
    tags: string[]
  ) => {
    const filters: SearchFilters = {};

    if (category) filters.category = category;
    if (status) filters.status = status;
    if (tags.length > 0) filters.tags = tags;

    onChange(filters);
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = selectedCategory === category ? '' : category;
    setSelectedCategory(newCategory);
    updateFilters(newCategory, selectedStatus, selectedTags);
  };

  const handleStatusChange = (status: string) => {
    const newStatus = selectedStatus === status ? '' : status;
    setSelectedStatus(newStatus);
    updateFilters(selectedCategory, newStatus, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newTags);
    updateFilters(selectedCategory, selectedStatus, newTags);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedStatus('');
    setSelectedTags([]);
    onChange({});
  };

  const hasActiveFilters =
    selectedCategory || selectedStatus || selectedTags.length > 0;

  return (
    <div className="space-y-6">
      {/* Clear filters button */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-primary hover:underline"
        >
          Effacer les filtres
        </button>
      )}

      {/* Category filter */}
      <div>
        <h3 className="font-semibold mb-3">Catégorie</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategory === category.value}
                onChange={() => handleCategoryChange(category.value)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Status filter */}
      <div>
        <h3 className="font-semibold mb-3">Statut</h3>
        <div className="space-y-2">
          {statuses.map((status) => (
            <label
              key={status.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedStatus === status.value}
                onChange={() => handleStatusChange(status.value)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm">{status.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tags filter */}
      {allTags.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Tags</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {allTags.map((tag) => (
              <label
                key={tag}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{tag}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
