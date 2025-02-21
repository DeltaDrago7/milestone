import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo3.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Function to toggle dropdown menus
    const toggleDropdown = (menu) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    // Function to close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown")) {
                setDropdownOpen(null);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setDropdownOpen(null);
    };

    // Check if scrolled past the hero section
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {  // You can adjust this value as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`flex flex-wrap lg:px-16 px-4 py-4 w-full top-0 left-0 z-50 transition-all duration-300 
            ${isMenuOpen ? ("fixed bg-pri shadow-md") : (isScrolled ||  dropdownOpen != null? "fixed bg-pri/90 shadow-md" : "absolute bg-transparent")}`}
        >
            <div className="flex-1 flex justify-between items-center">
                <Link to="/" className="text-xl">
                    <img src={logo} alt="Company Logo" className="h-6 w-auto" />  {/* Smaller size */}
                </Link>
            </div>


            {/* Hamburger menu button */}
            <button 
                onClick={toggleMenu} 
                className="md:hidden block focus:outline-none"
            >
                <svg 
                    className="fill-current text-sec"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>

            {/* Menu items */}
            <div 
                className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:w-auto w-full`} 
                id="menu"
            >
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                        <li><Link onClick={() => setIsMenuOpen(false)} className={`md:p-4 py-3 px-0 block md:mb-0 mb-2 ${location.pathname === "/" ? "text-sec font-semibold" : ""}`} to="/">Home</Link></li>
                        <li><Link onClick={() => setIsMenuOpen(false)} className={`md:p-4 py-3 px-0 block md:mb-0 mb-2 ${location.pathname === "/about-us" ? "text-sec font-semibold" : ""}`} to="/about-us">About Us</Link></li>

                        {/* Services Dropdown */}
                        <li className="relative dropdown">
                            <button 
                                className={`md:p-4 py-3 px-0 block w-full text-left md:inline md:w-auto 
                                    ${location.pathname === "/contracting" || location.pathname === "/project-management" ? "text-sec font-semibold" : ""}`} 
                                onClick={() => toggleDropdown("services")}
                            >
                                Services
                            </button>
                            <ul 
                                className={`${
                                    dropdownOpen === "services" ? "block" : "hidden"
                                } md:absolute md:left-0 mt-2 md:mt-4 bg-pri md:bg-pri/90 md:shadow-md md:w-48 w-full md:py-2 py-0 md:text-left text-left md:pl-0 pl-4`}
                            >
                                <li><Link className="block px-4 py-2 " onClick={() => {setDropdownOpen(null); setIsMenuOpen(false);}} to="/contracting">Contracting</Link></li>
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/project-management">Project Management</Link></li>
                            </ul>
                        </li>

                        {/* Projects Dropdown */}
                        <li className="relative dropdown">
                            <button 
                                className={`md:p-4 py-3 px-0 block w-full text-left md:inline md:w-auto 
                                    ${location.pathname.includes("/f&b") || location.pathname.includes("/residential") || location.pathname.includes("/banking") || location.pathname.includes("/retail")|| location.pathname.includes("/commercial-and-offices")? "text-sec font-semibold" : ""}`} 
                                onClick={() => toggleDropdown("projects")}
                            >
                                Projects
                            </button>
                            <ul 
                                className={`${
                                    dropdownOpen === "projects" ? "block" : "hidden"
                                } md:absolute md:left-0 mt-2 md:mt-4 bg-pri md:bg-pri/90 md:shadow-md md:w-48 w-full md:py-2 py-0 md:text-left text-left md:pl-0 pl-4`}
                            >
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/f&b">F&B</Link></li>
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/retail">Retail</Link></li>
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/commercial-and-offices">Commercial & Offices</Link></li>
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/residential">Residential</Link></li>
                                <li><Link className="block px-4 py-2 " onClick={() => {setIsMenuOpen(false); setDropdownOpen(null);}} to="/banking">Banking</Link></li>
                            </ul>
                        </li>

                        {/*<li><Link onClick={() => setIsMenuOpen(false)} className={`md:p-4 py-3 px-0 block ${location.pathname === "/testimonials" ? "text-sec font-semibold" : ""}`} to="/testimonials">Testimonials</Link></li>*/}
                        <li><Link onClick={() => setIsMenuOpen(false)} className={`md:p-4 py-3 px-0 block md:mb-0 mb-2 ${location.pathname === "/contact-us" ? "text-sec font-semibold" : ""}`} to="/contact-us">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
