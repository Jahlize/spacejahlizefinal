import React from 'react';
import { cn } from '@/lib/utils';

export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map(cat => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border",
            active === cat.value
              ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
              : "bg-secondary/40 text-muted-foreground border-border/40 hover:text-foreground hover:bg-secondary/70"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}