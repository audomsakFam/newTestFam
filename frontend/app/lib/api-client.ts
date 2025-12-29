export async function apiRequest<T>(
  url: string,
  config?: RequestInit
): Promise<T> {
//   const finalConfig: RequestInit = {
//     credentials: "include",
//     ...config,
//   };

  const res = await fetch(url, config);

  if (!res.ok) throw new Error(`HTTP error status: ${res.status}`);

  return res.json() as Promise<T>;
}
