import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from './ImageModal';

const REPRODUCTORES = [
{
  id: 'visualizer',
  title: "Player Pro",
  subcategory: 'HTML5',
  price: "2000 xats",
  image_url: 'https://xatimg.com/image/2UBUEr85jSiH.png',
  features: ['HTML5', 'Visualizer', 'Responsive'],
  description: 'Reproductor HTML5 con efecto visualizador avanzado.'
},
{
  id: 'gif-player',
  title: "Player Normal",
  subcategory: 'GIF',
  price: "1500 xats",
  image_url: 'https://xatimg.com/image/UkfBSaj4acul.png',
  features: ['GIF Animado', 'Personalizable'],
  description: 'Reproductor GIF animado totalmente personalizable.'
}];

export default function ReproductoresView() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {REPRODUCTORES.map((item, i) =>
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="group relative rounded-xl overflow-hidden border border-border/40 bg-card/40 backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all duration-300"
          onClick={() => setSelected(item)}>
          
            <div className="aspect-video w-full overflow-hidden">
              <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            </div>

            <div className="p-4 border-t border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{item.title}</p>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.subcategory}</span>
                </div>
                <span className="text-primary font-bold text-sm">{item.price}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {selected &&
      <ImageModal product={selected} onClose={() => setSelected(null)} />
      }
    </>);

}