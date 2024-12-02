import React from "react";
import { StaffNavbar } from "../../components/Navbar";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from 'jsonwebtoken'


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleLogout = () => {
        const decodedToken = jwt.decode(Cookies.get('auth_token') || '');

        if (decodedToken) {

            Object.keys(decodedToken).forEach((key) => {

                Cookies.remove(key); // Remove each cookie set from the token

            });

        }

        // Also clear specific cookies

        Cookies.remove('auth_token'); // Remove the JWT token

        Cookies.remove('user_role'); // Remove the user role


        // Redirect the user to the login page or home page

        router.push('/login');
    }

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
            <main className="ml-64 flex-1 ">
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
