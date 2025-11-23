import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({ title, description, actions, className }: PageHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 md:flex-row md:items-center md:justify-between', className)}>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-xs text-muted-foreground md:text-sm">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}