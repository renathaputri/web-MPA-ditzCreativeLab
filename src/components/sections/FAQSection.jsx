import React, { useState } from 'react';
import { faqs } from '../../data/faqs';
import { ChevronDown } from 'lucide-react';
import faqImage from '../../img/faq.svg';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div
            className={`
                rounded-2xl p-4 bg-white mb-4
                outline outline-2
                transition-all duration-300
                ${isOpen
                    ? 'outline-blue-500 shadow-md'
                    : 'outline-blue-200 hover:outline-blue-400'
                }
            `}
        >
            <button
                className="w-full flex items-center justify-between text-left"
                onClick={onToggle}
            >
                <span className="font-bold text-blue-500">
                    {question}
                </span>

                <ChevronDown
                    className={`
                        text-blue-500 transition-transform duration-300
                        ${isOpen ? 'rotate-180' : ''}
                    `}
                />
            </button>

            {isOpen && (
                <div className="mt-4 pt-4 text-blue-500 text-sm border-t border-blue-100">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-center gap-3">
                    {/* Line kiri */}
                    <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                    {/* Icon SVG */}
                    <div className="">
                        <span
                            className="w-6 h-6"
                            dangerouslySetInnerHTML={{
                                __html: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_456_286)">
<path d="M17.025 66.3748C12.5583 58.8388 10.9959 49.9316 12.6311 41.3254C14.2663 32.7191 18.9867 25.0056 25.906 19.633C32.8254 14.2604 41.4678 11.5982 50.2109 12.1461C58.954 12.6941 67.1964 16.4145 73.3909 22.6089C79.5853 28.8033 83.3057 37.0458 83.8536 45.7889C84.4016 54.532 81.7393 63.1744 76.3667 70.0937C70.9942 77.0131 63.2807 81.7334 54.6744 83.3687C46.0681 85.0039 37.1609 83.4415 29.625 78.9748L17.175 82.4998C16.6649 82.649 16.1241 82.6582 15.6092 82.5265C15.0943 82.3948 14.6243 82.127 14.2486 81.7512C13.8728 81.3754 13.605 80.9055 13.4733 80.3906C13.3416 79.8757 13.3508 79.3349 13.5 78.8248L17.025 66.3748Z" stroke="url(#paint0_linear_456_286)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M48 50.25C49.2426 50.25 50.25 49.2426 50.25 48C50.25 46.7574 49.2426 45.75 48 45.75C46.7574 45.75 45.75 46.7574 45.75 48C45.75 49.2426 46.7574 50.25 48 50.25Z" fill="url(#paint1_linear_456_286)"/>
<path d="M30 50.25C31.2426 50.25 32.25 49.2426 32.25 48C32.25 46.7574 31.2426 45.75 30 45.75C28.7574 45.75 27.75 46.7574 27.75 48C27.75 49.2426 28.7574 50.25 30 50.25Z" fill="url(#paint2_linear_456_286)"/>
<path d="M66 50.25C67.2426 50.25 68.25 49.2426 68.25 48C68.25 46.7574 67.2426 45.75 66 45.75C64.7574 45.75 63.75 46.7574 63.75 48C63.75 49.2426 64.7574 50.25 66 50.25Z" fill="url(#paint3_linear_456_286)"/>
</g>
<defs>
<linearGradient id="paint0_linear_456_286" x1="79.5" y1="12" x2="28.205" y2="130.638" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint1_linear_456_286" x1="50" y1="46" x2="46.6898" y2="53.2018" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint2_linear_456_286" x1="32" y1="46" x2="28.6898" y2="53.2018" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint3_linear_456_286" x1="68" y1="46" x2="64.6898" y2="53.2018" gradientUnits="userSpaceOnUse">
<stop offset="0.180427" stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<clipPath id="clip0_456_286">
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

                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mt-4">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-blue-500 text-xl max-w-2xl mx-auto mt-4">
                        Everything you need to know before working with us.
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <img
                            src={faqImage}
                            width={506}
                            height={506}
                            alt="FAQ Illustration"
                            className="max-w-full h-auto"
                        />
                    </div>

                    <div>
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                {...faq}
                                isOpen={activeIndex === idx}
                                onToggle={() =>
                                    setActiveIndex(
                                        activeIndex === idx ? null : idx
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
