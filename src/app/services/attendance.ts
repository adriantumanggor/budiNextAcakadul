import { fetchAPI } from './api';
import { Attendance } from '../types/api';
// Fetch all absensi
export async function getAllAbsensi(): Promise<Attendance[]> {
    return await fetchAPI<Attendance[]>('/absensi');
}

// Fetch a single absensi by ID
export async function getAbsensiById(id: number): Promise<Attendance> {
    return await fetchAPI<Attendance>(`/absensi/${id}`);
}

// Create a new absensi
export async function createAbsensi(karyawanId: string): Promise<Attendance> {
    return await fetchAPI<Attendance>('/absensi', {
        method: 'POST',
        body: JSON.stringify({ karyawan_id: karyawanId }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

// Update an existing absensi by ID
export async function updateAbsensi(id: number, absensi: Partial<Attendance>): Promise<Attendance> {
    return await fetchAPI<Attendance>(`/absensi/${id}`, {
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
