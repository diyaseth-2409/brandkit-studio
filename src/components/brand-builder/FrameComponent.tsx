import { Frame } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { ColorPicker } from './ColorPicker';
import { ConfigSlider } from './ConfigSlider';
import { FrameConfig } from './types';

interface FrameComponentProps {
  enabled: boolean;
  config: FrameConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: FrameConfig) => void;
}

const frameStyles = [
  { value: 'none', label: 'None' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'bold', label: 'Bold' },
  { value: 'branded', label: 'Branded' },
  { value: 'double', label: 'Double Line' },
  { value: 'rounded', label: 'Rounded' },
];

export function FrameComponent({ enabled, config, onToggle, onConfigChange }: FrameComponentProps) {
  const configured = config.style !== 'none';

  return (
    <BrandComponentCard
      name="Frames"
      description="Add decorative frames and borders to video content"
      icon={<Frame className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Frame Style"
          value={config.style}
          options={frameStyles}
          onChange={(style) => onConfigChange({ ...config, style })}
          placeholder="Select style..."
        />
        <ColorPicker
          label="Frame Color"
          value={config.color}
          onChange={(color) => onConfigChange({ ...config, color })}
        />
        <ConfigSlider
          label="Thickness"
          value={config.thickness}
          min={1}
          max={20}
          unit="px"
          onChange={(thickness) => onConfigChange({ ...config, thickness })}
        />
      </div>
      
      {/* Preview */}
      <div className="mt-6">
        <p className="text-xs text-muted-foreground mb-3">Preview</p>
        <div className="relative w-full max-w-xs aspect-video bg-muted/50 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              border: config.style !== 'none' 
                ? `${config.thickness}px ${config.style === 'double' ? 'double' : 'solid'} ${config.color}`
                : 'none',
              borderRadius: config.style === 'rounded' ? '16px' : '8px',
            }}
          />
          <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
            Video Preview
          </div>
        </div>
      </div>
    </BrandComponentCard>
  );
}
