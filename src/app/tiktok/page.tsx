import React from 'react';
import { ShortVideo } from '@/app/tiktok/types/index';
import VideoPost from '@/app/tiktok/types/components/VideoPost';
import SidebarNav from '@/app/tiktok/types/components/SidebarNav';

// Static array of 5 public-domain video clips for instant hydration
const ALPHA_CLIPS: ShortVideo[] = [
  {
    id: 'c1',
    username: 'tech_genesis',
    description: 'Testing out the new high-refresh reactive stream tracking architecture in Next.js 15. Absolute game changer! 🚀 #nextjs #dev',
    audioTrack: 'Original Audio - tech_genesis',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-from-below-48133-large.mp4',
    likes: '142.3K',
    comments: '1,240',
    shares: '8,421',
    profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'
  },
  {
    id: 'c2',
    username: 'nature_vibe',
    description: 'Early morning coffee loops down by the mountain ridge track. Nature heals everything. 🏔️☕ #ambient #goodmorning',
    audioTrack: 'Lo-Fi Chill Hop Beats - Volume I',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-waves-breaking-in-the-ocean-from-above-41610-large.mp4',
    likes: '89.5K',
    comments: '640',
    shares: '1,102',
    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 'c3',
    username: 'drift_matrix',
    description: 'Perfecting the visual line attack markers inside the wet test arena. Sound on! 🏎️💨 #supercars #racing',
    audioTrack: 'Phonk Street Overdrive - Alpha Mix',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-driving-in-a-futuristic-neon-tunnel-43026-large.mp4',
    likes: '512.0K',
    comments: '14.2K',
    shares: '43.9K',
    profilePic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100'
  },
  {
    id: 'c4',
    username: 'tokyo_hustle',
    description: 'Neon signs under a steady downpour. Tokyo at 2:00 AM hits differently. 🌧️🗼 #aesthetic #traveltok',
    audioTrack: 'Tokyo Rain Walk Ambient Track',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-texture-of-a-waving-dark-blue-cloth-42289-large.mp4',
    likes: '310.4K',
    comments: '4,810',
    shares: '12.5K',
    profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: 'c5',
    username: 'culinary_art',
    description: 'Slow-motion preparation of dynamic flamed reduction sauce glaze. Rate this presentation loop out of 10! 🔥 #gourmet #cooking',
    audioTrack: 'Smooth Jazz Kitchen Grooves',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-hot-chocolate-sauce-on-ice-cream-43015-large.mp4',
    likes: '23.1K',
    comments: '892',
    shares: '320',
    profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
  }
];

export default function FeedPage() {
  return (
    <div className="flex bg-zinc-950 min-h-screen text-white">
      {/* Desktop sidebar */}
      <SidebarNav />

      {/* Main Snap Scrolling Containment Deck */}
      <main className="flex-1 flex justify-center items-center relative">
        
        {/* Top Header Floating Nav (Mobile Only) */}
        <div className="absolute top-4 left-0 right-0 flex justify-center gap-6 text-sm font-bold z-30 pointer-events-auto md:hidden">
          <button className="text-zinc-400 hover:text-white">Following</button>
          <button className="text-white border-b-2 border-white pb-1">For You</button>
        </div>

        {/* Viewport Frame Box */}
        <div className="w-full max-w-[420px] h-screen md:h-[820px] md:rounded-xl md:border md:border-zinc-800 overflow-hidden relative shadow-2xl bg-black">
          <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-none">
            {ALPHA_CLIPS.map((clip) => (
              <VideoPost key={clip.id} video={clip} />
            ))}
          </div>

          {/* Bottom Floating Nav Bar (Mobile Only) */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/90 border-t border-zinc-900 flex items-center justify-around text-xs font-bold text-zinc-400 z-30 md:hidden">
            <button className="text-white flex flex-col items-center gap-1"><span>🏠</span>Home</button>
            <button className="flex flex-col items-center gap-1"><span>🧭</span>Discover</button>
            <button className="bg-white text-black px-3 py-1 rounded-md text-base font-black">+</button>
            <button className="flex flex-col items-center gap-1"><span>📥</span>Inbox</button>
            <button className="flex flex-col items-center gap-1"><span>👤</span>Profile</button>
          </div>
        </div>
      </main>
    </div>
  );
}