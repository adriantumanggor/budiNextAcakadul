import Greeting from "../components/Greeting/Greeting";
import Card from "../components/Card/Card";

export default function Page() {
    const cards = [
        {
            title: "Total Karyawan",
            value: 16,
            description: "Total karyawan",
            gradient: "bg-gradient-to-br from-blue-600 to-blue-700",
            iconClass: "fas fa-user-friends",
        },
        {
            title: "Hadir Hari Ini",
            value: 14,
            description: "87.5% kehadiran minggu ini",
            gradient: "bg-gradient-to-br from-green-500 to-green-600",
            iconClass: "fas fa-user-check",
        },
        {
            title: "Cuti",
            value: 2,
            description: "Jumlah karyawan yang mengambil cuti minggu ini",
            gradient: "bg-gradient-to-br from-yellow-500 to-yellow-600",
            iconClass: "fas fa-suitcase-rolling",
        },
        {
            title: "Jam Kerja Minggu Ini",
            value: "40 jam",
            description: "Rata-rata jam kerja karyawan minggu ini",
            gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
            iconClass: "fas fa-hourglass-half",
        },
    ];

    return (
            <div className="bg-gray-100">
                <div className="min-h-screen flex">
                    <main className="flex-1">
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

                        <div className="p-8">
                            <Greeting />
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                {cards.map((card, index) => (
                                    <Card
                                        key={index}
                                        title={card.title}
                                        value={card.value}
                                        description={card.description}
                                        gradient={card.gradient}
                                        iconClass={card.iconClass}
                                    />
                                ))}
                            </div>
                        </div>

                    </main>
                </div>
            </div>
    );
}


// import RootLayout from "../layout";
// import Greeting from "../components/Greeting/Greeting";
// import Card from "../components/Card/Card";
// import { getDataCards } from "../services/api";

// export default async function Page() {
//     const cards = await getDataCards();

//     return (
//         <RootLayout role="admin">
//             <div className="bg-gray-100">
//                 <div className="min-h-screen flex">
//                     <main className="ml-64 flex-1">
//                         <header className="bg-white shadow-sm">
//                             <div className="flex items-center justify-between px-8 py-4">
//                                 <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
//                                 <div className="flex items-center space-x-4">
//                                     <div className="flex items-center space-x-2">
//                                         <span className="text-sm font-medium">Admin User</span>
//                                     </div>
//                                     <button className="p-2 rounded-lg hover:bg-gray-100">
//                                         <i className="fas fa-sign-out-alt"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </header>

//                         <div className="p-8">
//                             <Greeting />
//                             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
//                                 {cards.map((card, index) => (
//                                     <Card
//                                         key={index}
//                                         title={card.title}
//                                         value={card.value}
//                                         description={card.description}
//                                         gradient={card.gradient}
//                                         iconClass={card.iconClass}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </div>
//         </RootLayout>
//     );
// }
