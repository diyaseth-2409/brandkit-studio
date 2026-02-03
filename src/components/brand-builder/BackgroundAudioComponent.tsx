import { Music } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { FileUpload } from './FileUpload';
import { ConfigSlider } from './ConfigSlider';
import { Switch } from '@/components/ui/switch';
import { BackgroundAudioConfig } from './types';

interface BackgroundAudioComponentProps {
  enabled: boolean;
  config: BackgroundAudioConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: BackgroundAudioConfig) => void;
}

export function BackgroundAudioComponent({ enabled, config, onToggle, onConfigChange }: BackgroundAudioComponentProps) {
  const configured = config.file !== null;

  return (
    <BrandComponentCard
      name="Background Audio"
      description="Add ambient music or audio tracks"
      icon={<Music className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FileUpload
          label="Audio File"
          accept="audio/*"
          type="audio"
          value={config.file}
          onChange={(file) => onConfigChange({ ...config, file })}
        />
        <ConfigSlider
          label="Volume"
          value={config.volume}
          min={0}
          max={100}
          unit="%"
          onChange={(volume) => onConfigChange({ ...config, volume })}
        />
        <ConfigSlider
          label="Fade In Duration"
          value={config.fadeInDuration}
          min={0}
          max={5}
          step={0.5}
          unit="s"
          onChange={(fadeInDuration) => onConfigChange({ ...config, fadeInDuration })}
        />
        <ConfigSlider
          label="Fade Out Duration"
          value={config.fadeOutDuration}
          min={0}
          max={5}
          step={0.5}
          unit="s"
          onChange={(fadeOutDuration) => onConfigChange({ ...config, fadeOutDuration })}
        />
      </div>
      
      <div className="flex items-center gap-3 mt-6">
        <Switch
          checked={config.loop}
          onCheckedChange={(loop) => onConfigChange({ ...config, loop })}
          className="data-[state=checked]:bg-enabled"
        />
        <label className="text-sm font-medium text-foreground">Loop Audio</label>
      </div>
    </BrandComponentCard>
  );
}
