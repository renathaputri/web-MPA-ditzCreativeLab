import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/sections/HeroSection';
import ProblemsSection from '../components/sections/ProblemsSection';
import StatsSection from '../components/sections/StatsSection';
import ActivitiesSection from '../components/sections/ActivitiesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ServicesSection from '../components/sections/ServicesSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';

const LandingPage = () => {
    return (
        <MainLayout>
            <HeroSection />
            <ProblemsSection />
            <StatsSection />
            <ActivitiesSection />
            <TestimonialsSection />
            <ServicesSection />
            <FAQSection />
            <CTASection />
        </MainLayout>
    );
};

export default LandingPage;
