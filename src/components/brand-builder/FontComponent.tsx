import { Type } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { ConfigSlider } from './ConfigSlider';
import { FontConfig } from './types';

interface FontComponentProps {
  enabled: boolean;
  config: FontConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: FontConfig) => void;
}

const fontFamilies = [
  { value: 'inter', label: 'Inter' },
  { value: 'roboto', label: 'Roboto' },
  { value: 'open-sans', label: 'Open Sans' },
  { value: 'lato', label: 'Lato' },
  { value: 'montserrat', label: 'Montserrat' },
  { value: 'poppins', label: 'Poppins' },
  { value: 'source-sans', label: 'Source Sans Pro' },
  { value: 'noto-sans', label: 'Noto Sans' },
];

const fontWeights = [
  { value: '300', label: 'Light (300)' },
  { value: '400', label: 'Regular (400)' },
  { value: '500', label: 'Medium (500)' },
  { value: '600', label: 'Semibold (600)' },
  { value: '700', label: 'Bold (700)' },
  { value: '800', label: 'Extra Bold (800)' },
];

export function FontComponent({ enabled, config, onToggle, onConfigChange }: FontComponentProps) {
  const configured = config.family !== '';

  return (
    <BrandComponentCard
      name="Fonts and Font Size"
      description="Set typography styles for all text elements"
      icon={<Type className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Font Family"
          value={config.family}
          options={fontFamilies}
          onChange={(family) => onConfigChange({ ...config, family })}
          placeholder="Select font..."
        />
        <ConfigSelect
          label="Font Weight"
          value={config.weight}
          options={fontWeights}
          onChange={(weight) => onConfigChange({ ...config, weight })}
          placeholder="Select weight..."
        />
        <ConfigSlider
          label="Font Size"
          value={config.size}
          min={12}
          max={72}
          unit="px"
          onChange={(size) => onConfigChange({ ...config, size })}
        />
        <ConfigSlider
          label="Line Spacing"
          value={config.lineSpacing}
          min={1}
          max={3}
          step={0.1}
          unit="x"
          onChange={(lineSpacing) => onConfigChange({ ...config, lineSpacing })}
        />
      </div>
      
      {/* Preview */}
      <div className="mt-6 p-4 rounded-lg border border-border bg-muted/30">
        <p className="text-xs text-muted-foreground mb-2">Preview</p>
        <p
          className="text-foreground"
          style={{
            fontFamily: config.family || 'inherit',
            fontWeight: config.weight || 400,
            fontSize: `${Math.min(config.size, 32)}px`,
            lineHeight: config.lineSpacing,
          }}
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
    </BrandComponentCard>
  );
}
