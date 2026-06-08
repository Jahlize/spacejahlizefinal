import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const STREAM_URL = 'https://conexzion.net/8002/stream';

export default function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(STREAM_URL);
    audioRef.current.volume = volume / 100;
    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume / 100;
    }
  }, [volume, muted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 z-30 w-56 lg:left-[15.5rem]">
      <div className="rounded-xl bg-card/90 backdrop-blur-xl border border-border/60 p-4 shadow-2xl shadow-black/30">
        <div className="flex items-center gap-2 mb-3">
          <Radio className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-bold text-foreground tracking-wider">RADIO 320 KBPS</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] text-green-400 font-semibold tracking-wider">EN VIVO</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors shadow-lg shadow-primary/20"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setMuted(!muted)} className="text-muted-foreground hover:text-foreground transition-colors">
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
          <Slider
            value={[muted ? 0 : volume]}
            onValueChange={([v]) => { setVolume(v); setMuted(v === 0); }}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}