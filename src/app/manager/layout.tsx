import React from "react";
import { AdminNavbar } from "../../components/Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg fixed h-full">
                <div className="flex items-center justify-between p-4 border-b">
                    <h1 className="font-bold text-xl text-blue-600">BUDIJAYA Admin</h1>
                </div>
                <AdminNavbar />
            </aside>

            {/* Main Content */}
            <main className="ml-64 flex-1 ">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium">Admin User</span>
                            </div>
                            <button className="p-2 rounded-lg hover:bg-gray-100">
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
