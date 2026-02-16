import React, { useState, useRef } from 'react';
import MainLayout from '../layout/MainLayout';
import { Eye, Rabbit } from 'lucide-react';
import TestimonialsSection from '../sections/TestimonialsSection';
import FocusCard from '../cards/FocusCard';
import PricingCard from '../cards/PricingCard';
import heroIllustration from '../../img/servicesPage/socialMedia/hero.svg';


const ServicePageTemplate = ({
    pageTitle,
    heroSubtitle,
    focusTitle,
    focusItems,
    servicesTitle,
    servicesSubtitle,
    pricingCategories
}) => {
    const [activeTab, setActiveTab] = useState('corporate');
    const scrollContainerRef = useRef(null);
    const categoryRefs = useRef({
        corporate: null,
        umkm: null,
        student: null,
        personal: null // Just in case
    });

    const setCategoryRef = (category, el) => {
        categoryRefs.current[category] = el;
    };

    const handleTabClick = (category) => {
        setActiveTab(category);
        const ref = categoryRefs.current[category];
        if (ref && scrollContainerRef.current) {
            const containerLeft = scrollContainerRef.current.getBoundingClientRect().left;
            const itemLeft = ref.getBoundingClientRect().left;
            const offset = itemLeft - containerLeft + scrollContainerRef.current.scrollLeft;

            scrollContainerRef.current.scrollTo({
                left: offset - 24, // 24px padding/margin adjustment
                behavior: 'smooth'
            });
        }
    };

    // Extract available categories from the pricingCategories object
    const availableCategories = Object.keys(pricingCategories);

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="pt-10 px-4 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb / Top Nav Placeholder */}


                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-12">{pageTitle}</h1>

                    {/* Main Illustration Area */}
                    <div className="max-w-4xl mx-auto mb-12 relative">
                        <div className="aspect-[2/1] md:aspect-[5/2] flex items-center justify-center">
                            {/* Placeholder content approximating the illustration layout */}
                            <img
                                src={heroIllustration}
                                alt="Social Media Service Illustration"
                                className="w-full h-full object-contain"
                            />

                        </div>
                    </div>

                    <p className="text-blue-500 text-2xl max-w-2xl mx-auto mb-16">
                        {heroSubtitle}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        {/* Line kiri */}
                        <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                        {/* Icon SVG */}
                        <div className="">
                            <span
                                className="w-6 h-6"
                                dangerouslySetInnerHTML={{
                                    __html: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_263_138)">
<path d="M35.2875 69.2249C31.0125 81.9374 14.0625 81.9374 14.0625 81.9374C14.0625 81.9374 14.0625 64.9874 26.775 60.7124" stroke="url(#paint0_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.4625 39.525L48 64.9875L31.0125 48L56.475 22.5375C66.1125 12.9 75.75 13.0125 79.875 13.6125C80.5115 13.6975 81.1024 13.9895 81.5565 14.4436C82.0106 14.8976 82.3026 15.4885 82.3875 16.125C82.9875 20.25 83.1 29.8875 73.4625 39.525Z" stroke="url(#paint1_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M69.225 43.7625V67.9875C69.2137 68.7788 68.8902 69.5336 68.325 70.0874L56.2125 82.2375C55.8282 82.6213 55.3469 82.8936 54.82 83.0253C54.2931 83.1571 53.7403 83.1433 53.2206 82.9854C52.7009 82.8276 52.2338 82.5316 51.8691 82.1291C51.5045 81.7266 51.2559 81.2327 51.15 80.6999L48 64.9875" stroke="url(#paint2_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.2375 26.7749H28.0125C27.2212 26.7862 26.4664 27.1097 25.9125 27.6749L13.7625 39.7874C13.3787 40.1717 13.1064 40.653 12.9746 41.1799C12.8429 41.7068 12.8567 42.2596 13.0145 42.7793C13.1724 43.299 13.4683 43.7661 13.8708 44.1308C14.2734 44.4954 14.7673 44.744 15.3 44.8499L31.0125 47.9999" stroke="url(#paint3_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_263_138" x1="24.675" y1="60.7124" x2="24.675" y2="81.9374" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint1_linear_263_138" x1="56.8139" y1="13.3848" x2="56.8139" y2="64.9875" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint2_linear_263_138" x1="58.6125" y1="43.7625" x2="58.6125" y2="83.1149" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint3_linear_263_138" x1="32.5613" y1="26.7749" x2="32.5613" y2="47.9999" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<clipPath id="clip0_263_138">
<rect width="96" height="96" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                }}
                            />
                        </div>

                        {/* Line kanan */}
                        <span className="flex-1 h-px bg-gradient-to-l from-[#3B82F6] to-[#F089D5]" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mt-4 mb-16 max-w-3xl mx-auto leading-tight">
                        {focusTitle}
                    </h2>

                    <div className="flex overflow-x-auto pb-6 gap-6 md:gap-8 snap-x hide-scrollbar lg:grid lg:grid-cols-3 lg:overflow-visible">
                        {focusItems.map((item, idx) => (
                            <div key={idx} className="min-w-[80vw] md:min-w-[45vw] lg:min-w-0 snap-center shrink-0 h-full">
                                <FocusCard {...item} className="h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services / Pricing Section */}
            <section className="py-2 mb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3">
                            {/* Line kiri */}
                            <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                            {/* Icon SVG */}
                            <div className="">
                                <span
                                    className="w-6 h-6"
                                    dangerouslySetInnerHTML={{
                                        __html: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_263_138)">
<path d="M35.2875 69.2249C31.0125 81.9374 14.0625 81.9374 14.0625 81.9374C14.0625 81.9374 14.0625 64.9874 26.775 60.7124" stroke="url(#paint0_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.4625 39.525L48 64.9875L31.0125 48L56.475 22.5375C66.1125 12.9 75.75 13.0125 79.875 13.6125C80.5115 13.6975 81.1024 13.9895 81.5565 14.4436C82.0106 14.8976 82.3026 15.4885 82.3875 16.125C82.9875 20.25 83.1 29.8875 73.4625 39.525Z" stroke="url(#paint1_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M69.225 43.7625V67.9875C69.2137 68.7788 68.8902 69.5336 68.325 70.0874L56.2125 82.2375C55.8282 82.6213 55.3469 82.8936 54.82 83.0253C54.2931 83.1571 53.7403 83.1433 53.2206 82.9854C52.7009 82.8276 52.2338 82.5316 51.8691 82.1291C51.5045 81.7266 51.2559 81.2327 51.15 80.6999L48 64.9875" stroke="url(#paint2_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.2375 26.7749H28.0125C27.2212 26.7862 26.4664 27.1097 25.9125 27.6749L13.7625 39.7874C13.3787 40.1717 13.1064 40.653 12.9746 41.1799C12.8429 41.7068 12.8567 42.2596 13.0145 42.7793C13.1724 43.299 13.4683 43.7661 13.8708 44.1308C14.2734 44.4954 14.7673 44.744 15.3 44.8499L31.0125 47.9999" stroke="url(#paint3_linear_263_138)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_263_138" x1="24.675" y1="60.7124" x2="24.675" y2="81.9374" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint1_linear_263_138" x1="56.8139" y1="13.3848" x2="56.8139" y2="64.9875" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint2_linear_263_138" x1="58.6125" y1="43.7625" x2="58.6125" y2="83.1149" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<linearGradient id="paint3_linear_263_138" x1="32.5613" y1="26.7749" x2="32.5613" y2="47.9999" gradientUnits="userSpaceOnUse">
<stop offset="0.139423" stop-color="#3B82F6"/>
<stop offset="0.802885" stop-color="#F089BF"/>
</linearGradient>
<clipPath id="clip0_263_138">
<rect width="96" height="96" fill="white"/>
</clipPath>
</defs>
</svg>
`,
                                    }}
                                />
                            </div>

                            {/* Line kanan */}
                            <span className="flex-1 h-px bg-gradient-to-l from-[#3B82F6] to-[#F089D5]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl mt-4 font-bold text-blue-500 mb-4">{servicesTitle}</h2>
                        <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-16">
                            {servicesSubtitle}
                        </p>

                        {/* Tabs */}
                        <div className="inline-flex bg-white border border-blue-100 rounded-full p-1 mb-12 shadow-sm flex-wrap justify-center">
                            {availableCategories.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    className={`px-8 py-2 rounded-full text-sm font-medium transition-all capitalize ${activeTab === tab
                                        ? 'bg-blue-500 text-white shadow-md'
                                        : 'text-gray-400 hover:text-blue-500'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Horizontal Scroll Pricing - Full Width Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-4 px-4 md:px-8 lg:px-24 snap-x hide-scrollbar scroll-smooth"
                >
                    {availableCategories.map((category) => (
                        <div
                            key={category}
                            ref={(el) => setCategoryRef(category, el)}
                            className="flex gap-8 shrink-0"
                        >
                            {pricingCategories[category].map((item, idx) => (
                                <div key={`${category}-${idx}`} className="w-[80vw] md:w-[45vw] lg:w-[400px] snap-center shrink-0">
                                    <PricingCard {...item} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Reuse Testimonials */}
            <TestimonialsSection />
        </MainLayout>
    );
};

export default ServicePageTemplate;
