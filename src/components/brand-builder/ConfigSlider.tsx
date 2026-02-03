import { Slider } from '@/components/ui/slider';

interface ConfigSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
}

export function ConfigSlider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
}: ConfigSliderProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="text-sm font-mono text-muted-foreground tabular-nums">
          {value}{unit}
        </span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
        className="[&_[role=slider]]:bg-enabled [&_[role=slider]]:border-enabled [&_.bg-primary]:bg-enabled"
      />
    </div>
  );
}
