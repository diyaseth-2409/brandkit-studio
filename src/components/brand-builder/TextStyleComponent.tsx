import { Highlighter } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ColorPicker } from './ColorPicker';
import { ConfigSlider } from './ConfigSlider';
import { TextStyleConfig } from './types';

interface TextStyleComponentProps {
  enabled: boolean;
  config: TextStyleConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: TextStyleConfig) => void;
}

export function TextStyleComponent({ enabled, config, onToggle, onConfigChange }: TextStyleComponentProps) {
  const configured = config.textColor !== '#000000' || config.highlightColor !== '#FFFF00';

  return (
    <BrandComponentCard
      name="Text Highlight and Background Color"
      description="Configure text colors and highlight styling"
      icon={<Highlighter className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ColorPicker
          label="Text Color"
          value={config.textColor}
          onChange={(textColor) => onConfigChange({ ...config, textColor })}
        />
        <ColorPicker
          label="Highlight Color"
          value={config.highlightColor}
          onChange={(highlightColor) => onConfigChange({ ...config, highlightColor })}
        />
        <ConfigSlider
          label="Opacity"
          value={config.opacity}
          min={0}
          max={100}
          unit="%"
          onChange={(opacity) => onConfigChange({ ...config, opacity })}
        />
        <ConfigSlider
          label="Border Radius"
          value={config.borderRadius}
          min={0}
          max={24}
          unit="px"
          onChange={(borderRadius) => onConfigChange({ ...config, borderRadius })}
        />
      </div>
      
      {/* Preview */}
      <div className="mt-6 p-4 rounded-lg border border-border bg-muted/30">
        <p className="text-xs text-muted-foreground mb-3">Preview</p>
        <span
          className="inline-block px-3 py-1.5 text-lg font-medium"
          style={{
            color: config.textColor,
            backgroundColor: config.highlightColor,
            opacity: config.opacity / 100,
            borderRadius: `${config.borderRadius}px`,
          }}
        >
          Highlighted Text Sample
        </span>
      </div>
    </BrandComponentCard>
  );
}
