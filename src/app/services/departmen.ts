// departmentsApi.ts
import { fetchAPI } from './api'; // Import the common API function
import { Department } from '../types/api';

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