import { Image } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { FileUpload } from './FileUpload';
import { PositionSelector } from './PositionSelector';
import { ConfigSlider } from './ConfigSlider';
import { LogoConfig } from './types';

interface LogoComponentProps {
  enabled: boolean;
  config: LogoConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: LogoConfig) => void;
}

export function LogoComponent({ enabled, config, onToggle, onConfigChange }: LogoComponentProps) {
  const configured = config.file !== null;

  return (
    <BrandComponentCard
      name="Logo Uploading"
      description="Add your brand logo with positioning and opacity controls"
      icon={<Image className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FileUpload
            label="Logo Image"
            accept="image/*"
            type="image"
            value={config.file}
            onChange={(file) => onConfigChange({ ...config, file })}
          />
          <PositionSelector
            label="Position"
            value={config.position}
            onChange={(position) => onConfigChange({ ...config, position: position as LogoConfig['position'] })}
          />
        </div>
        <div className="space-y-6">
          <ConfigSlider
            label="Size"
            value={config.size}
            min={5}
            max={50}
            unit="%"
            onChange={(size) => onConfigChange({ ...config, size })}
          />
          <ConfigSlider
            label="Opacity"
            value={config.opacity}
            min={0}
            max={100}
            unit="%"
            onChange={(opacity) => onConfigChange({ ...config, opacity })}
          />
        </div>
      </div>
    </BrandComponentCard>
  );
}
