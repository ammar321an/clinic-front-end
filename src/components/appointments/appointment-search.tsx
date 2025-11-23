'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/use-debounce';
import { useEffect, useState } from 'react';

interface AppointmentSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function AppointmentSearch({ onSearch, placeholder = 'Search by name or email...' }: AppointmentSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="relative w-full md:w-80">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-10 pl-10 text-xs"
      />
    </div>
  );
}