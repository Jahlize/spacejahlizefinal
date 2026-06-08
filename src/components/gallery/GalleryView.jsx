const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ArrowLeft } from 'lucide-react';
import CategoryFilter from './CategoryFilter';
import GalleryTile from './GalleryTile';
import ImageModal from './ImageModal';
import RadioPlans from './RadioPlans';
import ReproductoresView from './ReproductoresView';

const SUBCATEGORIES = {
  xatspace: [
    { value: 'all', label: 'TODO' },
  ],
  pcback: [
    { value: 'all', label: 'TODO' },
    { value: 'pcback_static', label: 'PCBACK STATIC' },
    { value: 'pcback_gif', label: 'PCBACK GIF' },
    { value: 'banner_static', label: 'BANNER STATIC' },
    { value: 'banner_gif', label: 'BANNER GIF' },
  ],
  fondos: [
    { value: 'all', label: 'TODO' },
    { value: 'fondo', label: 'FONDOS' },
    { value: 'box', label: 'BOX' },
  ],
  reproductores: [
    { value: 'all', label: 'TODO' },
    { value: 'html5', label: 'HTML5' },
    { value: 'gif', label: 'GIF' },
  ],
  radio: [
    { value: 'all', label: 'TODO' },
  ],
};

const TITLES = {
  xatspace: 'XATSPACE',
  pcback: 'PCBACK & PACKS',
  fondos: 'FONDOS SALA',
  reproductores: 'REPRODUCTORES',
  radio: 'RADIO PLANES',
};

export default function GalleryView({ category, onBack }) {
  const [subFilter, setSubFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', category],
    queryFn: () => db.entities.Product.filter({ category }, 'order', 100),
  });

  const filtered = useMemo(() => {
    if (subFilter === 'all') return products;
    return products.filter(p => p.subcategory === subFilter);
  }, [products, subFilter]);

  const subcategories = SUBCATEGORIES[category] || [{ value: 'all', label: 'TODO' }];

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-lg bg-secondary/60 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-wide">
          {TITLES[category] || category.toUpperCase()}
        </h2>
      </div>

      {category === 'radio' ? (
        <RadioPlans />
      ) : category === 'reproductores' ? (
        <ReproductoresView />
      ) : (
      <>
      {subcategories.length > 1 && (
        <CategoryFilter
          categories={subcategories}
          active={subFilter}
          onChange={setSubFilter}
        />
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="aspect-video rounded-xl bg-secondary/40 animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-sm">No hay productos en esta categoría aún.</p>
          <p className="text-muted-foreground/60 text-xs mt-1">Agrega productos desde el panel de admin.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <GalleryTile
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
              delay={i * 0.05}
            />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ImageModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      </>
      )}
    </div>
  );
}