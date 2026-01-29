import { TeamAdoptionData } from './types';



export async function getTeamAdoptionData(): Promise<TeamAdoptionData | null> {
  try {
    const res = await fetch("http://localhost:3001/adoption", {
      cache: "no-store",
      // Add a short timeout to prevent hanging
      signal: AbortSignal.timeout(5000)
    });

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Fetch failed. Please ensure the json-server is running on port 3001.", error);
    return null;
  }
}
