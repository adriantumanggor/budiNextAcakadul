import React from "react";
import { AdminNavbar } from "../components/Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <aside className="w-64 bg-white shadow-lg fixed h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="font-bold text-xl text-blue-600">BUDIJAYA Admin</h1>
                </div>
                <AdminNavbar />
            </aside>

            <main className="ml-64 flex-1 bg-gray-100">{children}</main>
        </div>
    );
}
