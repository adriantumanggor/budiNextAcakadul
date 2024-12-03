'use client';

import React from "react";
import { StaffNavbar } from "../../components/Navbar";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/context/authContext";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter(); // Gunakan useRouter
    const { user } = useAuth();
    const karyawan_id = user?.karyawan_id || '';

    const handleLogout = () => {
        try {
            localStorage.removeItem(`attendance_completed_${karyawan_id}`); // Hapus status lokal
            Cookies.remove("auth_token");

            router.push("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg fixed h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="font-bold text-xl text-blue-600">BUDIJAYA Staff</h1>
                </div>
                <StaffNavbar />
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h2 className="text-xl font-semibold text-gray-800">Staff Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">Staff User</span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2 rounded-lg hover:bg-gray-100">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Children (Page Content) */}
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}
