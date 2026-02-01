// Basic fetcher wrapper for future use with SWR/React Query or standard fetch
export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error fetching data");
  return res.json();
};
