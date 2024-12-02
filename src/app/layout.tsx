import React from "react";
import "./globals.css";
import { AuthProvider } from "@/context/authContext";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-gray-100">
                <AuthProvider>
                    <div>{children}</div>
                </AuthProvider>
            </body>
        </html>
    );
}
