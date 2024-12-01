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
            <body className="bg-gray-100">
                <div>{children}</div>
            </body>
        </html>
    );
}
