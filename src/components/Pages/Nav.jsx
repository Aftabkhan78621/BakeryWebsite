import React, { useEffect, useState } from 'react';
import leftIcon from '../../assets/svg/leftIcon.svg';

// ✅ Moved navItems OUTSIDE the component. This is important for performance.
const navItems = [
    { name: 'Home', href: '#Home', id: 'Home' },
    { name: 'Products', href: '#Products', id: 'Products' },
    { name: 'Contact Us', href: '#Contact Us', id: 'Contact Us' },
    { name: 'Explore', href: '#Explore', id: 'Explore' },
];

const Nav = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);

            // ✅ FIX: This new logic works for scrolling up AND down.
            let foundSectionId = '';
            // Loop backwards from the last item to the first.
          for(let i = navItems.length - 1; i >=0; i--){
            const items= navItems[i]
          const session =  document.getElementById(items.id)
          if(session){
           const sessionTop = session.offsetTop
           if(window.scrollY > sessionTop - 150){
            foundSectionId = items.id
            break
           }
          }
          }
            
            // If no section is found (e.g., at the very top), default to 'home'
            const newActiveSection = foundSectionId || 'home';

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]); // Dependency array is correct now

    return (
        <nav className={`fixed top-0 w-full z-50 flex justify-between items-center shadow-md px-16 py-4 transition-colors duration-300 ${hasScrolled ? 'bg-red-900' : 'bg-transparent'}`}>
            <img src={leftIcon} alt="Bakery Logo" className="h-16 w-16" />
            <div className='flex items-center space-x-8'>
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`font-semibold text-xl py-2 transition-all duration-300
                            ${activeSection === item.id 
                                ? 'text-amber-400 border-b-2 border-amber-400' // Active style
                                : 'text-white border-b-2 border-transparent hover:text-amber-200'  // Default style
                            }`
                        }
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>

        
    );
};

export default Nav;