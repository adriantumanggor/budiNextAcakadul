import { fetchAPI } from "../lib/apiClient";

// Fungsi untuk mengambil data cards
export async function getDataCards() {
    return fetchAPI<Array<Card>>("/datacards");
}

// Fungsi untuk mengambil data karyawan
export async function getKaryawan() {
    return fetchAPI<Array<Karyawan>>("/karyawan");
}

// Fungsi untuk mengambil data departemen
export async function getDepartemen() {
    return fetchAPI<Array<Departemen>>("/departemen");
}

// Fungsi untuk mengambil data tim saya
export async function getMyTeam() {
    return fetchAPI<Array<MyTeam>>("/myteam");
}

// Tambahkan fungsi lainnya sesuai kebutuhan
export async function getAttendance() {
    return fetchAPI<Array<Attendance>>("/attendance");
}

export async function getLeaving() {
    return fetchAPI<Array<Leaving>>("/leaving");
}

// Interface/Type untuk tipe data masing-masing respons
export interface Card {
    title: string;
    value: number | string;
    description: string;
    gradient: string;
    iconClass: string;
}

export interface Karyawan {
    id: number;
    name: string;
    position: string;
}

export interface Departemen {
    id: number;
    name: string;
}

export interface MyTeam {
    id: number;
    name: string;
    role: string;
}

export interface Attendance {
    date: string;
    present: number;
    absent: number;
}

export interface Leaving {
    id: number;
    name: string;
    reason: string;
}
