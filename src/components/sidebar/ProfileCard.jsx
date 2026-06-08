import React from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function ProfileCard() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center py-6 px-4">
      <div className="relative">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
          <img src="https://xatimg.com/image/ftY3aPiImSLz.gif" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background" />
      </div>
      <h3 className="mt-3 font-display font-bold text-foreground text-base tracking-wide">
        Jahlize
      </h3>
      <span className="text-xs text-muted-foreground mt-0.5">
        ID: 1506655493
      </span>
    </div>
  );
}