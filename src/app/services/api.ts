// api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend API URL

// Helper function to handle API calls
export async function fetchAPI<T>(
    url: string,
    options: { method?: string; body?: any; headers?: Record<string, string> } = {}
): Promise<T> {
    const { method = 'GET', body = null, headers = {} } = options;

    try {
        const response = await axios({
            url: `${API_BASE_URL}${url}`,
            method,
            data: body,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
        return response.data;
    } catch (error: any) {
        console.error('API Error:', error.message);

        if (error.response) {
            console.error('Response Data:', error.response.data);
            console.error('Status Code:', error.response.status);
        }

        throw new Error(error.response?.data?.message || 'An error occurred with the API');
    }
}