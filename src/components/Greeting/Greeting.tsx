"use client"
import { useAuth } from "@/context/authContext";

export default function Greeting() {

    const { user } = useAuth();
    const name = user?.username || "Guest";

    return (
        <div
            className="mb-10 bg-gradient-to-r text-black p-6 text-center transform transition-all"
        >
            <h2 className="text-3xl font-bold mb-2">Hello, {name}!</h2>
            <p className="text-lg font-medium text-black/90">
                Welcome back to BUDI-HR Dashboard! Here’s an overview of today’s stats.
            </p>
        </div>
    );
}
