interface PositionSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const positions = [
  { id: 'top-left', label: 'TL' },
  { id: 'top-right', label: 'TR' },
  { id: 'center', label: 'C' },
  { id: 'bottom-left', label: 'BL' },
  { id: 'bottom-right', label: 'BR' },
];

export function PositionSelector({ label, value, onChange }: PositionSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="grid grid-cols-3 gap-2 w-fit">
        {['top-left', 'top-right', '', 'center', '', 'bottom-left', 'bottom-right'].map((pos, idx) => {
          if (pos === '') {
            if (idx === 2) return <div key={idx} />;
            if (idx === 4) return <div key={idx} />;
          }
          const position = positions.find(p => p.id === pos);
          if (!position) return <div key={idx} className="w-12 h-10" />;
          
          return (
            <button
              key={position.id}
              type="button"
              onClick={() => onChange(position.id)}
              className={`h-10 w-12 rounded-md border text-xs font-medium transition-all ${
                value === position.id
                  ? 'border-enabled bg-enabled-bg text-enabled'
                  : 'border-border bg-background text-muted-foreground hover:border-muted-foreground'
              }`}
            >
              {position.label}
            </button>
          );
        })}
      </div>
      <div className="relative w-36 h-24 rounded-lg border border-border bg-muted/30 mt-3">
        <div
          className={`absolute w-4 h-4 rounded-sm bg-enabled transition-all ${
            value === 'top-left' ? 'top-2 left-2' :
            value === 'top-right' ? 'top-2 right-2' :
            value === 'bottom-left' ? 'bottom-2 left-2' :
            value === 'bottom-right' ? 'bottom-2 right-2' :
            'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          }`}
        />
      </div>
    </div>
  );
}
