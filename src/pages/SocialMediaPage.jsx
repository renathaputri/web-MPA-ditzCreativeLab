
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Share2, BarChart2, Compass, MonitorPlay, Eye, Rabbit } from 'lucide-react';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FocusCard from '../components/cards/FocusCard';
import PricingCard from '../components/cards/PricingCard';

const SocialMediaPage = () => {
    const [activeTab, setActiveTab] = useState('corporate');

    const focusData = [
        {
            title: "Social Media Management",
            icon: MonitorPlay,
            points: [
                "Developing effective content strategies and post schedules.",
                "Caption and hashtag research.",
                "Programmed social content management with compelling, high-quality visuals and copywriting.",
                "Schedule and content publications."
            ]
        },
        {
            title: "Content Strategy & Planning",
            icon: Compass,
            points: [
                "Develop pillars strategy.",
                "Monthly content calendar.",
                "Tone of voice and visual branding style.",
                "Post-storming (post ideas) with Ditz creative team."
            ]
        },
        {
            title: "Insight & Analytics",
            icon: BarChart2,
            points: [
                "Visualize significant matrix content engagement growth.",
                "Detailed reviews with performance.",
                "Performance report & Action recommendations."
            ]
        }
    ];

    const pricingData = [
        {
            title: "Corporate Essential Package",
            description: "perfect for growing businesses who need consistent brand presence",
            price: "Rp. 499K/Month",
            features: [
                "12 Feeds/Contents (Carousel or static posts)",
                "Interactive Instagram stories",
                "Professional copywriting and hashtag research",
                "Basic content calendar",
                "Monthly insight report"
            ],
            isPremium: false
        },
        {
            title: "Corporate Premium Package",
            description: "Ideal for businesses who need high engagement and unique visual branding",
            price: "Rp. 999K/Month",
            features: [
                "24 Feeds/Contents (Carousel, animated, or static posts)",
                "Daily interactive Instagram stories",
                "Professional copywriting and visual branding research",
                "Monthly content calendar",
                "Monthly insight report with strategic recommendations"
            ],
            isPremium: true
        }
    ];

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="pt-10 pb-20 px-4 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb / Top Nav Placeholder if needed */}
                    <div className="flex justify-center gap-8 text-sm text-blue-300 font-medium mb-12 bg-white/50 inline-block p-2 rounded-full border border-blue-50 mx-auto">
                        <div className="flex items-center gap-4 px-4 py-1">
                            <span className="font-bold text-blue-600">Ditz</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-12">Social Media Growth Services</h1>

                    {/* Main Illustration Area */}
                    <div className="max-w-4xl mx-auto mb-12 relative">
                        <div className="aspect-[2/1] md:aspect-[5/2] flex items-center justify-center">
                            {/* Placeholder content approximating the illustration layout */}
                            <img src="/placeholder-illustration.svg" alt="Social Media Illustration" className="w-full h-full object-contain opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-gray-300 text-lg">Use your SVG illustration here</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-blue-400 font-medium max-w-xl mx-auto mb-20 leading-relaxed">
                        Social media is important to grow your brand, <br />
                        personal branding, and business.
                    </p>

                    <div className="w-12 h-12 mx-auto text-blue-300 mb-8 opacity-50">
                        <Eye size={48} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-16 max-w-3xl mx-auto leading-tight">
                        We have focus on several <br />
                        main key of social media
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 text-left mb-24">
                        {focusData.map((item, idx) => (
                            <FocusCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services / Pricing Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="w-12 h-12 mx-auto text-blue-300 mb-4 opacity-50">
                            <Rabbit size={48} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4">Our services on Social Media</h2>
                        <p className="text-blue-300 mb-8">
                            Here are several packages to help you grow your business or <br />
                            opportunities through social media. Let's deep dive!
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex bg-white border border-blue-100 rounded-full p-1 mb-12 shadow-sm">
                            {['Corporate', 'Personal', 'SME/UMKM'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.toLowerCase() || (tab === 'Corporate' && activeTab === 'corporate')
                                            ? 'bg-blue-500 text-white shadow-md'
                                            : 'text-gray-400 hover:text-blue-500'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
                        {pricingData.map((item, idx) => (
                            <PricingCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Reuse Testimonials */}
            <TestimonialsSection />
        </MainLayout>
    );
};

export default SocialMediaPage;
