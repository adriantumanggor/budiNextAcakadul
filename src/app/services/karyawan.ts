import { fetchAPI } from "../lib/apiClient";
import { Karyawan } from "../types/api";

// Create (POST) - Tambah Karyawan Baru
export async function createKaryawan(karyawanData: Omit<Karyawan, 'id'>): Promise<Karyawan> {
    return fetchAPI<Karyawan>("/karyawan", {
        method: "POST",
        body: JSON.stringify(karyawanData)
    });
}

// Read (GET) - Ambil Semua Karyawan
export async function getKaryawan(): Promise<Karyawan[]> {
    return fetchAPI<Karyawan[]>("/karyawan");
}

// Read (GET) - Ambil Karyawan Berdasarkan ID
export async function getKaryawanById(id: string): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`);
}

// Update (PUT) - Update Seluruh Data Karyawan
export async function updateKaryawan(id: string, karyawanData: Karyawan): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`, {
        method: "PUT",
        body: JSON.stringify(karyawanData)
    });
}

// Update (PATCH) - Update Sebagian Data Karyawan
export async function patchKaryawan(id: string, karyawanData: Partial<Karyawan>): Promise<Karyawan> {
    return fetchAPI<Karyawan>(`/karyawan/${id}`, {
        method: "PATCH",
        body: JSON.stringify(karyawanData)
    });
}

// Delete (DELETE) - Hapus Karyawan
export async function deleteKaryawan(id: string): Promise<void> {
    return fetchAPI<void>(`/karyawan/${id}`, {
        method: "DELETE"
    });
}