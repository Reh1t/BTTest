import { useState } from 'react';
import Link from 'next/link';

function SidebarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen2, setIsOpen2] = useState(false);

    const openConsole = (event) => {
        event.preventDefault();
        window.location.href = "/console-home";
      };

    return (
        <div className="block relative z-50">
            
            <button className="flex items-center px-2 py-2 text-gray-900 border-teal-400 hover:text-red-500 cursor-pointer" onClick={handleToggle}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-6z" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <Link href="/" className="block px-4 py-2 text-md border text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                            <b>Home</b>
                        </Link>
                        <ul>
                            <li>
                            <Link href="/" className="ml-5 rounded-tl-lg  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 duration-300" role="menuitem">
                            Ideas
                           </Link>
                           <Link href="/contact" className="ml-5 rounded-bl-lg  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 duration-300" role="menuitem">
                            Contact
                           </Link>
                           <Link href="/about-us" className="ml-5 rounded-bl-lg  block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 duration-300" role="menuitem">
                            About
                           </Link>
                            </li>
                        </ul>                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default SidebarMenu;