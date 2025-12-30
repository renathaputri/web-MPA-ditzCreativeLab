import { testimonials } from '../../data/testimonials';

const TestimonialCard = ({ text, author, role, image }) => (
    <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#3B82F6] to-[#F089D5] min-w-[300px] md:min-w-[400px]">

        <div className="bg-white p-8 rounded-3xl shadow-sm relative h-full flex flex-col justify-between">
            <span
                className="absolute top-6 left-6 w-10 h-10"
                dangerouslySetInnerHTML={{
                    __html: `
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.52799 14.5279H-1.07288e-05L6.14399 -9.15527e-05H10.304L6.52799 14.5279ZM16.896 14.5279H10.368L16.512 -9.15527e-05H20.672L16.896 14.5279Z" fill="#3B82F6"/>
</svg>

                    `,
                }}
            />

            <p className="text-xs text-gray-600 mb- relative z-10 leading-relaxed pt-6">
                "{text}"
            </p>

            <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-blue-100">
                    {image ? (
                        <img
                            src={image}
                            alt={author}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-blue-600 font-bold">
                            {author[0]}
                        </span>
                    )}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{author}</h4>
                    <p className="text-sm text-blue-500">{role}</p>
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    return (
        <section
            id="testimonials"
            className="py-0 px-4 bg-transparent overflow-hidden"
        >
            <div className="max-w-7xl mx-auto text-center mb-16">
                <div className="flex items-center justify-center gap-3">
                    {/* Line kiri */}
                    <span className="flex-1 h-px bg-gradient-to-r from-[#3B82F6] to-[#F089D5]" />

                    {/* Icon SVG */}
                    <div className="">
                        <span
                            className="w-6 h-6"
                            dangerouslySetInnerHTML={{
                                __html: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_363_122)">
<path d="M54 27H15C13.3431 27 12 28.3431 12 30V66C12 67.6569 13.3431 69 15 69H54C55.6569 69 57 67.6569 57 66V30C57 28.3431 55.6569 27 54 27Z" stroke="url(#paint0_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M57 33H69C69.7956 33 70.5587 33.3161 71.1213 33.8787C71.6839 34.4413 72 35.2044 72 36V63C72 68.5695 69.7875 73.911 65.8492 77.8492C61.911 81.7875 56.5695 84 51 84C46.4769 83.9968 42.0753 82.5358 38.4479 79.8339C34.8205 77.1319 32.1606 73.3328 30.8625 69" stroke="url(#paint1_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M41.25 39H27.75" stroke="url(#paint2_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.5 57V39" stroke="url(#paint3_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M40.6125 27.0001C39.4245 24.945 38.8727 22.5838 39.0269 20.2151C39.181 17.8463 40.0342 15.5766 41.4786 13.6928C42.9229 11.8091 44.8935 10.396 47.141 9.63233C49.3885 8.86868 51.8121 8.78875 54.105 9.40265C56.398 10.0166 58.4574 11.2967 60.0227 13.0812C61.588 14.8657 62.5889 17.0743 62.8988 19.4278C63.2087 21.7812 62.8137 24.1736 61.7637 26.3025C60.7137 28.4314 59.0559 30.201 57 31.3876" stroke="url(#paint4_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M62.2875 16.95C63.6411 15.3481 65.4752 14.2254 67.5175 13.7484C69.5597 13.2715 71.7014 13.4657 73.6245 14.3024C75.5476 15.1391 77.1497 16.5736 78.1929 18.3929C79.2362 20.2123 79.665 22.3195 79.4157 24.4019C79.1664 26.4843 78.2523 28.4308 76.809 29.9524C75.3658 31.4741 73.4704 32.4899 71.4041 32.849C69.3379 33.208 67.2109 32.8913 65.3389 31.9457C63.4669 31.0002 61.9497 29.4762 61.0125 27.6" stroke="url(#paint5_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M72 33H82.2375C82.705 33 83.1533 33.1857 83.4838 33.5162C83.8143 33.8468 84 34.2951 84 34.7625V57C84 60.1826 82.7357 63.2348 80.4853 65.4853C78.2349 67.7357 75.1826 69 72 69H71.1375" stroke="url(#paint6_linear_363_122)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_363_122" x1="62.1187" y1="19.2344" x2="29.4911" y2="99.3243" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint1_linear_363_122" x1="76.6794" y1="23.5703" x2="29.2172" y2="111.279" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint2_linear_363_122" x1="42.7856" y1="38.8151" x2="42.7138" y2="41.0362" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint3_linear_363_122" x1="35.6137" y1="35.6719" x2="30.6011" y2="36.3099" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint4_linear_363_122" x1="65.7315" y1="4.85398" x2="48.3392" y2="47.5593" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint5_linear_363_122" x1="81.586" y1="9.88745" x2="65.1074" y2="45.6506" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<linearGradient id="paint6_linear_363_122" x1="85.4631" y1="26.3437" x2="46.2311" y2="58.4576" gradientUnits="userSpaceOnUse">
<stop stop-color="#3B82F6"/>
<stop offset="1" stop-color="#F089D5"/>
</linearGradient>
<clipPath id="clip0_363_122">
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
                <h2 className="text-4xl mt-4 md:text-5xl font-bold text-blue-600 mb-4">
                    What they say about us
                </h2>
                <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-16">
                    Before you go deeper, let’s read about our previous clients. <br />
                    They have proving that Ditz Creative Lab is the best choice.
                </p>
            </div>

            {/* Horizontal Scroll / Grid */}
            <div className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x hide-scrollbar max-w-7xl mx-auto">
                {testimonials.slice(0, 3).map((t, i) => (
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
