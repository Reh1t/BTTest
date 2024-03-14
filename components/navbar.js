import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router';
import Header from "./Header";

const Navbar = () => {
    

    return (

      <Header/>
        // <div className="w-full bg-white overflow-hidden flex flex-col items-center justify-start py-5 px-5 box-border sticky top-0 z-99 tracking-normal text-left text-xl text-kuno-red font-footer-bold-text">
        //     <div className="w-full max-w-[1440px] mx-auto flex flex-row items-start justify-between pt-0 px-0 pb-3.5 box-border gap-4 md:gap-22">
        //         <b className="relative whitespace-nowrap">Residential | Commercial</b>
        //         {isMediumOrSmallScreen ? (
        //             <button onClick={() => setNav(!nav)} className="relative">
        //                 {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        //             </button>
        //         ) : (
        //             <div className="flex flex-row items-start justify-start gap-4 md:gap-20 md:flex">
        //                 <Link href="/contact" passHref><b className="relative text-black">Contact</b></Link>
        //                 <Link href="/about-us" passHref><b className="relative text-black">About</b></Link>
        //                 <Link href="#" passHref><b className="relative text-black">Ideas</b></Link>
        //                 <Link href="#" passHref><b className="relative text-black">Login</b></Link>
        //             </div>
        //         )}
        //     </div>
        //     <footer className="cursor-pointer w-full max-w-[1240px] mx-auto flex flex-row items-center justify-between gap-4 md:flex-row md:justify-between md:gap-8 px-4 md:px-0 text-left text-xl text-gray font-footer-bold-text" onClick={() => handleNavigation("/")}>
        //         <img 
        //             className="h-12 w-48 object-cover"
        //             loading="lazy"
        //             alt=""
        //             src="/bt-logo-2024-long@2x.png"
        //         />
        //         <div className="w-full sm:w-[443px] flex flex-row items-start justify-start gap-4 max-w-full">
        //             <div className="relative ">
        //                 <select onChange={handleDropdownChange}>
        //                     <option value="design-page">Design</option>
        //                     <option value="conceptual-modelling-plannin1">Conceptual Modelling</option>
        //                     <option value="conceptual-modelling-plannin1">Planning</option>
        //                     <option value="construction-design">Construction Design</option>
        //                     <option value="construction-management">Construction Management</option>
        //                     <option value="accessible-construction">Accessible Construction</option>
        //                 </select>
        //             </div>
        //             <div className="relative">
        //                 <select onChange={handleDropdownChange}>
        //                     <option value="carpentry-page">Carpentry</option>
        //                     <option value="custom-homes">Custom Homes</option>
        //                     <option value="addition-renovations">Additions</option>
        //                     <option value="addition-renovations">Renovations</option>
        //                     <option value="kitchens">Kitchens</option>
        //                     <option value="bathrooms">Bathrooms</option>
        //                     <option value="accessible-construction">Accessible Constructions</option>
        //                     <option value="carpentry-page">Trim</option>
        //                     <option value="d-e-c-k-s-p-a-t-i-o-s">Decks & Patios</option>
        //                 </select>
        //             </div>
        //             <div className="relative">
        //                 <select onChange={handleDropdownChange}>
        //                     <option value="staircases-pages">Staircases</option>
        //                     <option value="staircases-pages">Open Riser</option>
        //                     <option value="staircases-pages">Closed Riser</option>
        //                     <option value="staircases-pages">Retrofit</option>
        //                     <option value="staircases-pages">Exterior</option>
        //                 </select>
        //             </div>
        //             <div className="relative">
        //                 <select onChange={handleDropdownChange}>
        //                     <option value="casework-page">Casework</option>
        //                     <option value="casework-page">Cabinetry</option>
        //                     <option value="casework-page">Closets</option>
        //                     <option value="casework-page">Display Cases</option>
        //                     <option value="casework-page">Custom Millwork</option>
        //                     <option value="casework-page">Inlays & Decal</option>
        //                 </select>
        //             </div>
        //         </div>
        //     </footer>
        //     {nav && (
        //         <div className="w-full max-w-[1274px] h-0 mt-4 sm:mt-0 mb-4 sm:mb-0 border-t-3 border-solid border-kuno-red"></div>
        //     )}
        // </div>
    );
};

export default Navbar;