import { fetchAPI } from "../lib/apiClient";
import { Card, Karyawan, Departemen, MyTeam, Attendance, Leaving } from "../types/api";

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
