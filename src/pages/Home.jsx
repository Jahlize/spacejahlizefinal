import React, { useState } from 'react';
import CyberGrid from '@/components/CyberGrid';
import Sidebar from '@/components/sidebar/Sidebar';
import HomeView from '@/components/home/HomeView';
import GalleryView from '@/components/gallery/GalleryView';
import RadioPlayer from '@/components/radio/RadioPlayer';

export default function Home() {
  const [activeView, setActiveView] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobile = () => setMobileMenuOpen(prev => !prev);

  return (
    <div className="min-h-screen relative">
      <CyberGrid />

      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        mobileOpen={mobileMenuOpen}
        onMobileToggle={toggleMobile}
      />

      <main className="relative z-10 lg:ml-56 min-h-screen p-6 pt-16 lg:pt-6">
        {activeView === 'inicio' ? (
          <HomeView onNavigate={setActiveView} />
        ) : (
          <GalleryView category={activeView} onBack={() => setActiveView('inicio')} />
        )}
      </main>

      <RadioPlayer />
    </div>
  );
}