"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        pathname === path
            ? "w-full flex items-center p-4 bg-blue-50 text-blue-600"
            : "w-full flex items-center p-4 hover:bg-blue-50 text-gray-600";

    return (
        <nav className="mt-8">
            <Link href="/karyawan" >
                <div className={linkClass("/karyawan")}>
                    <i className="fas fa-home mr-4"></i>
                    <span>Dashboard</span>
                </div>
            </Link>
            <Link href="/karyawan/leave">
                <div className={linkClass("/karyawan/leave")}>
                    <i className="fas fa-calendar mr-4"></i>
                    <span>Leave</span>
                </div>
            </Link>
            <Link href="/karyawan/payslip">
                <div className={linkClass("/karyawan/payslip")}>
                    <i className="fas fa-dollar-sign mr-4"></i>
                    <span>Payslip</span>
                </div>
            </Link>
        </nav>
    );
}