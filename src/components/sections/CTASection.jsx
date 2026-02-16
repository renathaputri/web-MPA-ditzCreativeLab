import React from 'react';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Make your brand grow with creativities</h2>
                    <p className="text-blue-100 text-xl mb-8">The new game changer of creativity</p>
                    <Button
                        variant="secondary"
                        className="px-10 py-4 text-lg font-bold text-blue-600"
                        onClick={() =>
                            window.open(
                                'https://wa.me/6287788714970?text=Halo%20Ditz%20Creative%20Lab!%20Saya%20tertarik%20dengan%20layanan%20Anda.%20Boleh%20kita%20diskusi%20lebih%20lanjut?',
                                '_blank'
                            )
                        }
                    >
                        Get Started
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
