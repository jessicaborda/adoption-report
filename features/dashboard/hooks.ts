import { useState } from 'react';

export function useDashboardControls() {
  const [filter, setFilter] = useState('all');

  const updateFilter = (newFilter: string) => {
    setFilter(newFilter);
    console.log(`Filter updated to: ${newFilter}`);
  };

  return {
    filter,
    updateFilter,
  };
}
