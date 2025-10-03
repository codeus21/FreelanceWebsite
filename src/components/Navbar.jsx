import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Add smooth scrolling for navbar links
        const handleNavClick = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.main-nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu after clicking a link
                setIsMobileMenuOpen(false);
            }
        };

        // Add event listeners to all nav links
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        // Cleanup function
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleNavClick);
            });
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <a href="#home" aria-label="Aviles Web Solutions Home">
                        <img src="/logo.svg" alt="Aviles Web Solutions" width="40" height="40" />
                    </a>
                </div>
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <button 
                    className="mobile-menu-toggle" 
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
