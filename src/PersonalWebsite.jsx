import "./PersonalWebsite.css"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function PersonalWebsite() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', contact: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="website-container">
            <Navbar />

            {/* Hero Section */}
            <main>
                <section id="home" className="hero-section" role="banner" aria-labelledby="hero-title">
                    <h1 id="hero-title" className="main-title">Aviles Web Solutions</h1>
                    <h2>Custom Websites. Real Results.</h2>
                    <p className="hero-text">
                        We help local businesses, entrepreneurs, and personal brands get noticed with clean, 
                        modern websites designed to convert.
                    </p>
                    <p className="hero-subtext">
                        Whether you're starting from scratch or need a fresh new look, we build your site 
                        with purpose and personality.
                    </p>
                    <div className="cta-buttons" role="group" aria-label="Call to action buttons">
                        <button className="cta-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} aria-label="Get started with a custom website">Get Started</button>
                        <button className="cta-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} aria-label="View our web design packages">View Packages</button>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
                    <h2 id="portfolio-title">💼 Portfolio</h2>
                    <p>Here are a few recent builds that helped our clients look more professional, book more jobs, and grow faster.</p>
                    
                    <div className="portfolio-grid" role="list" aria-label="Portfolio projects">
                        <article className="portfolio-item" role="listitem">
                            <h3>🔹 The Barber Book</h3>
                            <p>Booking website for barber shops with online booking and appointment scheduling.</p>
                        </article>
                        <article className="portfolio-item" role="listitem">
                            <h3>🔹 COMING SOON</h3>
                            <p>Branded website with booking integrations and bold visuals.</p>
                        </article>
                        <article className="portfolio-item" role="listitem">
                            <h3>🔹 COMING SOON</h3>
                            <p>Trendy one-pager with menu, location, and reviews.</p>
                        </article>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="services-section" aria-labelledby="services-title">
                    <h2 id="services-title">💡 Services & Packages</h2>
                    <p>We keep it simple, transparent, and scalable.</p>
                    
                    <div className="packages-grid" role="list" aria-label="Web design service packages">
                        <article className="package-card starter" role="listitem">
                            <h3>🟩 Starter Site – $300-800</h3>
                            <ul>
                                <li>Home page custom design</li>
                                <li>Includes Home, About, Services, Contact pages</li>
                                <li>Mobile-friendly</li>
                                <li>Basic SEO setup</li>
                                <li>Delivered in 5–7 days</li>
                            </ul>
                        </article>
                        <article className="package-card business" role="listitem">
                            <h3>🟨 Business Site – $1,000-1,500</h3>
                            <ul>
                                <li>Up to 5 custom pages</li>
                                <li>Modern, responsive design</li>
                                <li>On-page SEO</li>
                                <li>Contact forms + map and other features</li>
                                <li>Delivered in 10-15 days</li>
                            </ul>
                        </article>
                        <article className="package-card premium" role="listitem">
                            <h3>🟦 Premium Package – $2,000+</h3>
                            <ul>
                                <li>Fully customized and optimized site</li>
                                <li>SEO-optimized structure</li>
                                <li>Personalized visuals</li>
                                <li>Booking systems or other custom features</li>
                                <li>Delivered in 2-4 weeks</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="about-section" aria-labelledby="about-title">
                    <h2 id="about-title">👤 About</h2>
                    <p>
                        Hi, I'm David Aviles — a web developer passionate about helping 
                        local businesses grow through clean, functional design.
                    </p>
                    <p>
                        At Aviles Web Solutions, We focus on quality over quantity, giving every project the 
                        attention it deserves. You're not hiring a giant agency — you're hiring someone who 
                        listens, cares, and delivers.
                    </p>
                    <p>Let's build something that's not just beautiful, but purposeful.</p>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact-section" aria-labelledby="contact-title">
                    <h2 id="contact-title">📬 Contact</h2>
                    <p>Interested in working together?</p>
                    
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
                            <div className="form-group">
                                <label htmlFor="name" className="sr-only">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact" className="sr-only">Email or Phone Number</label>
                                <input
                                    id="contact"
                                    type="text"
                                    name="contact"
                                    placeholder="Email or Phone Number"
                                    value={formData.contact}
                                    onChange={handleInputChange}
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Hello! I'm interested in working together."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    required
                                    aria-required="true"
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isSubmitting}
                                aria-describedby={submitStatus ? 'form-status' : undefined}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {submitStatus === 'success' && (
                                <div id="form-status" className="status-message success" role="status" aria-live="polite">
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div id="form-status" className="status-message error" role="alert" aria-live="assertive">
                                    ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>

                    <address className="contact-info">
                        <p>📞 Call or Text: <a href="tel:+14705263353" aria-label="Call David Aviles at 470-526-3353">(470) 526-3353</a></p>
                        <p>📧 Email: <a href="mailto:davidfrontweb@gmail.com" aria-label="Email David Aviles">davidfrontweb@gmail.com</a></p>
                        <p>📍 Based in Atlanta – Serving clients nationwide</p>
                    </address>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default PersonalWebsite