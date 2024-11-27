export const apiBaseUrl = "http://localhost:3000"; // Ganti dengan URL server API Anda

export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${apiBaseUrl}${endpoint}`;
    const defaultOptions: RequestInit = {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    };

    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }

    return response.json();
}
