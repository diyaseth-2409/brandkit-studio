import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, FilePlus, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { LogoComponent } from './LogoComponent';
import { SlateComponent } from './SlateComponent';
import { FontComponent } from './FontComponent';
import { TextStyleComponent } from './TextStyleComponent';
import { TransitionComponent } from './TransitionComponent';
import { FrameComponent } from './FrameComponent';
import { VoiceOverComponent } from './VoiceOverComponent';
import { BackgroundAudioComponent } from './BackgroundAudioComponent';
import { StylingComponent } from './StylingComponent';
import { TemplateComponent } from './TemplateComponent';

import {
  LogoConfig,
  SlateConfig,
  FontConfig,
  TextStyleConfig,
  TransitionConfig,
  FrameConfig,
  VoiceOverConfig,
  BackgroundAudioConfig,
  StylingConfig,
  TemplateConfig,
} from './types';

const defaultLogoConfig: LogoConfig = {
  file: null,
  position: 'top-right',
  size: 15,
  opacity: 100,
};

const defaultSlateConfig: SlateConfig = {
  preRollFile: null,
  postRollFile: null,
  duration: 5,
  textOverlay: '',
};

const defaultFontConfig: FontConfig = {
  family: '',
  weight: '400',
  size: 24,
  lineSpacing: 1.5,
};

const defaultTextStyleConfig: TextStyleConfig = {
  textColor: '#000000',
  highlightColor: '#FFFF00',
  opacity: 100,
  borderRadius: 4,
};

const defaultTransitionConfig: TransitionConfig = {
  style: '',
  duration: 0.5,
  enableIn: true,
  enableOut: true,
};

const defaultFrameConfig: FrameConfig = {
  style: 'none',
  color: '#1a365d',
  thickness: 4,
};

const defaultVoiceOverConfig: VoiceOverConfig = {
  voice: '',
  volume: 80,
  duckingEnabled: true,
};

const defaultBackgroundAudioConfig: BackgroundAudioConfig = {
  file: null,
  volume: 30,
  loop: true,
  fadeInDuration: 2,
  fadeOutDuration: 2,
};

const defaultStylingConfig: StylingConfig = {
  preset: '',
  shadowEnabled: true,
  cornerRadius: 8,
};

const defaultTemplateConfig: TemplateConfig = {
  selectedTemplate: '',
  overrideEnabled: false,
};

interface EnabledComponents {
  logo: boolean;
  slate: boolean;
  font: boolean;
  textStyle: boolean;
  transition: boolean;
  frame: boolean;
  voiceOver: boolean;
  backgroundAudio: boolean;
  styling: boolean;
  template: boolean;
}

export function BrandPackageBuilder() {
  const [enabledComponents, setEnabledComponents] = useState<EnabledComponents>({
    logo: false,
    slate: false,
    font: false,
    textStyle: false,
    transition: false,
    frame: false,
    voiceOver: false,
    backgroundAudio: false,
    styling: false,
    template: false,
  });

  const [logoConfig, setLogoConfig] = useState<LogoConfig>(defaultLogoConfig);
  const [slateConfig, setSlateConfig] = useState<SlateConfig>(defaultSlateConfig);
  const [fontConfig, setFontConfig] = useState<FontConfig>(defaultFontConfig);
  const [textStyleConfig, setTextStyleConfig] = useState<TextStyleConfig>(defaultTextStyleConfig);
  const [transitionConfig, setTransitionConfig] = useState<TransitionConfig>(defaultTransitionConfig);
  const [frameConfig, setFrameConfig] = useState<FrameConfig>(defaultFrameConfig);
  const [voiceOverConfig, setVoiceOverConfig] = useState<VoiceOverConfig>(defaultVoiceOverConfig);
  const [backgroundAudioConfig, setBackgroundAudioConfig] = useState<BackgroundAudioConfig>(defaultBackgroundAudioConfig);
  const [stylingConfig, setStylingConfig] = useState<StylingConfig>(defaultStylingConfig);
  const [templateConfig, setTemplateConfig] = useState<TemplateConfig>(defaultTemplateConfig);

  const toggleComponent = (component: keyof EnabledComponents) => {
    setEnabledComponents((prev) => ({ ...prev, [component]: !prev[component] }));
  };

  const enabledCount = Object.values(enabledComponents).filter(Boolean).length;

  const handleSave = () => {
    toast.success('Brand Package saved successfully', {
      description: `${enabledCount} components configured`,
    });
  };

  const handleSaveAsNew = () => {
    toast.success('Saved as new template', {
      description: 'Your brand package template has been created',
    });
  };

  const handleSaveAndApply = () => {
    toast.success('Brand Package saved and applied', {
      description: 'Configuration applied to current project',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Brand Package Builder</h1>
              <p className="text-sm text-muted-foreground">
                Configure brand elements once and reuse them across projects
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleSaveAsNew} className="hidden sm:flex">
                <FilePlus className="mr-2 h-4 w-4" />
                Save as New Template
              </Button>
              <Button onClick={handleSave} className="bg-primary hover:bg-primary-hover">
                <Save className="mr-2 h-4 w-4" />
                Save Brand Package
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Status Bar */}
      <div className="border-b border-border-subtle bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-3">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-enabled" />
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">{enabledCount}</span> components enabled
              </span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-muted-foreground">
              All changes are saved automatically
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LogoComponent
            enabled={enabledComponents.logo}
            config={logoConfig}
            onToggle={() => toggleComponent('logo')}
            onConfigChange={setLogoConfig}
          />

          <SlateComponent
            enabled={enabledComponents.slate}
            config={slateConfig}
            onToggle={() => toggleComponent('slate')}
            onConfigChange={setSlateConfig}
          />

          <FontComponent
            enabled={enabledComponents.font}
            config={fontConfig}
            onToggle={() => toggleComponent('font')}
            onConfigChange={setFontConfig}
          />

          <TextStyleComponent
            enabled={enabledComponents.textStyle}
            config={textStyleConfig}
            onToggle={() => toggleComponent('textStyle')}
            onConfigChange={setTextStyleConfig}
          />

          <TransitionComponent
            enabled={enabledComponents.transition}
            config={transitionConfig}
            onToggle={() => toggleComponent('transition')}
            onConfigChange={setTransitionConfig}
          />

          <FrameComponent
            enabled={enabledComponents.frame}
            config={frameConfig}
            onToggle={() => toggleComponent('frame')}
            onConfigChange={setFrameConfig}
          />

          <VoiceOverComponent
            enabled={enabledComponents.voiceOver}
            config={voiceOverConfig}
            onToggle={() => toggleComponent('voiceOver')}
            onConfigChange={setVoiceOverConfig}
          />

          <BackgroundAudioComponent
            enabled={enabledComponents.backgroundAudio}
            config={backgroundAudioConfig}
            onToggle={() => toggleComponent('backgroundAudio')}
            onConfigChange={setBackgroundAudioConfig}
          />

          <StylingComponent
            enabled={enabledComponents.styling}
            config={stylingConfig}
            onToggle={() => toggleComponent('styling')}
            onConfigChange={setStylingConfig}
          />

          <TemplateComponent
            enabled={enabledComponents.template}
            config={templateConfig}
            onToggle={() => toggleComponent('template')}
            onConfigChange={setTemplateConfig}
          />
        </motion.div>
      </main>

      {/* Footer Actions */}
      <footer className="sticky bottom-0 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleSave}>
                Save Brand Package
              </Button>
              <Button onClick={handleSaveAndApply} className="bg-accent hover:bg-accent-glow text-accent-foreground">
                <CheckCircle className="mr-2 h-4 w-4" />
                Save & Apply to Project
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
