import React from 'react';
import { navigation } from '../../data/navigation';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] text-white pt-20 pb-10 px-4 mt-20 rounded-t-[3rem]">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

                {/* Brand */}
                <div className="col-span-2 lg:col-span-1">
                    <h2 className="text-3xl font-bold mb-4">Ditz</h2>
                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                            <Instagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="col-span-1">
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 opacity-80 text-sm">
                        {navigation.footer.company.map(link => (
                            <li key={link.name}><a href={link.href} className="hover:underline">{link.name}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="font-bold mb-4">Services</h3>
                    <ul className="flex flex-col gap-2 opacity-80 text-sm">
                        {navigation.footer.services.map(link => (
                            <li key={link.name}><a href={link.href} className="hover:underline">{link.name}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="font-bold mb-4">Stay connect with us</h3>
                    <ul className="flex flex-col gap-2 opacity-80 text-sm">
                        {navigation.footer.others.map(link => (
                            <li key={link.name}><a href={link.href} className="hover:underline">{link.name}</a></li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm opacity-60">
                © 2024 Ditz Creative Lab. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
