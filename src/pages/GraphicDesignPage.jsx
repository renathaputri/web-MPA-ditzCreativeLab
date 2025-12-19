import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const GraphicDesignPage = () => {
    return (
        <MainLayout>
            <section className="pt-20 px-4 min-h-screen bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-8">
                        <Link to="/" className="text-gray-500 hover:text-blue-500 transition mb-4 inline-block">&larr; Back to Home</Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
                                <PenTool size={32} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Graphic Design</h1>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mb-8">
                            Show your creativity and brand identity to gain advantages. Visuals that speak louder than words.
                        </p>
                        <Button className="bg-pink-500 hover:bg-pink-600 shadow-pink-200">Contact for Design</Button>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default GraphicDesignPage;
