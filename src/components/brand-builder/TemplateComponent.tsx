import { LayoutTemplate, Eye } from 'lucide-react';
import { BrandComponentCard } from './BrandComponentCard';
import { ConfigSelect } from './ConfigSelect';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { TemplateConfig } from './types';

interface TemplateComponentProps {
  enabled: boolean;
  config: TemplateConfig;
  onToggle: (enabled: boolean) => void;
  onConfigChange: (config: TemplateConfig) => void;
}

const templates = [
  { value: 'breaking-news', label: 'Breaking News' },
  { value: 'feature-story', label: 'Feature Story' },
  { value: 'interview', label: 'Interview' },
  { value: 'documentary', label: 'Documentary' },
  { value: 'sports-highlight', label: 'Sports Highlight' },
  { value: 'entertainment', label: 'Entertainment' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'social-media', label: 'Social Media' },
];

export function TemplateComponent({ enabled, config, onToggle, onConfigChange }: TemplateComponentProps) {
  const configured = config.selectedTemplate !== '';

  return (
    <BrandComponentCard
      name="Template Selection"
      description="Start from an existing base template"
      icon={<LayoutTemplate className="h-5 w-5" />}
      enabled={enabled}
      configured={configured}
      onToggle={onToggle}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConfigSelect
          label="Base Template"
          value={config.selectedTemplate}
          options={templates}
          onChange={(selectedTemplate) => onConfigChange({ ...config, selectedTemplate })}
          placeholder="Select template..."
        />
        <div className="flex flex-col justify-end">
          <Button
            variant="outline"
            disabled={!config.selectedTemplate}
            className="w-full"
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview Template
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-3 mt-6">
        <Switch
          checked={config.overrideEnabled}
          onCheckedChange={(overrideEnabled) => onConfigChange({ ...config, overrideEnabled })}
          className="data-[state=checked]:bg-enabled"
        />
        <div>
          <label className="text-sm font-medium text-foreground">Override Template Settings</label>
          <p className="text-xs text-muted-foreground">Allow custom configurations to override template defaults</p>
        </div>
      </div>
    </BrandComponentCard>
  );
}
