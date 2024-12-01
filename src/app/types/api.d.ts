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
    id: string;
    name: string;
    manager_name: string;
    
}

// Tipe untuk data tim saya
export interface MyTeam {
    id: number;
    name: string;
    role: string;
}

// Tipe untuk data kehadiran (attendance)
export interface Attendance {
    date: string;
    present: number;
    absent: number;
}

// Tipe untuk data izin/cuti (leaving)
export interface Leaving {
    id: number;
    name: string;
    reason: string;
}
