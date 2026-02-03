export interface BrandComponent {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  configured: boolean;
  icon: string;
}

export interface LogoConfig {
  file: File | null;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  size: number;
  opacity: number;
}

export interface SlateConfig {
  preRollFile: File | null;
  postRollFile: File | null;
  duration: number;
  textOverlay: string;
}

export interface FontConfig {
  family: string;
  weight: string;
  size: number;
  lineSpacing: number;
}

export interface TextStyleConfig {
  textColor: string;
  highlightColor: string;
  opacity: number;
  borderRadius: number;
}

export interface TransitionConfig {
  style: string;
  duration: number;
  enableIn: boolean;
  enableOut: boolean;
}

export interface FrameConfig {
  style: string;
  color: string;
  thickness: number;
}

export interface VoiceOverConfig {
  voice: string;
  volume: number;
  duckingEnabled: boolean;
}

export interface BackgroundAudioConfig {
  file: File | null;
  volume: number;
  loop: boolean;
  fadeInDuration: number;
  fadeOutDuration: number;
}

export interface StylingConfig {
  preset: string;
  shadowEnabled: boolean;
  cornerRadius: number;
}

export interface TemplateConfig {
  selectedTemplate: string;
  overrideEnabled: boolean;
}

export interface BrandPackageConfig {
  logo: LogoConfig;
  slate: SlateConfig;
  font: FontConfig;
  textStyle: TextStyleConfig;
  transition: TransitionConfig;
  frame: FrameConfig;
  voiceOver: VoiceOverConfig;
  backgroundAudio: BackgroundAudioConfig;
  styling: StylingConfig;
  template: TemplateConfig;
}
