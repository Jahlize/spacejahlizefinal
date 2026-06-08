import React from 'react';
import { Rocket, Monitor, Image, Music, Radio } from 'lucide-react';
import ServiceCard from './ServiceCard';

const SERVICES = [
{
  id: 'xatspace',
  icon: Rocket,
  title: 'XATSPACE',
  price: '2000 xats',
  subtitle: 'El precio varía del modelo',
  features: ['CSS Estructurado', 'Full Responsive']
},
{
  id: 'pcback',
  icon: Monitor,
  title: 'PCBACK & PSTYLE',
  price: '600 xats',
  features: ['Static & GIF', 'Pack Completo']
},
{
  id: 'fondos',
  icon: Image,
  title: 'FONDOS SALA',
  price: '1200 xats',
  features: ['Fondo + Box', 'Alta Calidad']
},
{
  id: 'reproductores',
  icon: Music,
  title: 'REPRODUCTORES',
  price: '1500 xats',
  subtitle: 'El precio varía del modelo',
  features: ['HTML5 GIF', 'Visualizer']
},
{
  id: 'radio',
  icon: Radio,
  title: 'RADIO PLANES',
  price: '04 PLANES',
  features: ['Sonic Panel', 'Soporte 24/7']
}];

export default function HomeView({ onNavigate }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight">Jahlize Desing

        </h1>
        <p className="text-primary font-medium text-sm tracking-[0.3em] mt-2 uppercase">
          Selecciona el Producto
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {SERVICES.map((svc, i) =>
        <ServiceCard
          key={svc.id}
          icon={svc.icon}
          title={svc.title}
          price={svc.price}
          subtitle={svc.subtitle}
          features={svc.features}
          delay={i * 0.08}
          onClick={() => onNavigate(svc.id)} />

        )}
      </div>
    </div>);

}