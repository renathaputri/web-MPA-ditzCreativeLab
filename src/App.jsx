import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SocialMediaPage from './pages/SocialMediaPage';
import GraphicDesignPage from './pages/GraphicDesignPage';
import CopywritingPage from './pages/CopywritingPage';
import PersonalBrandingPage from './pages/PersonalBrandingPage';
import ServicePage from './pages/ServicePage';

function App() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/social-media" element={<SocialMediaPage />} />
                <Route path="/graphic-design" element={<GraphicDesignPage />} />
                <Route path="/copywriting" element={<CopywritingPage />} />
                <Route path="/personal-branding" element={<PersonalBrandingPage />} />
                <Route path="/services/:serviceId" element={<ServicePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
