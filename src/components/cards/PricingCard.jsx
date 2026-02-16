import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({
    title,
    description,
    price,
    features,
    isPremium,
    buttonText = "Book now",
    onButtonClick,
    className = ""
}) => (
    <div
        className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border transition-all duration-300 h-full flex flex-col gap-6
        ${isPremium
                ? 'border-blue-500 shadow-xl bg-white relative overflow-hidden'
                : 'border-gray-100 shadow-sm bg-white'
            } ${className}`}
    >
        {isPremium && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl">
                RECOMMENDED
            </div>
        )}

        {/* HEADER */}
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-xs text-gray-500">{description}</p>
        </div>

        {/* PRICE */}
        <div>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">{price}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Billed monthly</p>
        </div>

        {/* BUTTON */}
        <button
            onClick={() =>
                window.open(
                    'https://wa.me/6287788714970?text=Halo%20Ditz%20Creative%20Lab!%20Saya%20tertarik%20dengan%20layanan%20Anda.%20Boleh%20kita%20diskusi%20lebih%20lanjut?',
                    '_blank'
                )
            }
            className={`w-full py-3 px-6 rounded-full font-bold transition-colors
    ${isPremium
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-50 text-blue-500 hover:bg-blue-100'
                }`}
        >
            {buttonText}
        </button>


        {/* DIVIDER */}
        <div className="border-t border-dashed border-gray-200"></div>

        {/*FEATURES*/}
        <div>
            <p className="font-bold text-sm mb-4">What will you get</p>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-gray-600"
                    >
                        <CheckCircle2
                            size={16}
                            className="text-blue-500 mt-1 shrink-0"
                        />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default PricingCard;
