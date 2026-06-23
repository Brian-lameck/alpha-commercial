import React from 'react';

export default function SidebarNav() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-zinc-8xl h-screen sticky top-0 p-4 bg-zinc-950">
      <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-pink-500 to-amber-400 mb-8">
        ALPHA
      </div>
      
      <nav className="flex flex-col gap-1 flex-1 text-sm font-bold">
        <button className="flex items-center gap-4 px-4 py-3 bg-zinc-900 text-white rounded-lg w-full text-left">
          <span></span> For You
        </button>
        <button className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white rounded-lg w-full text-left transition-colors">
          <span></span> Following
        </button>
        <button className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white rounded-lg w-full text-left transition-colors">
          <span></span> Explore
        </button>
        <button className="flex items-center gap-4 px-4 py-3 text-zinc-400 hover:text-white rounded-lg w-full text-left transition-colors">
          <span></span> Friends
        </button>
      </nav>

      <div className="border-t border-zinc-900 pt-4 text-xs text-zinc-500">
        <p>© 2026 Alpha Systems Framework Inc.</p>
      </div>
    </aside>
  );
}