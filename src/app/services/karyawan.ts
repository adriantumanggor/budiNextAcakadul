// karyawanApi.ts
import { fetchAPI } from './api'; // Import the common API function
import { Karyawan, Manager } from '../types/api';

// Create (POST) - Tambah Karyawan Baru
export async function createKaryawan(karyawanData: Omit<Karyawan, 'id'>): Promise<Karyawan> {
    return fetchAPI<Karyawan>('/karyawan', {
        method: 'POST',
        body: karyawanData,
    });
}

// Read (GET) - Ambil Semua Karyawan
export async function getKaryawan(): Promise<Karyawan[]> {
    return fetchAPI<Karyawan[]>('/karyawan');
}

// Read (GET) - Ambil Karyawan Berdasarkan ID
export async function getKaryawanById(id: string): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`);
}

// Update (PUT) - Update Seluruh Data Karyawan
export async function updateKaryawan(id: string, karyawanData: Karyawan): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`, {
        method: 'PUT',
        body: karyawanData,
    });
}

// Update (PATCH) - Update Sebagian Data Karyawan
export async function patchKaryawan(id: string, karyawanData: Partial<Karyawan>): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`, {
        method: 'PATCH',
        body: karyawanData,
    });
}

// Delete (DELETE) - Hapus Karyawan
export async function deleteKaryawan(id: string): Promise<void> {
    return fetchAPI<void>(`/karyawan/${id}`, {
        method: 'DELETE',
    });
}

// New function to get all managers
export async function getManagers(): Promise<Manager[]> {
    return fetchAPI<Manager[]>('/karyawan/managers');
}