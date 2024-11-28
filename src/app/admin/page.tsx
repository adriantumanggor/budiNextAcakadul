import Greeting from "../components/Greeting/Greeting";
import Card from "../components/Card/Card";
import { getDataCards } from "../services/api";

export default async function Page() {
    const cards = await getDataCards();
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
