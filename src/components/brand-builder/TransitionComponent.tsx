import { Sparkles } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { ConfigSlider } from './ConfigSlider';
import { Switch } from '@/components/ui/switch';
import { TransitionConfig } from './types';

interface TransitionComponentProps {
  enabled: boolean;
  config: TransitionConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: TransitionConfig) => void;
}

const transitionStyles = [
  { value: 'fade', label: 'Fade' },
  { value: 'slide-left', label: 'Slide Left' },
  { value: 'slide-right', label: 'Slide Right' },
  { value: 'slide-up', label: 'Slide Up' },
  { value: 'slide-down', label: 'Slide Down' },
  { value: 'typewriter', label: 'Typewriter' },
  { value: 'scale', label: 'Scale' },
  { value: 'blur', label: 'Blur' },
];

export function TransitionComponent({ enabled, config, onToggle, onConfigChange }: TransitionComponentProps) {
  const configured = config.style !== '';

  return (
    <BrandComponentCard
      name="Text Transitions"
      description="Animate text appearance and disappearance"
      icon={<Sparkles className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Transition Style"
          value={config.style}
          options={transitionStyles}
          onChange={(style) => onConfigChange({ ...config, style })}
          placeholder="Select style..."
        />
        <ConfigSlider
          label="Duration"
          value={config.duration}
          min={0.1}
          max={2}
          step={0.1}
          unit="s"
          onChange={(duration) => onConfigChange({ ...config, duration })}
        />
      </div>
      
      <div className="flex gap-8 mt-6">
        <div className="flex items-center gap-3">
          <Switch
            checked={config.enableIn}
            onCheckedChange={(enableIn) => onConfigChange({ ...config, enableIn })}
            className="data-[state=checked]:bg-enabled"
          />
          <label className="text-sm font-medium text-foreground">Transition In</label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            checked={config.enableOut}
            onCheckedChange={(enableOut) => onConfigChange({ ...config, enableOut })}
            className="data-[state=checked]:bg-enabled"
          />
          <label className="text-sm font-medium text-foreground">Transition Out</label>
        </div>
      </div>
    </BrandComponentCard>
  );
}
