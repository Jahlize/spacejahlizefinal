import React from 'react';
import { Home, Rocket, Monitor, Image, Music, Radio, Menu, X } from 'lucide-react';
import ProfileCard from './ProfileCard';
import NavItem from './NavItem';

const NAV_ITEMS = [
  { id: 'inicio', label: 'INICIO', icon: Home },
  { id: 'xatspace', label: 'XATSPACE', icon: Rocket, isService: true },
  { id: 'pcback', label: 'PCBACK & PACKS', icon: Monitor, isService: true },
  { id: 'fondos', label: 'FONDOS', icon: Image, isService: true },
  { id: 'reproductores', label: 'REPRODUCTORES', icon: Music, isService: true },
  { id: 'radio', label: 'RADIO PLANES', icon: Radio, isService: true },
];

export default function Sidebar({ activeView, onViewChange, mobileOpen, onMobileToggle }) {
  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={onMobileToggle}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-secondary/80 backdrop-blur-sm border border-border text-foreground"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onMobileToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-56 z-40
          bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border
          flex flex-col transition-transform duration-300
          lg:translate-x-0
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ProfileCard />

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          <NavItem
            icon={NAV_ITEMS[0].icon}
            label={NAV_ITEMS[0].label}
            active={activeView === 'inicio'}
            onClick={() => {
              onViewChange('inicio');
              onMobileToggle?.();
            }}
          />

          <div className="pt-3 pb-1.5">
            <span className="px-4 text-[10px] font-semibold text-muted-foreground tracking-widest uppercase">
              Servicios
            </span>
          </div>

          {NAV_ITEMS.filter(i => i.isService).map(item => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeView === item.id}
              onClick={() => {
                onViewChange(item.id);
                onMobileToggle?.();
              }}
            />
          ))}
        </nav>

        <div className="p-3 text-center">
          <span className="text-[10px] text-muted-foreground">© 2026 XatSpace Design</span>
        </div>
      </aside>
    </>
  );
}