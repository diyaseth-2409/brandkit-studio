import { useRef, useState } from 'react';
import { Upload, X, Image, Music, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  label: string;
  accept: string;
  type: 'image' | 'audio' | 'video';
  value: File | null;
  onChange: (file: File | null) => void;
}

export function FileUpload({ label, accept, type, value, onChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  const Icon = type === 'image' ? Image : type === 'audio' ? Music : Video;

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      
      {value ? (
        <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-enabled-bg">
            <Icon className="h-5 w-5 text-enabled" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{value.name}</p>
            <p className="text-xs text-muted-foreground">
              {(value.size / 1024).toFixed(1)} KB
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => onChange(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors cursor-pointer ${
            dragActive
              ? 'border-enabled bg-enabled-bg'
              : 'border-border hover:border-muted-foreground hover:bg-muted/30'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="mb-2 h-6 w-6 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Drop file here or <span className="text-enabled font-medium">browse</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground/70">
            {type === 'image' ? 'PNG, JPG, SVG' : type === 'audio' ? 'MP3, WAV' : 'MP4, MOV'}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onChange={handleChange}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
