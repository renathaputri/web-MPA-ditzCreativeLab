import React from 'react';

const FocusCard = ({ title, icon: Icon, points, className = "" }) => (
    <div
        className={`
            bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem]
            outline outline-2 outline-blue-200
            hover:outline-blue-400 hover:shadow-lg
            transition-all duration-300
            h-full flex flex-col
            ${className}
        `}
    >

        <img
            src={Icon}
            alt={title}
            className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[326px] h-auto object-contain mx-auto"
        />




        <h3 className="text-center text-xl font-bold text-gray-900 mt-4 mb-4">
            {title}
        </h3>

        <ul className="space-y-3">
            {points.map((point, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-600"
                >
                    <svg
                        className="w-4 h-4 text-blue-500 mt-1 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.4521 1.31164C11.2522 0.334274 12.7469 0.334271 13.5471 1.31164L14.5389 2.52309L16.0036 1.96986C17.1853 1.52354 18.4796 2.27085 18.6839 3.51737L18.9372 5.06244L20.4823 5.31567C21.7288 5.51997 22.4761 6.81436 22.0298 7.99603L21.4765 9.46071L22.688 10.4525C23.6653 11.2527 23.6653 12.7473 22.688 13.5475L21.4765 14.5394L22.0298 16.004C22.4761 17.1857 21.7288 18.4801 20.4823 18.6844L18.9372 18.9376L18.684 20.4827C18.4796 21.7292 17.1853 22.4765 16.0036 22.0302L14.5389 21.477L13.5471 22.6884C12.7469 23.6658 11.2522 23.6658 10.4521 22.6884L9.46022 21.477L7.99553 22.0302C6.81386 22.4765 5.51948 21.7292 5.31518 20.4827L5.06194 18.9376L3.51687 18.6844C2.27035 18.4801 1.52305 17.1857 1.96937 16.004L2.5226 14.5394L1.31115 13.5475C0.333785 12.7473 0.333781 11.2527 1.31115 10.4525L2.5226 9.46071L1.96937 7.99603C1.52304 6.81436 2.27036 5.51997 3.51688 5.31567L5.06194 5.06244L5.31518 3.51737C5.51948 2.27085 6.81387 1.52354 7.99553 1.96986L9.46022 2.52309L10.4521 1.31164ZM11.2071 16.2071L18.2071 9.20717L16.7929 7.79296L10.5 14.0858L7.20711 10.7929L5.79289 12.2071L9.79289 16.2071C9.98043 16.3947 10.2348 16.5 10.5 16.5C10.7652 16.5 11.0196 16.3947 11.2071 16.2071Z"
                        />
                    </svg>

                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default FocusCard;
