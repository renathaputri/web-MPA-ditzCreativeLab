import React from 'react';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ id, title, description, icon: Icon, link }) => (
    <Link to={link} className="group bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full">
        <div className="mb-6 w-full aspect-video bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition">
            <Icon size={48} className="text-blue-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow">{description}</p>

        <div className="w-full bg-blue-500 text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 group-hover:bg-blue-600 transition font-medium">
            More detail
        </div>
    </Link>
)

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="mx-auto w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-4 transform -rotate-12">
                        <span className="text-2xl">🚀</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">Get your job done very quick</h2>
                    <p className="text-blue-400 font-medium mb-2">Keep it cool mate, Ditz crew will proceed your job really quick.</p>
                    <p className="text-gray-500">We don’t let our mates wait for too long. We have offers for you</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
