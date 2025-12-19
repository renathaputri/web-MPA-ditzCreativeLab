
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const FocusCard = ({ title, icon: Icon, points, className = "" }) => (
    <div className={`bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col ${className}`}>
        <div className="mb-6 w-full aspect-[4/3] bg-gray-50 rounded-3xl flex items-center justify-center overflow-hidden relative">
            {/* Illustration Placeholder - User will replace with SVG */}
            {Icon && <Icon size={64} className="text-blue-200" />}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <ul className="space-y-3">
            {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default FocusCard;
