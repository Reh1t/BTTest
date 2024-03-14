import React, { useState, useEffect } from "react";
import SidebarMenu from "./SidebarDark";
import Link from "next/link";
import { FaSignOutAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header = () => {

  const router = useRouter();
  const websitePrefix = 'https://buildingtraditonpreview.vercel.app/';

  const [publicLogin, setPublicLogin] = useState('');
  const [name, setName] = useState('');


  const getFirstUppercaseLetter = (str) => {
    return str.charAt(0).toUpperCase();
  };


  useEffect(() => {
    setPublicLogin(localStorage.getItem(`${websitePrefix}-publiclogin`));
    setName(localStorage.getItem(`${websitePrefix}-publicname`));
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeOverlay = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handlePublicLogout = () => {
    localStorage.setItem(`${websitePrefix}-publiclogin`, null);
    localStorage.setItem(`${websitePrefix}-publicid`, null);
    localStorage.setItem(`${websitePrefix}-publicname`, null);
    localStorage.setItem(`${websitePrefix}-publicemail`, null);
    localStorage.setItem(`${websitePrefix}-publicpassword`, null);
    localStorage.setItem(`${websitePrefix}-publicphone`, null);
    localStorage.setItem(`${websitePrefix}-publicaddress`, null);
    closeOverlay();
    setPublicLogin(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    setIsOpen(false);

  };

  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown2 = (event) => {
    setIsOpen2(false);

  };

  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const closeDropdown3 = (event) => {
    setIsOpen3(false);

  };

  const [isOpen4, setIsOpen4] = useState(false);

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);

  };

  const closeDropdown4 = (event) => {
    setIsOpen4(false);
  };

  const [category, setCategory] = useState('All');
  const [selectedButton, setSelectedButton] = useState("All");

  const handleNavigation = (path) => {
    router.push(path);
  };


  return (
    <header className= " bg-white max-w-full z-10 fixed top-0 left-0 right-0">
      <nav class="bg-transparent bg-opacity-0 px-4 lg:px-6 py-5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <SidebarMenu />
          <Link href="/" class="flex items-center">
            <span class="self-center text-lg font-semibold whitespace-nowrap text-gray-950 w-44 lg:w-24">RESIDENTIAL | COMMERCIAL</span>
          </Link>
          <div class="flex items-center lg:order-2 md:border-l-2 pl-4">
            <div className="flex space-x-4">
              {publicLogin !== '1' ? (
                <div className="flex space-x-2">
                  <Link href="/login" className="duration-300 bg-neutral-950 text-xs text-white font-bold px-4 py-2 rounded-full ml-4">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="container mx-auto flex items-center justify-between px-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-full bg-gray-950 text-white shadow w-8 h-8 flex items-center justify-center relative ml-4 font-bold">

                      {getFirstUppercaseLetter(name)}
                    </div>

                    {isMenuOpen && (
                      <div
                        className="overlay"
                        style={{
                          position: 'fixed',
                          top: 80,
                          right: 32,
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'flex-end',
                          zIndex: 9998,
                          opacity: isMenuOpen ? 1 : 0,
                          transition: 'opacity 0.5s ease-in-out',
                        }}
                      >
                        <div
                          className="overlay-content"
                          style={{
                            backgroundColor: 'black',
                            padding: '20px',
                            borderRadius: '16px',
                            maxWidth: '400px'
                          }}
                        >
                          <div className="flex pb-3 items-center">
                            <div className="-ml-1 text-gray-200">
                              <FaSignOutAlt />
                            </div>
                            <p className="text-lg text-gray-100 font-semibold pl-2">Confirm logout</p>
                            <button
                              className="close-overlay"
                              onClick={closeOverlay}
                              style={{
                                marginLeft: 'auto',
                                cursor: 'pointer',
                                color: 'white'
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm text-gray-200 pb-3 font-normal mb-2">Do you really want to logout?</p>
                          <button
                            onClick={() => handlePublicLogout()}
                            className="delete-account-btn focus:outline-none bg-red-400 transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-3 py-2 text-xs"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
              <li>
                <Link href="#" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Ideas</Link>
              </li>
              <li>
                <Link href="/contact" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
              <li>
                <Link href="/about-us" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Bar */}


        <div class="flex justify-center items-center mt-6">
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
              <li>
                <img src="https://buildingtraditonpreview.vercel.app/bt-logo-2024-long@2x.png" className="h-auto w-40" />
              </li>
              <li>
                <div className="bg-gray-100 flex items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button id="dropdown-button" onMouseEnter={toggleDropdown} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                      Design
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div id="dropdown-menu" onMouseLeave={closeDropdown} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./conceptual-modelling-plannin1")}>
                            Conceptual Modelling
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./conceptual-modelling-plannin1")}>
                            Planning
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./construction-design")}>
                            Construction Design
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./construction-management")}>
                            Construction Management
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./accessible-construction")}>
                            Accessible Construction
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div className="bg-gray-100 flex items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button id="dropdown-button2" onMouseEnter={toggleDropdown2} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    Carpentry
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen2 && (
                      <div id="dropdown-menu2" onMouseLeave={closeDropdown2} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button2">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./custom-homes")}>
                          Custom Homes
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./addition-renovations")}>
                          Additions & Renovations
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./kitchens")}>
                          Kitchens
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./bathrooms")}>
                          Bathrooms
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./carpentry-page")}>
                          Trim
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./d-e-c-k-s-p-a-t-i-o-s")}>
                          Decks & Patios
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div className="bg-gray-100 flex items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button id="dropdown-button3" onMouseEnter={toggleDropdown3} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    Staircases
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen3 && (
                      <div id="dropdown-menu3" onMouseLeave={closeDropdown3} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button3">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./staircases-pages")}>
                          Open Riser
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./staircases-pages")}>
                          Closed Riser
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./staircases-pages")}>
                          Retrofit
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./staircases-pages")}>
                          Exterior
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <div className="bg-gray-100 flex items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button id="dropdown-button4" onMouseEnter={toggleDropdown4} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                    Casework
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen4 && (
                      <div id="dropdown-menu4" onMouseLeave={closeDropdown4} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button4">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./casework-page")}>
                          Cabinetry
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./casework-page")}>
                          Closets
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./casework-page")}>
                          Display Cases
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./casework-page")}>
                          Custom Millwork
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem" onClick={() => handleNavigation("./casework-page")}>
                          Inlays & Decal
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <img src="" className="h-auto w-40" />
              </li>
            </ul>
          </div>
        </div>
        <div class="lg:hidden flex items-center justify-between space-x-8 mb-16 md:mb-20 bg-white  bg-opacity-50 rounded-b-lg pb-6 px-5"
          style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
          <div id="journal-scroll" className="text-sm scrollable-container flex items-center space-x-4 overflow-y-auto whitespace-nowrap">
            <button
              name="Home"
              onClick={() => handleNavigation("./")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Home" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Home
            </button>
            <button
              name="Design"
              onClick={() => handleNavigation("./design-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Design" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Design
            </button>
            <button
              name="Conceptual Modelling"
              onClick={() => handleNavigation("./conceptual-modelling-plannin1")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Conceptual Modelling" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Conceptual Modelling
            </button>
            <button
              name="Planning"
              onClick={() => handleNavigation("./conceptual-modelling-plannin1")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Planning" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Planning
            </button>
            <button
              name="Construction Design"
              onClick={() => handleNavigation("./construction-design")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Construction Design" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Construction Design
            </button>
            <button
              name="Construction Management"
              onClick={() => handleNavigation("./construction-management")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Construction Management" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Construction Management
            </button>
            <button
              name="Accessible Construction"
              onClick={() => handleNavigation("./accessible-construction")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Accessible Construction" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Accessible Construction
            </button>
            <button
              name="Carpentry"
              onClick={() => handleNavigation("./carpentry-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Carpentry" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Carpentry
            </button>
            <button
              name="Custom Homes"
              onClick={() => handleNavigation("./custom-homes")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Custom Homes" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Custom Homes
            </button>
            <button
              name="Additions"
              onClick={() => handleNavigation("./addition-renovations")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Additions" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Additions
            </button>
            <button
              name="Renovations"
              onClick={() => handleNavigation("./addition-renovations")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Additions" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Additions
            </button>
            <button
              name="Kitchens"
              onClick={() => handleNavigation("./kitchens")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Kitchens" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Kitchens
            </button>
            <button
              name="Bathrooms"
              onClick={() => handleNavigation("./bathrooms")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Bathrooms" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Bathrooms
            </button>
            <button
              name="Trim"
              onClick={() => handleNavigation("./carpentry-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Trim" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Trim
            </button>
            <button
              name="Decks & Patios"
              onClick={() => handleNavigation("./d-e-c-k-s-p-a-t-i-o-s")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Decks & Patios" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Decks & Patios
            </button>
            <button
              name="Staircases"
              onClick={() => handleNavigation("./staircases-pages")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Staircases" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Staircases
            </button>
            <button
              name="Open Riser"
              onClick={() => handleNavigation("./staircases-pages")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Open Riser" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Open Riser
            </button>
            <button
              name="Closed Riser"
              onClick={() => handleNavigation("./staircases-pages")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Closed Riser" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Closed Riser
            </button>
            <button
              name="Retrofit"
              onClick={() => handleNavigation("./staircases-pages")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Retrofit" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Retrofit
            </button>
            <button
              name="Exterior"
              onClick={() => handleNavigation("./staircases-pages")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Exterior" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Exterior
            </button>
            <button
              name="Casework"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Casework" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Casework
            </button>
            <button
              name="Cabinetry"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Cabinetry" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Cabinetry
            </button>
            <button
              name="Closets"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Closets" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Closets
            </button>
            <button
              name="Display Cases"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Display Cases" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Display Cases
            </button>
            <button
              name="Custom Millwork"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Custom Millwork" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Custom Millwork
            </button>
            <button
              name="Inlays & Decal"
              onClick={() => handleNavigation("./casework-page")}
              className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "Inlays & Decal" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                }`}
            >
              Inlays & Decal
            </button>
            

          </div>
        </div>

        <style>
          {`
  #journal-scroll {
    height: 75px;
    overflow-y: auto;
  }

  #journal-scroll::-webkit-scrollbar {
    height: 2px;
    width: 16px;
  }

  #journal-scroll::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 41px;
  }

  #journal-scroll:hover::-webkit-scrollbar-thumb {
    background: ; /* Change the scrollbar color to red on hover */
  }

  #journal-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
`}
        </style>
      </nav>
    </header>
  );
}

export default Header;