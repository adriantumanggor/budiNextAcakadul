"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function AdminNavbar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        pathname === path
            ? "w-full flex items-center p-4 bg-blue-50 text-blue-600"
            : "w-full flex items-center p-4 hover:bg-blue-50 text-gray-600";

    return (
        <div className="mt-8">
            <Link href="/admin">
                <div className={linkClass("/admin")}>
                    <i className="fas fa-home mr-4"></i>
                    <span>Admin Dashboard</span>
                </div>
            </Link>
            <Link href="/admin/manage-users">
                <div className={linkClass("/admin/manage-users")}>
                    <i className="fas fa-users mr-4"></i>
                    <span>Manage Users</span>
                </div>
            </Link>
            <Link href="/admin/manage-departments">
                <div className={linkClass("/admin/manage-departments")}>
                    <i className="fas fa-building mr-4"></i>
                    <span>Manage departments</span>
                </div>
            </Link>
        </div>
    );
}