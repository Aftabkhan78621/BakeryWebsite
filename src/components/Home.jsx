// src/pages/Home.jsx

import React from 'react';
import Nav from '../components/Pages/Nav';
import Blog from '../components/Pages/Blog';
import Footer from '../components/Pages/Footer';

// Reusable Section Title Component for consistent design
const SectionTitle = ({ children }) => (
    <div className='text-center mb-12'>
        <h2 className='font-sans font-bold text-3xl md:text-5xl text-gray-800 tracking-tight'>{children}</h2>
        <div className='w-24 h-1 bg-[#933C24] mx-auto mt-4 rounded-full'></div>
    </div>
);

const Home = () => {
    // Helper functions
    const getImgUrl = (name) => new URL(`../assets/svg/${name}`, import.meta.url).href;
    const getCakeImg = (name) => new URL(`../assets/cake/${name}`, import.meta.url).href;

    // Data arrays
    const productData = [
        { id: 1, img: 'bgimg.svg', imgInsider: 'insideimg.svg', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
        { id: 2, img: 'bgimg.svg', imgInsider: '2ndRotate.svg', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
        { id: 3, img: 'bgimg.svg', imgInsider: '3rdinsideRotate.svg', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
        { id: 4, img: 'bgimg.svg', imgInsider: '4th.svg', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
        { id: 5, img: 'bgimg.svg', imgInsider: '5th.svg', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
        { id: 6, img: 'bgimg.svg', imgInsider: '6th.png', icon: 'icons!.svg', name: "Whole Grain Bread", currency: "$40" },
    ];
    const categoryData = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorites"];
    const foodImages = ["cake1.svg", "cake2.png", "cake3.png", "cake4.png", "cake5.png", "cake6.png"];

    return (
        <div className='w-full overflow-x-hidden bg-gray-50'>
            {/* Hero Section */}
            <section
                id='Home'
                className="min-h-screen w-full bg-cover bg-center relative flex flex-col"
                style={{ backgroundImage: `url(${getImgUrl('bgimg.svg')})` }}
            >
                <Nav />
                <div className='flex-grow flex flex-col justify-center items-start px-6 sm:px-12 md:px-16 text-left'>
                    <p className='text-lg md:text-xl font-semibold text-[#E9BD8C] mb-2'>Delicious Cafe</p>
                    <h1 className='text-white font-sansita-swashed text-5xl md:text-7xl font-bold leading-tight max-w-md'>
                        Sweet Treats, Perfect Eats
                    </h1>
                    {/* TOP LEVEL BUTTONS */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-8 w-full sm:w-auto">
                        <button className="w-full sm:w-auto text-center px-8 py-4 bg-[#933C24] rounded-lg shadow-md cursor-pointer
                                       text-lg font-semibold text-white 
                                       transition-all duration-300 ease-in-out
                                       hover:bg-[#a64e32] hover:shadow-xl hover:-translate-y-1">
                            Shop Now
                        </button>
                        <button className="w-full sm:w-auto text-center px-8 py-4 cursor-pointer 
                                       text-lg font-semibold text-white
                                       transition-all duration-300 ease-in-out
                                       hover:text-amber-200 hover:-translate-y-1">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Top Products Section */}
            <section id='Products' className='py-20 px-4 sm:px-8'>
                <SectionTitle>Our Top Products</SectionTitle>
                <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {productData.map((item) => (
                        // TOP LEVEL CARD
                        <div
                            key={item.id}
                            className='w-full h-auto rounded-2xl p-4 flex flex-col justify-between bg-cover bg-center shadow-lg
                                       transition-all duration-300 ease-in-out
                                       hover:shadow-2xl hover:scale-105'
                            style={{ backgroundImage: `url(${getImgUrl(item.img)})` }}
                        >
                            <img src={getImgUrl(item.imgInsider)} className='w-full h-40 object-contain' alt={item.name} />
                            <div className='w-full mt-4'>
                                <div className='flex items-center justify-between mb-2'>
                                    <p className='text-white text-2xl font-bold'>{item.currency}</p>
                                    <img src={getImgUrl(item.icon)} className='w-7 h-7' alt="" />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-white font-semibold text-lg'>{item.name}</p>
                                    <button className='bg-red-800 rounded-md px-5 py-2 text-white font-bold text-sm
                                                   transition-transform duration-200 hover:scale-110'>
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Offer Section */}
            <section id='Contact Us' className='w-full py-16 bg-cover bg-center flex justify-center items-center text-center px-4' style={{ backgroundImage: `url(${getImgUrl('lernMore.svg')})` }}>
                <div className='space-y-6'>
                    <h3 className='font-inter text-3xl sm:text-4xl font-bold text-red-800'>20% Off Your First Order</h3>
                    <p className='font-inter text-lg text-[#5D5D5D] max-w-md mx-auto'>Join our family and enjoy a sweet discount on your first purchase.</p>
                    <button className="px-10 py-4 bg-red-800 rounded-lg shadow-md cursor-pointer
                                   text-lg font-semibold text-white 
                                   transition-all duration-300 ease-in-out
                                   hover:bg-red-700 hover:shadow-xl hover:-translate-y-1">
                        Learn More
                    </button>
                </div>
            </section>

            {/* Explore More Section */}
            <section id='Explore' className='w-full flex flex-col items-center py-20 px-4 sm:px-8'>
                <SectionTitle>Explore More</SectionTitle>
                <div className='flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-4 border-b w-full max-w-4xl pb-4 mb-12'>
                    {categoryData.map((name) => (
                        <p key={name} className='cursor-pointer font-Poppins text-lg font-semibold text-[#5d5d5d] 
                                            relative after:content-[""] after:absolute after:bg-red-800 after:h-[3px] 
                                            after:w-0 after:left-0 after:bottom-[-5px] 
                                            after:transition-all after:duration-300 hover:after:w-full'>
                            {name}
                        </p>
                    ))}
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl'>
                    {foodImages.map((imageName) => (
                        // TOP LEVEL IMAGE HOVER
                        <div
                            key={imageName}
                            className='w-full aspect-square rounded-lg bg-cover bg-center overflow-hidden
                                       transition-all duration-300 ease-in-out
                                       hover:shadow-xl'
                            style={{ backgroundImage: `url(${getCakeImg(imageName)})` }}
                        ></div>
                    ))}
                </div>
            </section>
            
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;