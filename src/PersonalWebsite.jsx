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
            <section id="home" className="hero-section">
                <h1 className="main-title">Aviles Web Solutions</h1>
                <h2>Custom Websites. Real Results.</h2>
                <p className="hero-text">
                    We help local businesses, entrepreneurs, and personal brands get noticed with clean, 
                    modern websites designed to convert.
                </p>
                <p className="hero-subtext">
                    Whether you're starting from scratch or need a fresh new look, we build your site 
                    with purpose and personality.
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
                        <h3>🔹 The Barber Book</h3>
                        <p>Booking website for barber shops with online booking and appointment scheduling.</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>🔹 COMING SOON</h3>
                        <p>Branded website with booking integrations and bold visuals.</p>
                    </div>
                    <div className="portfolio-item">
                        <h3>🔹 COMING SOON</h3>
                        <p>Trendy one-pager with menu, location, and reviews.</p>
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
                            <li>Home page custom design</li>
                            <li>Includes Home, About, Services, Contact pages</li>
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
            <section id="contact" className="contact-section">
                <h2>📬 Contact</h2>
                <p>Interested in working together?</p>
                
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="contact"
                                placeholder="Email or Phone Number"
                                value={formData.contact}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Hello! I'm interested in working together."
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {submitStatus === 'success' && (
                            <div className="status-message success">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="status-message error">
                                ❌ Sorry, there was an error sending your message. Please try again or contact me directly.
                            </div>
                        )}
                    </form>
                </div>

                <div className="contact-info">
                    <p>📞 Call or Text: (470) 526-3353</p>
                    <p>📧 Email: davidfrontweb@gmail.com</p>
                    <p>📍 Based in Atlanta – Serving clients nationwide</p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default PersonalWebsite