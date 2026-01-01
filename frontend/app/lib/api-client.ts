export async function apiRequest<T>(
  url: string,
  config?: RequestInit
): Promise<T> {
  const res = await fetch(url, config);

  if (!res.ok) throw new Error(`HTTP error status: ${res.status}`);

  const text = await res.text();

  if (!text) return null as T;

  try {
    return JSON.parse(text) as T;
  } catch (err: any) {
    throw new Error("Failed to parse JSON response", err);
  }
}

//   const finalConfig: RequestInit = {
//     credentials: "include",
//     ...config,
//   };
