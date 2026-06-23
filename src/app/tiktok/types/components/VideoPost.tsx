'use client';

import React, { useRef, useState } from 'react';
import { ShortVideo } from '@/types';

interface VideoPostProps {
  video: ShortVideo;
}

export default function VideoPost({ video }: VideoPostProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [liked, setLiked] = useState<boolean>(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative h-full w-full snap-start bg-black flex items-center justify-center">
      {/* Target Video Node Stream Element */}
      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        onClick={handleVideoClick}
        className="h-full w-full object-cover cursor-pointer"
        poster={video.profilePic}
      />

      {/* Play Overlay Indicator Icon */}
      {!isPlaying && (
        <div 
          onClick={handleVideoClick}
          className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-5xl opacity-80 pointer-events-none"
        >
          ▶
        </div>
      )}

      {/* Absolute Bottom Information HUD overlay */}
      <div className="absolute bottom-20 left-4 right-16 text-white drop-shadow-md pointer-events-none">
        <h3 className="font-bold text-base mb-1">@{video.username}</h3>
        <p className="text-sm text-zinc-200 line-clamp-2 mb-3">{video.description}</p>
        <div className="flex items-center gap-2 text-xs text-zinc-300">
          <span className="animate-spin">🎵</span>
          <span className="truncate max-w-[200px]">{video.audioTrack}</span>
        </div>
      </div>

      {/* Vertical Interaction Sidebar (Right Rail) */}
      <div className="absolute bottom-24 right-3 flex flex-col items-center gap-5 z-20">
        {/* Creator Profile Bubble */}
        <div className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-zinc-800">
          <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
          <button className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
            +
          </button>
        </div>

        {/* Action: Like */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setLiked(!liked)} 
            className={`w-11 h-11 rounded-full flex items-center justify-center text-xl transition-colors ${liked ? 'bg-rose-500 text-white' : 'bg-zinc-900/60 text-white hover:bg-zinc-800'}`}
          >
            ♥
          </button>
          <span className="text-xs font-semibold text-white mt-1 drop-shadow">{liked ? 'Liked' : video.likes}</span>
        </div>

        {/* Action: Comments */}
        <div className="flex flex-col items-center">
          <button className="w-11 h-11 rounded-full bg-zinc-900/60 text-white flex items-center justify-center text-lg hover:bg-zinc-800">
            💬
          </button>
          <span className="text-xs font-semibold text-white mt-1 drop-shadow">{video.comments}</span>
        </div>

        {/* Action: Share */}
        <div className="flex flex-col items-center">
          <button className="w-11 h-11 rounded-full bg-zinc-900/60 text-white flex items-center justify-center text-lg hover:bg-zinc-800">
            ↗
          </button>
          <span className="text-xs font-semibold text-white mt-1 drop-shadow">{video.shares}</span>
        </div>
      </div>
    </div>
  );
}