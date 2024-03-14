import React, { useState, useEffect } from "react";
import SidebarMenu from "./SidebarDark";
import Link from "next/link";
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {

  const websitePrefix = 'www.cafepiala.shop';

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


    const changeHandler = (e) => {
        const { name } = e.target;
        setSelectedButton(e.target.name);
        setCategory(name);

    };


  return (
    <header className="font-poppins bg-white">
      <nav class="bg-transparent bg-opacity-0 px-4 lg:px-6 py-5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <SidebarMenu />
          <Link href="/" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap text-gray-950 w-44 lg:w-24">RESIDENTIAL | COMMERCIAL</span>
          </Link>
          <div class="flex items-center lg:order-2 md:border-l-2 pl-4">
          
            <div className="flex space-x-4">
              {publicLogin !== '1' ? (
                <div className="flex space-x-2">
                  {/* <button onClick={handleSignUp} className="ml-4 bg-transparent duration-300 text-sm text-sky-700 font-semibold py-2 px-4 hover:border-transparent rounded">
                  Sign Up
                </button> */}
                  <Link href="/login" className="duration-300 bg-neutral-950 text-xs text-white font-bold px-4 py-2 rounded-full ml-4">
                    Login
                  </Link>
                </div>

              ) : (

                <div className="container mx-auto flex items-center justify-between px-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-full bg-gray-950 text-white shadow w-8 h-8 flex items-center justify-center relative ml-4 font-bold">
                      {/* Add your avatar image or icon here */}
                      {/* <img
                      className="rounded-full object-cover object-center"
                      src={`https://gigadevden.com${image}`}
                      alt="public-profile-icon"
                      style={{ width: '100%', height: '100%' }}
                    /> */}
                      {getFirstUppercaseLetter(name)}
                    </div>

                    <button
                      className="flex items-center text-neutral-950 focus:outline-none ml-4 p-2 rounded"
                      onClick={handleLogout}
                    >
                      <div className="flex flex-row ">
                        {/* <div className="dots w-1 h-1 bg-black dark:bg-black rounded-full"></div>
                      <div className="dots w-1 h-1 bg-black dark:bg-black rounded-full ml-[2px]"></div>
                      <div className="dots w-1 h-1 bg-black dark:bg-black rounded-full ml-[2px]"></div> */}
                        <FaSignOutAlt className="text-gray-950" />
                      </div>
                    </button>

                    {/* {isMenuOpen && (
                    <ul className="absolute right-0 top-full mt-2 w-48 bg-white rounded shadow-lg py-2">
                      <li className="py-1 px-4 hover:text-gray-700 text-gray-500 cursor-pointer">Profile</li>
                      <li className="py-1 px-4 hover:text-gray-700 text-gray-500 cursor-pointer">Settings</li>
                      <li className="py-1 px-4 hover:text-gray-700 text-gray-500 cursor-pointer">Logout</li>
                    </ul>
                  )} */}

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
            {/* <Link to="/login" class="text-white hover:bg-gray-50 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Log in</Link> */}

            {/* <a href="#" class="text-white bg-gray-900 hover:bg-gray-950 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Get started</a> */}
            {/* <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button> */}

          </div>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
              {/* <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li> */}
              <li>
                <Link href="/" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Ideas</Link>
              </li>

              <li>
                <Link href="/menu" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
              <li>
                <Link href="/about" class="block py-2 pr-4 pl-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About us</Link>
              </li>
              {/* <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li> */}
            </ul>
          </div>
        </div>





        {/* Lower Bar */}






        <div class="flex justify-center items-center mt-6">
    
         
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0 text-sm">
           
           <li>
            <img src="https://buildingtraditonpreview.vercel.app/bt-logo-2024-long@2x.png" className="h-auto w-40"/>
           </li>
              <li>


                <div className="bg-gray-100 flex items-center justify-center">
                  <div className="relative inline-block text-left">
                    <button id="dropdown-button" onMouseEnter={toggleDropdown} className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                      Theme
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div id="dropdown-menu" onMouseLeave={closeDropdown} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" className="mr-2">
                              <path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path>
                            </svg> Light
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" className="mr-2">
                              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
                            </svg> Dark
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop">
                              <path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg> System
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
                      Theme
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen2 && (
                      <div id="dropdown-menu2"  onMouseLeave={closeDropdown2} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button2">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" className="mr-2">
                              <path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path>
                            </svg> Light
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" className="mr-2">
                              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
                            </svg> Dark
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop">
                              <path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg> System
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
                      Theme
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen3 && (
                      <div id="dropdown-menu3" onMouseLeave={closeDropdown3} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button3">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" className="mr-2">
                              <path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path>
                            </svg> Light
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" className="mr-2">
                              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
                            </svg> Dark
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop">
                              <path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg> System
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
                      Theme
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen4 && (
                      <div id="dropdown-menu4" onMouseLeave={closeDropdown4} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-2 p-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button4">
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="light" width="18px" className="mr-2">
                              <path d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5A5.483 5.483 0 0 0 4.5 10c0 3.051 2.449 5.5 5.5 5.5 3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 0 1 0 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"></path>
                            </svg> Light
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="moon" width="18px" className="mr-2">
                              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
                            </svg> Dark
                          </a>
                          <a className="flex rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer" role="menuitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mr-2" viewBox="0 0 32 32" id="desktop">
                              <path d="M30 2H2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h9.998c-.004 1.446-.062 3.324-.61 4h-.404A.992.992 0 0 0 10 29c0 .552.44 1 .984 1h10.03A.992.992 0 0 0 22 29c0-.552-.44-1-.984-1h-.404c-.55-.676-.606-2.554-.61-4H30a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM14 24l-.002.004L14 24zm4.002.004L18 24h.002v.004zM30 20H2V4h28v16z"></path>
                            </svg> System
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>






              </li>
              

              <li>
            <img src="" className="h-auto w-40"/>
           </li>


            </ul>
          </div>
        </div>



        
        <div class="lg:hidden flex items-center justify-between space-x-8 mb-16 md:mb-20 bg-white  bg-opacity-50 rounded-b-lg pb-6 px-5"
                style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'}}>


                    <div id="journal-scroll" className="text-sm scrollable-container flex items-center space-x-4 overflow-y-auto whitespace-nowrap">
                        <button
                            name="All"
                            onClick={changeHandler}
                            className={`duration-300 px-3 py-1.5 hover:bg-gray-100 rounded-lg capitalize ${selectedButton === "All" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                                }`}
                        >
                            All
                        </button>
                        <button
                            title="Tailwind Grid"
                            name="Programming/Software Development"
                            onClick={changeHandler}
                            className={`duration-300 px-3 py-1.5 capitalize hover:bg-gray-100 rounded-lg ${selectedButton === "Programming/Software Development" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                                }`}
                        >
                            Programming / Software Development
                        </button>

                        <button
                            title="Tailwind Grid"
                            name="3"
                            onClick={changeHandler}
                            className={`duration-300 px-3 py-1.5 capitalize hover:bg-gray-100 rounded-lg ${selectedButton === "3" ? "text-gray-900 bg-gray-100" : "text-gray-600"
                                }`}
                        >
                            Third Button
                        </button>
                      
                    </div>

                

                    {/* 
                    <div className="relative inline-block w-auto mb-16 mt-8">
                        <div>
                            <button
                                type="button"
                                className="flex items-center justify-center px-4 py-2 mt-4 space-x-3 text-gray-600 transition-colors duration-300 transform border rounded-lg md:mt-0 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-primary dark:focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-20"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span>All version</span>
                            </button>
                        </div>
                        <div className="absolute left-0 z-20 py-1 mt-2 bg-yellow-500 border border-gray-100 rounded-md shadow-xl xl:left-auto xl:right-0" style={{ display: "none" }}>
                            <div className="w-32">
                                <a href="https://tailwindcomponents.com/components/grid" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-primary">
                                    All version
                                </a>
                                <a href="https://tailwindcomponents.com/components/grid?version=3" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-primary">
                                    version 3
                                </a>
                                <a href="https://tailwindcomponents.com/components/grid?version=2" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-primary">
                                    version 2
                                </a>
                                <a href="https://tailwindcomponents.com/components/grid?version=1" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-primary">
                                    version 1
                                </a>
                                <a href="https://tailwindcomponents.com/components/grid?version=0" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-primary">
                                    Beta version
                                </a>
                                <div id="extwaiokist" style={{ display: "none" }} v="dbhdf" q="36f0aeaa" c="53.89" i="64" u="12.90" s="06182305" sg="svr_undefined-ga_06182305-bai_06032321" d="1" w="false" e="" a="2" m="BMe=" vn="9zsmd">
                                    <div id="extwaigglbit" style={{ display: "none" }} v="dbhdf" q="36f0aeaa" c="53.89" i="64" u="12.90" s="06182305" sg="svr_undefined-ga_06182305-bai_06032321" d="1" w="false" e="" a="2" m="BMe="></div>
                                </div>
                            </div>
                        </div>
                    </div> */}


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