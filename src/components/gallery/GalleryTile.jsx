const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';

export default function GalleryTile({ product, onClick, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="group relative rounded-xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all duration-300"
      onClick={() => onClick?.(product)}>
      
      <div className="aspect-video w-full overflow-hidden">
        {product.image_url ?
        <img src="https://media.db.com/images/public/6a20fa7d18cfb80adba23837/c1d2427b5_Captura_de_Pantalla_2026-05-26_a_la_s__144251.png"
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> :

        <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Sin imagen</span>
          </div>
        }
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="font-display font-bold text-white text-sm">{product.title}</p>
        {product.price &&
        <p className="text-primary text-xs font-semibold mt-0.5">{product.price}</p>
        }
      </div>
    </motion.div>);

}