import React, { useState } from 'react';
import { faqs } from '../../data/faqs';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 rounded-2xl p-4 bg-white shadow-sm mb-4">
            <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-blue-500">{question}</span>
                <ChevronDown className={`text-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600 text-sm border-t border-gray-50 pt-4">
                    {answer}
                </div>
            )}
        </div>
    )
}

const FAQSection = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Illustration */}
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="bg-orange-50 p-8 rounded-full relative">
                        <MessageCircleQuestion size={120} className="text-orange-400" />
                        <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce">
                            <span className="text-2xl">?</span>
                        </div>
                    </div>
                </div>

                {/* Accordion */}
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-8">Frequently Asked Questions</h2>
                    <div>
                        {faqs.map((faq, idx) => (
                            <FAQItem key={idx} {...faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
