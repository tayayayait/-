import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const filterChipVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all cursor-pointer select-none',
  {
    variants: {
      selected: {
        true: 'bg-primary text-primary-foreground border-primary',
        false: 'bg-background text-foreground border-border hover:bg-secondary',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export interface FilterChipProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterChipVariants> {
  onRemove?: () => void;
  removable?: boolean;
}

export function FilterChip({
  className,
  selected,
  children,
  onRemove,
  removable = false,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      className={cn(filterChipVariants({ selected }), className)}
      {...props}
    >
      {children}
      {removable && selected && (
        <X
          className="h-3.5 w-3.5 opacity-70 hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        />
      )}
    </button>
  );
}
