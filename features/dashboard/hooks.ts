import { useState, useEffect } from 'react';
import { TeamAdoptionData } from './types';
import { getTeamAdoptionData } from './api';

export function useDashboardData() {
  const [data, setData] = useState<TeamAdoptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const adoptionData = await getTeamAdoptionData();
        setData(adoptionData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}