import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ text, author, role }) => (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative min-w-[300px] md:min-w-[400px]">
        <Quote className="text-blue-100 absolute top-6 left-6 w-10 h-10 fill-current" />
        <p className="text-gray-600 mb-6 relative z-10 leading-relaxed pt-6">"{text}"</p>
        <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden">
                {/* Placeholder Avatar */}
                {author[0]}
            </div>
            <div>
                <h4 className="font-bold text-gray-900">{author}</h4>
                <p className="text-sm text-blue-500">{role}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto flex items-center justify-center text-purple-600 mb-4">
                    <span className="text-2xl">💬</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">What they say about us</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Before you go deeper, let’s read about our previous clients. <br />
                    They have proving that Ditz Creative Lab is the best choice.
                </p>
            </div>

            {/* Horizontal Scroll / Grid */}
            <div className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x hide-scrollbar max-w-7xl mx-auto">
                {testimonials.slice(0, 3).map((t, i) => ( // Showing first 3 for simplicity, or map all
                    <TestimonialCard key={i} {...t} />
                ))}
                {testimonials.slice(3).map((t, i) => (
                    <TestimonialCard key={i + 3} {...t} />
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
