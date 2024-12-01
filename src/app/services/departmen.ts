import axios from 'axios';
import { Department } from '../types/api'; // Define a Department type in your types/api file

const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend API URL

// Helper function to handle API calls
async function fetchAPI<T>(
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

// Create (POST) - Add a new Department
export async function createDepartemen(departemenData: Omit<Department, 'id'>): Promise<Department> {
    return fetchAPI<Department>('/departemen', {
        method: 'POST',
        body: departemenData,
    });
}

// Read (GET) - Get all Department
export async function getDepartemen(): Promise<Department[]> {
    return fetchAPI<Department[]>('/departemen');
}

// Read (GET) - Get a Department by ID
export async function getDepartemenById(id: string): Promise<Department> {
    return fetchAPI<Department>(`/departemen/${id}`);
}

// Update (PUT) - Update entire Department data
export async function updateDepartemen(id: string, departemenData: Department): Promise<Department> {
    return fetchAPI<Department>(`/departemen/${id}`, {
        method: 'PUT',
        body: departemenData,
    });
}

// Update (PATCH) - Update part of the Department data
export async function patchDepartemen(id: string, departemenData: Partial<Department>): Promise<Department> {
    return fetchAPI<Department>(`/departemen/${id}`, {
        method: 'PATCH',
        body: departemenData,
    });
}

// Delete (DELETE) - Delete a Department
export async function deleteDepartemen(id: string): Promise<void> {
    return fetchAPI<void>(`/departemen/${id}`, {
        method: 'DELETE',
    });
}
