'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colors = [
  { value: '#0046c0', label: 'Blue' },
  { value: '#10b981', label: 'Green' },
  { value: '#ef4444', label: 'Red' },
  { value: '#f59e0b', label: 'Orange' },
  { value: '#8b5cf6', label: 'Purple' },
  { value: '#ec4899', label: 'Pink' },
  { value: '#06b6d4', label: 'Cyan' },
  { value: '#84cc16', label: 'Lime' },
];

export function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium text-gray-900">Event Color</label>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            onClick={() => onColorChange(color.value)}
            className={cn(
              'relative h-8 w-8 rounded-full transition-all hover:scale-110',
              selectedColor === color.value && 'ring-2 ring-offset-2 ring-gray-900'
            )}
            style={{ backgroundColor: color.value }}
            title={color.label}
          >
            {selectedColor === color.value && (
              <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}