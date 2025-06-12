import "./PersonalWebsite.css"

function PersonalWebsite() {
    return (
        <div className="website-container">
            {/* Navigation */}
            <nav className="main-nav">
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="hero-section">
                <h1 className="main-title">Aviles Development</h1>
                <h2>Custom Websites. Real Results.</h2>
                <p className="hero-text">
                    We help local businesses, entrepreneurs, and personal brands get noticed with clean, 
                    modern websites designed to convert.
                </p>
                <p className="hero-subtext">
                    Whether you're starting from scratch or need a fresh new look, we build your site 
                    with purpose and personality — no templates, no shortcuts.
                </p>
                <div className="cta-buttons">
                    <button className="cta-primary">Get Started</button>
                    <button className="cta-secondary">View Packages</button>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio-section">
                <h2>💼 Portfolio</h2>
                <p>Here are a few recent builds that helped our clients look more professional, book more jobs, and grow faster.</p>
                
                <div className="portfolio-grid">
                    <div className="portfolio-item">
                        <h3>🔹 GreenScape Landscaping</h3>
                        <p>Clean single-page site with services, photo gallery, and contact form.</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>🔹 Coach Mia Fitness</h3>
                        <p>Branded website with booking integrations and bold visuals.</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>🔹 Flow Café</h3>
                        <p>Trendy one-pager for a local coffee shop with menu, location, and reviews.</p>
                    </div>
                </div>
                <button className="view-more">See full case studies →</button>
            </section>

            {/* Services Section */}
            <section id="services" className="services-section">
                <h2>💡 Services & Packages</h2>
                <p>We keep it simple, transparent, and scalable.</p>
                
                <div className="packages-grid">
                    <div className="package-card starter">
                        <h3>🟩 Starter Site – $500+</h3>
                        <ul>
                            <li>1-page custom design</li>
                            <li>Includes Home, About, Services, Contact</li>
                            <li>Mobile-friendly</li>
                            <li>Basic SEO setup</li>
                            <li>Delivered in 5–7 days</li>
                        </ul>
                    </div>
                    <div className="package-card business">
                        <h3>🟨 Business Site – $1,200+</h3>
                        <ul>
                            <li>Up to 5 custom pages</li>
                            <li>Modern, responsive design</li>
                            <li>On-page SEO</li>
                            <li>Contact forms + map</li>
                            <li>Hosting setup included</li>
                        </ul>
                    </div>
                    <div className="package-card premium">
                        <h3>🟦 Premium Package – $2,000+</h3>
                        <ul>
                            <li>Full site + logo + copy guidance</li>
                            <li>SEO-optimized structure</li>
                            <li>Personalized visuals</li>
                            <li>2-week turnaround</li>
                            <li>Includes 1 month of support</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <h2>👤 About</h2>
                <p>
                    Hi, I'm David Aviles — a self-taught front-end web developer passionate about helping 
                    local businesses grow through clean, functional design.
                </p>
                <p>
                    At Aviles Web Development, I focus on quality over quantity, giving every project the 
                    attention it deserves. You're not hiring a giant agency — you're hiring someone who 
                    listens, cares, and delivers.
                </p>
                <p>Let's build something that's not just beautiful, but purposeful.</p>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <h2>📬 Contact</h2>
                <p>Interested in working together?</p>
                <div className="contact-info">
                    <p>📞 Call or Text: (Your Number)</p>
                    <p>📧 Email: hello@avileswebdev.com</p>
                    <p>📍 Based in [Your City] – Serving clients nationwide</p>
                </div>
                <div className="contact-buttons">
                    <button className="contact-btn">Contact Me</button>
                    <button className="book-call-btn">Book a Call</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="main-footer">
                <p>Aviles Web Development | Custom websites built with care</p>
                <p>© 2025 – All rights reserved</p>
                <div className="social-links">
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Email</a>
                    <a href="#">Portfolio</a>
                </div>
            </footer>
        </div>
    );
}

export default PersonalWebsite