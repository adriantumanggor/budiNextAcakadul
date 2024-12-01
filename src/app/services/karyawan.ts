import axios from 'axios';
import { Karyawan } from '../types/api';

const API_BASE_URL = 'http://localhost:3000'; // Ganti dengan URL backend kamu

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

        throw new Error(error.response?.data?.message || 'Terjadi kesalahan pada API');
    }
}

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
