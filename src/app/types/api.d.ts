// src/types/api.d.ts
// Tipe untuk data card
export interface Card {
    title: string;
    value: number | string;
    description: string;
    gradient: string;
    iconClass: string;
}

// Tipe untuk data karyawan
export interface Karyawan {
    id: number;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
    status: string;
}

// Tipe untuk data departemen
export interface Department {
    id: number;
    name: string;
    manager_name: string;
    manager_id: string;
}

// Tipe untuk data tim saya
export interface MyTeam {
    id: number;
    name: string;
    role: string;
}

// Tipe untuk data izin/cuti (leaving)
export interface Leaving {
    id: number;
    name: string;
    reason: string;
}

// New type for manager data
export interface Manager {
    id: string;
    name: string;
}

export interface LeaveRequestData {
    id: number;
    employee: string;
    type: string;
    duration: string;
    start_date: string;
    end_date: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

export interface Absensi {
    id: number;
    name: string;
    tanggal: string; // date
    status: 'hadir' | 'alpha' | 'izin';
    waktu_masuk: string | null;
    waktu_keluar: string | null;
}
