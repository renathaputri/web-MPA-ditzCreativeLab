import React from 'react';
import { Plane, Users, Gamepad2 } from 'lucide-react';
import { waitingActivities } from '../../data/services';

const ActivitiesSection = () => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Plane': return <Plane size={20} />;
            case 'Users': return <Users size={20} />;
            case 'Gamepad': return <Gamepad2 size={20} />;
            default: return <Plane size={20} />;
        }
    }

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Illustration Side */}
                <div className="flex-1 w-full">
                    <div className="aspect-square rounded-3xl bg-gray-100 flex items-center justify-center border-4 border-dashed border-gray-200">
                        <p className="text-gray-400 font-medium">Illustration: People Working / Relaxing</p>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-2">
                        Let Ditz Crew do <br /> their incredible job
                    </h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-8">
                        While you are waiting, you also can do:
                    </h3>

                    <ul className="space-y-6">
                        {waitingActivities.map((activity, idx) => (
                            <li key={idx} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition duration-300">
                                    {getIcon(activity.icon)}
                                </div>
                                <span className="text-lg text-gray-700 font-medium">{activity.title}</span>
                                <div className="flex-grow border-b border-dotted border-blue-200 ml-4"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
