const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ImageModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative max-w-3xl w-full max-h-[85vh] overflow-hidden rounded-2xl bg-card border border-border/60"
          onClick={(e) => e.stopPropagation()}>
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
            
            <X className="w-4 h-4" />
          </button>

          {product.image_url &&
          <img src="https://media.db.com/images/public/6a20fa7d18cfb80adba23837/c1d2427b5_Captura_de_Pantalla_2026-05-26_a_la_s__144251.png"

          alt={product.title}
          className="w-full max-h-[60vh] object-contain bg-black" />

          }

          <div className="p-6">
            <h3 className="font-display font-bold text-xl text-foreground">{product.title}</h3>
            {product.price &&
            <p className="text-primary font-semibold mt-1">{product.price}</p>
            }
            {product.description &&
            <p className="text-muted-foreground text-sm mt-3">{product.description}</p>
            }
            {product.features?.length > 0 &&
            <ul className="mt-3 space-y-1">
                {product.features.map((f, i) =>
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {f}
                  </li>
              )}
              </ul>
            }
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>);

}