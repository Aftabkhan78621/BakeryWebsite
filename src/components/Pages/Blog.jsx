// src/components/Pages/Blog.jsx

import React from 'react';

const Blog = () => {
    const getImgUrl = (name) => new URL(`../../assets/Explore/${name}`, import.meta.url).href;
    const treatsData = [
        { id: 1, img: 'explore1.png', name: 'Puff Pastry', currency: "$8" },
        { id: 2, img: 'explore2.png', name: 'Doughnuts', currency: "$8" },
        { id: 3, img: 'explore3.png', name: 'Brownies', currency: "$8" },
    ];
    
    // Reusable Section Title
    const SectionTitle = ({ children }) => (
        <div className='text-center mb-12'>
            <h2 className='font-sans font-bold text-3xl md:text-5xl text-gray-800 tracking-tight'>{children}</h2>
            <div className='w-24 h-1 bg-[#933C24] mx-auto mt-4 rounded-full'></div>
        </div>
    );

    return (
        <div className='w-full bg-white py-20 px-4'>
            <SectionTitle>Featured Treats</SectionTitle>

            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {treatsData.map((item) => (
                    // TOP LEVEL CARD HOVER EFFECT
                    <div key={item.id} className='w-full group'>
                        <div
                            className='w-full aspect-[3/4] rounded-lg shadow-lg bg-center bg-cover 
                                       transition-all duration-300 ease-in-out
                                       group-hover:scale-105 group-hover:shadow-xl'
                            style={{ backgroundImage: `url(${getImgUrl(item.img)})` }}
                        ></div>
                        <div className='flex items-center justify-between px-1 mt-4'>
                            <p className='text-gray-800 font-serif font-semibold text-xl'>{item.name}</p>
                            <p className='text-gray-800 font-serif font-semibold text-xl'>{item.currency}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;