import { services } from '../../data/services';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, title, description, image, link }) => (
    <div
  className="
    p-[1px] rounded-3xl justify-between
    bg-gradient-to-r from-[#3B82F6] to-[#F089D5]
    transition-all duration-300

  "
>
  <div
    className="
      group bg-white p-8 rounded-3xl
      shadow-md hover:shadow-xl
      transition-all duration-300
      flex flex-col h-full items-center
    "
  >
    <div className="mb-4 w-full aspect-video rounded-2xl flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-[335px] h-[191px] object-cover rounded-xl"
      />
    </div>

    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
      {title}
    </h3>

    <p className="text-gray-500 text-sm mb-6 flex-grow text-center">
      {description}
    </p>


    <Link
      to={link}
      className="
        w-full bg-blue-500 text-white rounded-full
        py-3 px-6
        flex items-center justify-center gap-2
        font-medium
        transition-all duration-300
        hover:bg-blue-600
        group-hover:bg-gradient-to-r
        group-hover:from-[#3B82F6]
        group-hover:to-[#F089D5]
      "
    >
      More detail
    </Link>
  </div>
</div>


)

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
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
                    <h2 className="text-4xl mt-4 md:text-5xl font-bold text-blue-600 mb-4">
                        Get your job done very quick
                    </h2>
                    <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-16">
                        Keep it cool mate, Ditz crew will proceed your job really quick. <br />
                        We don’t let our mates wait for too long. We have offers for you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
