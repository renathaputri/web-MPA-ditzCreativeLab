import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const PersonalBrandingPage = () => {
    return (
        <MainLayout>
            <section className="pt-20 px-4 min-h-screen bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Link to="/" className="text-gray-500 hover:text-blue-500 transition mb-4 inline-block">&larr; Back to Home</Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                                <User size={32} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Personal Branding</h1>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mb-8">
                            Could make your personality look better than ever. We build your personal brand from scratch.
                        </p>
                        <Button className="bg-orange-500 hover:bg-orange-600 shadow-orange-200">Contact for Branding</Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default PersonalBrandingPage;
