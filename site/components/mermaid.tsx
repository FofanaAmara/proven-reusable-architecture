'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import type { MermaidConfig } from 'mermaid';

interface MermaidProps {
  chart: string;
}

const cache = new Map<string, string>();
let mermaidPromise: Promise<typeof import('mermaid').default> | null = null;

export function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const key = `${chart}-${resolvedTheme}`;
    const cached = cache.get(key);

    if (cached) {
      if (ref.current) ref.current.innerHTML = cached;
      return;
    }

    if (!mermaidPromise) {
      mermaidPromise = import('mermaid').then((mod) => mod.default);
    }

    mermaidPromise.then((mermaid) => {
      const config: MermaidConfig = {
        startOnLoad: false,
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      };

      mermaid.initialize(config);

      const id = `mermaid-${Math.random().toString(36).substring(2, 11)}`;

      mermaid
        .render(id, chart)
        .then(({ svg }) => {
          cache.set(key, svg);
          if (ref.current) ref.current.innerHTML = svg;
        })
        .catch((error) => {
          console.error('Mermaid rendering error:', error);
        });
    });
  }, [chart, resolvedTheme, mounted]);

  if (!mounted) {
    return <div className="my-4" />;
  }

  return <div ref={ref} className="my-4 flex justify-center" />;
}
