import { Mic } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { ConfigSlider } from './ConfigSlider';
import { Switch } from '@/components/ui/switch';
import { VoiceOverConfig } from './types';

interface VoiceOverComponentProps {
  enabled: boolean;
  config: VoiceOverConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: VoiceOverConfig) => void;
}

const voiceOptions = [
  { value: 'alloy', label: 'Alloy (Neutral)' },
  { value: 'echo', label: 'Echo (Male)' },
  { value: 'fable', label: 'Fable (British)' },
  { value: 'onyx', label: 'Onyx (Deep Male)' },
  { value: 'nova', label: 'Nova (Female)' },
  { value: 'shimmer', label: 'Shimmer (Warm Female)' },
];

export function VoiceOverComponent({ enabled, config, onToggle, onConfigChange }: VoiceOverComponentProps) {
  const configured = config.voice !== '';

  return (
    <BrandComponentCard
      name="Voice Over Voice and Level"
      description="Configure AI voice narration settings"
      icon={<Mic className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Voice Selection"
          value={config.voice}
          options={voiceOptions}
          onChange={(voice) => onConfigChange({ ...config, voice })}
          placeholder="Select voice..."
        />
        <ConfigSlider
          label="Volume Level"
          value={config.volume}
          min={0}
          max={100}
          unit="%"
          onChange={(volume) => onConfigChange({ ...config, volume })}
        />
      </div>
      
      <div className="flex items-center gap-3 mt-6">
        <Switch
          checked={config.duckingEnabled}
          onCheckedChange={(duckingEnabled) => onConfigChange({ ...config, duckingEnabled })}
          className="data-[state=checked]:bg-enabled"
        />
        <div>
          <label className="text-sm font-medium text-foreground">Audio Ducking</label>
          <p className="text-xs text-muted-foreground">Automatically lower background audio during voiceover</p>
        </div>
      </div>
    </BrandComponentCard>
  );
}
