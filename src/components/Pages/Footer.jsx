// src/components/Pages/Footer.jsx

import React from "react";

const Footer = () => {
    const img = (name) => new URL(`../../assets/Footer/${name}`, import.meta.url).href;
    const socialIcons = [
        { id: 1, name: 'Facebook', icon: 'fb.png', link: '#' },
        { id: 2, name: 'Pinterest', icon: 'p.png', link: '#' },
        { id: 3, name: 'WhatsApp', icon: 'wht.png', link: '#' },
        { id: 4, name: 'Instagram', icon: 'inst.png', link: '#' },
    ];
    const exploreLinks = ["Home", "Products", "Contact Us", "Explore"];
    const contactInfo = {
        phone: "(456) 789-12301",
        email: "info@modrino.co.uk",
        addressLine1: "South 13th Street",
        addressLine2: "New York, America",
    };

    return (
        <footer className="w-full h-auto bg-cover bg-center relative text-white"
            style={{ backgroundImage: `url(${img('bgimg.svg')})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b-2 border-[#E9BD8D]/30">
                    <img src={img('leftIcon.svg')} className="w-14 h-14 mb-6 sm:mb-0" alt="Logo" />
                    <div className="flex items-center gap-5">
                        <p className="text-amber-200 font-bold text-lg tracking-wide">Follow Us</p>
                        {socialIcons.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                                <img
                                    src={img(item.icon)}
                                    alt={item.name}
                                    className="w-7 h-7 transition-all duration-300 hover:scale-125 hover:opacity-80"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left pt-10">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#E9BD8D] tracking-wider">About Us</h2>
                        <p className="text-gray-300 text-base leading-relaxed">
                            A brief and engaging description of your cafe, highlighting our passion for quality.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#E9BD8D] tracking-wider">Explore</h2>
                        <nav className="flex flex-col space-y-3">
                            {exploreLinks.map((link) => (
                                <a key={link} href="#" className="text-gray-300 hover:text-white hover:underline transition-colors text-base">
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#E9BD8D] tracking-wider">Contact Us</h2>
                        <div className="flex flex-col space-y-3 text-base">
                            <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">{contactInfo.phone}</a>
                            <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">{contactInfo.email}</a>
                            <p>{contactInfo.addressLine1}, {contactInfo.addressLine2}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 text-center border-t-2 border-[#E9BD8D]/30">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Modrino. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;