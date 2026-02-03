import { Palette } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { ConfigSlider } from './ConfigSlider';
import { Switch } from '@/components/ui/switch';
import { StylingConfig } from './types';

interface StylingComponentProps {
  enabled: boolean;
  config: StylingConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: StylingConfig) => void;
}

const presetStyles = [
  { value: 'editorial', label: 'Editorial' },
  { value: 'premium', label: 'Premium' },
  { value: 'bold', label: 'Bold' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'creative', label: 'Creative' },
];

export function StylingComponent({ enabled, config, onToggle, onConfigChange }: StylingComponentProps) {
  const configured = config.preset !== '';

  return (
    <BrandComponentCard
      name="Stylings"
      description="Apply visual presets and effects"
      icon={<Palette className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Style Preset"
          value={config.preset}
          options={presetStyles}
          onChange={(preset) => onConfigChange({ ...config, preset })}
          placeholder="Select preset..."
        />
        <ConfigSlider
          label="Corner Radius"
          value={config.cornerRadius}
          min={0}
          max={32}
          unit="px"
          onChange={(cornerRadius) => onConfigChange({ ...config, cornerRadius })}
        />
      </div>
      
      <div className="flex items-center gap-3 mt-6">
        <Switch
          checked={config.shadowEnabled}
          onCheckedChange={(shadowEnabled) => onConfigChange({ ...config, shadowEnabled })}
          className="data-[state=checked]:bg-enabled"
        />
        <label className="text-sm font-medium text-foreground">Enable Drop Shadow</label>
      </div>
      
      {/* Preview Grid */}
      <div className="mt-6">
        <p className="text-xs text-muted-foreground mb-3">Preset Preview</p>
        <div className="grid grid-cols-3 gap-3">
          {presetStyles.map((style) => (
            <button
              key={style.value}
              onClick={() => onConfigChange({ ...config, preset: style.value })}
              className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                config.preset === style.value
                  ? 'border-enabled bg-enabled-bg text-enabled'
                  : 'border-border bg-muted/30 text-muted-foreground hover:border-muted-foreground'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </BrandComponentCard>
  );
}
