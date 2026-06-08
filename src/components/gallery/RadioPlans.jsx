import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const PLANS = [
  {
    name: 'Plan Radio Web',
    price: '$800xats',
    period: '/mes',
    features: [
      'Hasta 50 Oyentes en simultáneo',
      'Calidad de audio: 96 Kbps',
      'AutoDJ: 1 GB de espacio',
      'Ideal para proyectos iniciales o podcast',
      'Soporte básico por Email',
    ],
    highlighted: false,
  },
  {
    name: 'Plan Básico',
    price: '$1.000xats',
    period: '/mes',
    features: [
      'Hasta 100 Oyentes en simultáneo',
      'Calidad de audio: 128 Kbps',
      'AutoDJ: 2 GB de espacio',
      'SSL / HTTPS en Streaming',
      'Soporte técnico por Email',
    ],
    highlighted: false,
  },
  {
    name: 'Plan Profesional',
    price: '$1.500xats',
    period: '/mes',
    features: [
      'Hasta 500 Oyentes en simultáneo',
      'Calidad de audio: 192 Kbps',
      'AutoDJ: 3 GB de espacio',
      'Estadísticas avanzadas en tiempo real',
      'Soporte Prioritario 24/7',
    ],
    highlighted: true,
  },
  {
    name: 'Plan Enterprise',
    price: '$2.000xats',
    period: '/mes',
    features: [
      'Oyentes Ilimitados',
      'Calidad de audio máxima: 320 Kbps',
      'AutoDJ: 6 GB de espacio',
      'Estadísticas avanzadas en tiempo real',
      'Soporte Premium WhatsApp/Email',
    ],
    highlighted: false,
  },
  {
    name: 'Plan Máster V.I.P.',
    price: '$3.500xats',
    period: '/mes',
    features: [
      'Oyentes Ilimitados dedicados',
      'Calidad Máxima 320 Kbps (Baja Latencia)',
      'AutoDJ: 15 GB SSD de espacio',
      'Web Player Personalizado',
      'Monitoreo y Soporte Dedicado',
    ],
    highlighted: false,
    vip: true,
  },
];

export default function RadioPlans() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {PLANS.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className={`
            relative flex flex-col rounded-2xl border p-5 backdrop-blur-sm
            ${plan.vip
              ? 'bg-gradient-to-b from-yellow-500/10 to-amber-400/5 border-yellow-500/40 shadow-lg shadow-yellow-500/10'
              : plan.highlighted
              ? 'bg-gradient-to-b from-primary/15 to-primary/5 border-primary/50 shadow-lg shadow-primary/10'
              : 'bg-card/60 border-border/40'}
          `}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-widest">
              Popular
            </span>
          )}
          {plan.vip && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1">
              <Star className="w-2.5 h-2.5" /> VIP
            </span>
          )}

          <div className="mb-4">
            <h3 className={`font-display font-bold text-sm uppercase tracking-wide mb-2 ${plan.vip ? 'text-yellow-400' : plan.highlighted ? 'text-primary' : 'text-foreground'}`}>
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1">
              <span className={`font-display font-black text-2xl ${plan.vip ? 'text-yellow-400' : plan.highlighted ? 'text-primary' : 'text-foreground'}`}>
                {plan.price}
              </span>
              <span className="text-muted-foreground text-xs">{plan.period}</span>
            </div>
          </div>

          <ul className="flex-1 space-y-2">
            {plan.features.map((feat, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${plan.vip ? 'text-yellow-400' : plan.highlighted ? 'text-primary' : 'text-primary/70'}`} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}