import { fetchAPI } from './api';
import { Absensi } from '../types/api';

// Fetch all absensi
export async function getAllAbsensi(): Promise<Absensi[]> {
    return await fetchAPI<Absensi[]>('/absensi');
}

// Fetch a single absensi by ID
export async function getAbsensiById(id: number): Promise<Absensi> {
    return await fetchAPI<Absensi>(`/absensi/${id}`);
}

// Create a new absensi
export async function createAbsensi(karyawanId: string): Promise<Absensi> {
    return await fetchAPI<Absensi>('/absensi', {
        method: 'POST',
        body: JSON.stringify({ karyawan_id: karyawanId }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

// Update an existing absensi by ID
export async function updateAbsensi(id: number, absensi: Partial<Absensi>): Promise<Absensi> {
    return await fetchAPI<Absensi>(`/absensi/${id}`, {
        method: 'PUT',
        body: JSON.stringify(absensi),
    });
}

// Delete an absensi by ID
export async function deleteAbsensi(id: number): Promise<void> {
    await fetchAPI<void>(`/absensi/${id}`, {
        method: 'DELETE',
    });
}
