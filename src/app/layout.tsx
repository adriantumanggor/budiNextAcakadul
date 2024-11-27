import React from "react";
import "./globals.css";
import { AdminNavbar, ManagerNavbar, StaffNavbar } from "./components/Navbar";

export default function RootLayout({
    children,
    role, // Tambahkan role
}: {
    children: React.ReactNode;
    role: "admin" | "manager" | "staff"; // Definisikan tipe role
}) {
    const renderNavbar = () => {
        switch (role) {
            case "admin":
                return <AdminNavbar />;
            case "manager":
                return <ManagerNavbar />;
            case "staff":
                return <StaffNavbar />;
            default:
                return null;
        }
    };

    return (
        <html lang="en">
            <head>
            <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />
            </head>
            <body>
                <aside className="w-64 bg-white shadow-lg fixed h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h1 className="font-bold text-xl text-blue-600">BUDIJAYA</h1>
                    </div>
                    {renderNavbar()}
                </aside>

                <div>{children}</div>
            </body>
        </html>
    );
}
