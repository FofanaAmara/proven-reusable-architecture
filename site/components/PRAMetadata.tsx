import type { PRAMetadata } from '@/lib/source';

interface PRAMetadataProps {
  metadata: PRAMetadata;
}

const categoryLabels: Record<string, string> = {
  tech: 'Tech',
  integration: 'Integration',
  security: 'Security',
  business: 'Business',
};

const statusLabels: Record<string, string> = {
  candidate: 'Candidate',
  approved: 'Approved',
  deprecated: 'Deprecated',
};

const statusColors: Record<string, string> = {
  candidate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  approved: 'bg-green-100 text-green-800 border-green-200',
  deprecated: 'bg-gray-100 text-gray-800 border-gray-200',
};

export function PRAMetadata({ metadata }: PRAMetadataProps) {
  return (
    <div className="border rounded-lg p-6 mb-8 bg-muted/30">
      <div className="flex flex-wrap gap-4 mb-4">
        {/* ID */}
        <div>
          <div className="text-sm text-muted-foreground">ID</div>
          <div className="font-mono font-semibold">{metadata.id}</div>
        </div>

        {/* Version */}
        <div>
          <div className="text-sm text-muted-foreground">Version</div>
          <div className="font-mono">{metadata.version}</div>
        </div>

        {/* Category */}
        <div>
          <div className="text-sm text-muted-foreground">Catégorie</div>
          <div className="font-medium">{categoryLabels[metadata.category]}</div>
        </div>

        {/* Status */}
        <div>
          <div className="text-sm text-muted-foreground">Statut</div>
          <div>
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded border ${
                statusColors[metadata.status]
              }`}
            >
              {statusLabels[metadata.status]}
            </span>
          </div>
        </div>

        {/* Proven-in-use count */}
        <div>
          <div className="text-sm text-muted-foreground">Proven-in-use</div>
          <div className="font-semibold">{metadata.proven_in_use.length}</div>
        </div>
      </div>

      {/* Tags */}
      {metadata.tags.length > 0 && (
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">Tags</div>
          <div className="flex flex-wrap gap-2">
            {metadata.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 text-sm bg-background border rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Proven-in-use details */}
      {metadata.proven_in_use.length > 0 && (
        <div>
          <div className="text-sm text-muted-foreground mb-2">
            Implémentations prouvées
          </div>
          <div className="space-y-3">
            {metadata.proven_in_use.map((impl, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="font-medium">{impl.project}</div>
                <div className="text-sm text-muted-foreground">
                  {impl.team} • {impl.date}
                </div>
                {impl.feedback && (
                  <div className="text-sm mt-1 italic">"{impl.feedback}"</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
