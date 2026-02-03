import { Film } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { FileUpload } from './FileUpload';
import { ConfigSlider } from './ConfigSlider';
import { Input } from '@/components/ui/input';
import { SlateConfig } from './types';

interface SlateComponentProps {
  enabled: boolean;
  config: SlateConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: SlateConfig) => void;
}

export function SlateComponent({ enabled, config, onToggle, onConfigChange }: SlateComponentProps) {
  const configured = config.preRollFile !== null || config.postRollFile !== null;

  return (
    <BrandComponentCard
      name="Pre & Post Slate"
      description="Configure intro and outro slates for your videos"
      icon={<Film className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FileUpload
          label="Pre-roll Slate"
          accept="image/*,video/*"
          type="video"
          value={config.preRollFile}
          onChange={(file) => onConfigChange({ ...config, preRollFile: file })}
        />
        <FileUpload
          label="Post-roll Slate"
          accept="image/*,video/*"
          type="video"
          value={config.postRollFile}
          onChange={(file) => onConfigChange({ ...config, postRollFile: file })}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <ConfigSlider
          label="Duration"
          value={config.duration}
          min={1}
          max={15}
          unit="s"
          onChange={(duration) => onConfigChange({ ...config, duration })}
        />
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Text Overlay (Optional)</label>
          <Input
            placeholder="Enter overlay text..."
            value={config.textOverlay}
            onChange={(e) => onConfigChange({ ...config, textOverlay: e.target.value })}
            className="bg-background"
          />
        </div>
      </div>
    </BrandComponentCard>
  );
}
