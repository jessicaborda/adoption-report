import { TeamAdoptionData } from './types';
import db from '../../server/db.json';

export async function getTeamAdoptionData(): Promise<TeamAdoptionData | null> {
  // Use local JSON data for static export / production
  if (process.env.NODE_ENV === 'production') {
    return db.adoption as TeamAdoptionData;
  }

  try {
    const res = await fetch("http://localhost:3001/adoption", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000)
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch failed. Please ensure the json-server is running on port 3001.", error);
    // Fallback to local data if fetch fails (more robust for dev)
    return db.adoption as TeamAdoptionData;
  }
}
