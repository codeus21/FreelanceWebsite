import { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
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

    return (
        <nav className="main-nav">
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
