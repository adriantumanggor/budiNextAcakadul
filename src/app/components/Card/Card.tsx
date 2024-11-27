type CardProps = {
    title: string;
    value: string | number;
    description: string;
    gradient: string;
    iconClass: string;
};

export default function Card({ title, value, description, gradient, iconClass }: CardProps) {
    return (
        <div
            className={`relative overflow-hidden ${gradient} rounded-lg shadow-lg p-5 text-white transform transition duration-300 ease-in-out hover:scale-105`}
        >
            <div className="absolute top-0 right-0 mt-3 mr-3 text-white/20">
                <i className={`${iconClass} text-4xl`}></i>
            </div>
            <div className="relative">
                <h3 className="text-white/90 font-semibold mb-2">{title}</h3>
                <p className="text-3xl font-bold mb-1">{value}</p>
                <p className="text-sm text-white/80">{description}</p>
            </div>
        </div>
    );
}
