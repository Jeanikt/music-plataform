import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

export function PlayerControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-4">
        <Button size="icon" variant="ghost">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button size="icon" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        <Button size="icon" variant="ghost">
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-full max-w-md flex items-center space-x-2">
        <Volume2 className="h-4 w-4" />
        <Slider
          value={[volume]}
          onValueChange={(value) => setVolume(value[0])}
          max={100}
          step={1}
        />
      </div>
    </div>
  );
}
