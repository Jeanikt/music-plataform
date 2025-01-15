"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 border-t bg-card px-4">
      <div className="flex h-full items-center justify-between">
        <div className="flex w-1/3 items-center gap-4">
          <div className="h-12 w-12 rounded-md bg-muted" />
          <div>
            <p className="text-sm font-medium">Nome da Música</p>
            <p className="text-xs text-muted-foreground">Artista</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="ghost">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="icon" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button size="icon" variant="ghost">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
          <Slider className="w-[400px]" value={[0]} max={100} step={1} />
        </div>
        <div className="flex w-1/3 items-center justify-end gap-2">
          <Volume2 className="h-5 w-5" />
          <Slider
            className="w-[120px]"
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );
}
