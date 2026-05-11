import { priceConfig } from "../config/priceConfig";

export default function PricesPage() {
    return <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">I nostri prezzi</h1>
        <p className="text-lg">Scopri i nostri prezzi</p>
    </div>
}

export function PricesPreview({ className }: { className: string }) {

    return (
        <div className={`${className}`}>
            {priceConfig.categorie.map((category) => (
                <div key={category.name}>
                    <p className="text-3xl">{category.name}</p>

                    <ul>
                        {category.prodotti.map((product) => (
                            <li key={product.name} className="text-left text-xl list-disc ml-10">
                                <p>{product.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}