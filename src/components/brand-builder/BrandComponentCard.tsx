import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { CheckCircle2 } from 'lucide-react';

interface BrandComponentCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  enabled: boolean;
  configured: boolean;
  onToggle: (enabled: boolean) => void;
  children: ReactNode;
}

export function BrandComponentCard({
  name,
  description,
  icon,
  enabled,
  configured,
  onToggle,
  children,
}: BrandComponentCardProps) {
  return (
    <div
      className={`card-elevated transition-all duration-200 ${
        enabled ? 'ring-1 ring-enabled/20 bg-card' : 'bg-card/50'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              enabled ? 'bg-enabled-bg text-enabled' : 'bg-muted text-muted-foreground'
            }`}
          >
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">{name}</h3>
              {configured && enabled && (
                <CheckCircle2 className="h-4 w-4 text-success" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Switch
          checked={enabled}
          onCheckedChange={onToggle}
          className="data-[state=checked]:bg-enabled"
        />
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {enabled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-border-subtle px-5 py-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
