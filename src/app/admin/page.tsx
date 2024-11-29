import Greeting from "../components/Greeting/Greeting";
import Card from "../components/Card/Card";
import { getDataCards } from "../services/api";

export default async function Page() {
  // Static data untuk gradient dan icon
  const staticCardData = [
    { 
      title: "Total Karyawan", 
      gradient: "bg-gradient-to-br from-blue-600 to-blue-700", 
      iconClass: "fas fa-user-friends" 
    },
    { 
      title: "Hadir Hari Ini", 
      gradient: "bg-gradient-to-br from-green-500 to-green-600", 
      iconClass: "fas fa-user-check" 
    },
    { 
      title: "Cuti", 
      gradient: "bg-gradient-to-br from-yellow-500 to-yellow-600", 
      iconClass: "fas fa-suitcase-rolling" 
    },
    { 
      title: "Jam Kerja Minggu Ini", 
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600", 
      iconClass: "fas fa-hourglass-half" 
    }
  ];

  // Mengambil data dinamis dari API
  const dynamicCards = await getDataCards();

  // Menggabungkan static data dengan dynamic data
  const cards = staticCardData.map((staticCard, index) => ({
    ...staticCard,
    value: dynamicCards[index].value,
    description: dynamicCards[index].description
  }));

  return (
    <div>
      <div>
        <Greeting />
      </div>
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
  );
}