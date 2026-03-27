import React from "react";
import '../styles/footerStyles.css'
import styles from '../styles/landingStyles.module.css'

import iconWhite from '../assets/icon-white.png'
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

/* ── Apple App Store badge ── */
const AppStoreBadge = () => (
    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="store-badge">
        <div className="store-badge-icon">
            <svg viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" fill="white">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-145.5-96.8C158.6 863.6 106 803.4 84.7 713.3c-21.8-93.1-16.8-237.1 52.7-329.6 38.6-51.3 95.3-90.8 159.5-91.9 63.5-1.1 114.6 44.4 164 44.4 48.3 0 124.2-52.2 197.1-52.2zm-180.5-133.4c28.8-35.3 48.8-84.2 48.8-133.1 0-6.8-.6-13.7-1.9-19.4-46.2 1.7-101.3 30.9-134.4 71.2-25.4 29.9-49.3 78.5-49.3 128 0 7.4 1.3 14.9 1.9 17.2 3.2.6 8.4 1.3 13.7 1.3 41.3 0 93.3-27.7 121.2-65.2z"/>
            </svg>
        </div>
        <div className="store-badge-text">
            <span className="store-badge-sub">Download on the</span>
            <span className="store-badge-name">App Store</span>
        </div>
    </a>
);

/* ── Google Play badge ── */
const PlayStoreBadge = () => (
    <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="store-badge">
        <div className="store-badge-icon">
            {/* Official Google Play triangle logo colours */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.76c.37.2.8.22 1.19.04l13.2-7.62-3.07-3.07L3.18 23.76z" fill="#EA4335"/>
                <path d="M22.32 10.62l-3.17-1.83-3.43 3.43 3.43 3.43 3.19-1.84c.91-.52.91-1.67-.02-2.19z" fill="#FBBC04"/>
                <path d="M2.04 1.15C1.7 1.5 1.5 2.03 1.5 2.72v18.56c0 .69.2 1.22.55 1.57l.09.08 10.4-10.4v-.25L2.13 1.07l-.09.08z" fill="#4285F4"/>
                <path d="M14.5 8.26L3.18.24C2.79.06 2.36.08 2 .27L12.54 10.8l1.96-2.54z" fill="#34A853"/>
            </svg>
        </div>
        <div className="store-badge-text">
            <span className="store-badge-sub">Get it on</span>
            <span className="store-badge-name">Google Play</span>
        </div>
    </a>
);

const Footer = ({ dashboardImage }) => {
    const navigate = useNavigate();

    return (
        <>
            {/* ── Try for free ── */}
            <div className="try-section">
                <h1>Try us for <span style={{ color: '#EA5254' }}>Free</span></h1>
                <div className="try-section-btns">
                    <button
                        style={{ border: '1.5px solid rgba(0,0,0,0.2)', background: 'transparent' }}
                        onClick={() => navigate("/contact-us")}
                    >
                        Contact Sales
                    </button>
                    <button style={{ color: 'white', backgroundColor: '#5B0C4E' }}>
                        Sign up for free
                    </button>
                </div>
            </div>

            {/* ── Dashboard preview ── */}
            {dashboardImage && (
                <div className="dashboard-footer-half">
                    <img src={dashboardImage} alt="Projina Dashboard" className="dashboard-footer-half-img" />
                </div>
            )}

            {/* ── Main footer ── */}
            <div className="footer">
                <div className="footer-container">

                    {/* Brand block */}
                    <div className="footer-block first-block">
                        <span className="footer-logo">
                            <img src={iconWhite} width={36} height={36} alt="Projina logo" />
                            <span className="footer-company">Pro<b style={{ color: 'white' }}>jina</b></span>
                        </span>
                        <span className="footer-desc">
                            One Platform. Every Tool You Need. Projina helps you manage better,
                            work faster, and scale smarter — with tools for finance, employee
                            management, projects, and schedules, built for modern businesses.
                        </span>
                        <div className="social">
                            <FaLinkedin size={24} color="white" style={{ cursor: 'pointer' }} />
                            <FaFacebook size={24} color="white" style={{ cursor: 'pointer' }} />
                            <FaInstagram size={24} color="white" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="footer-col">
                        <span className="footer-block-title">Quick Links</span>
                        <ul className="footer-links">
                            <li onClick={() => navigate('/')}>Home</li>
                            <li onClick={() => navigate('/#features')}>Features</li>
                            <li onClick={() => navigate('/pricing')}>Plan & Pricing</li>
                            <li onClick={() => navigate('/terms-and-conditions')}>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <span className="footer-block-title">Contact</span>
                        <span className="footer-col-highlight">Projina company<br />management system</span>
                        <span className="footer-col-item">Yaounde, Cameroon</span>
                        <span className="footer-col-item">info@projina.com</span>
                    </div>

                    <div className="footer-col">
                        <span className="footer-block-title">Resources</span>
                        <span className="footer-col-link" onClick={() => navigate('/help-center')}>Help Center</span>
                        <span className="footer-col-link" onClick={() => navigate('/how-it-works')}>How it works</span>
                        <span className="footer-col-link" onClick={() => navigate('/business')}>Business</span>
                    </div>

                    <div className="footer-col">
                        <span className="footer-block-title">Company</span>
                        <span className="footer-col-link" onClick={() => navigate('/about')}>About Us</span>
                        <span className="footer-col-link" onClick={() => navigate('/contact-us')}>Contact Us</span>
                        <span className="footer-col-link" onClick={() => navigate('/career')}>Career</span>
                    </div>

                </div>

                {/* Bottom extras */}
                <div className="footer-bottom-row">

                    {/* App badges */}
                    <div className="footer-extras-col">
                        <span className="footer-block-title">Download Our Mobile App</span>
                        <p className="footer-extras-desc">
                            Get Projina on the go. Manage your projects and teams from anywhere.
                        </p>
                        <div className="store-badges-row">
                            <AppStoreBadge />
                            <PlayStoreBadge />
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-extras-col">
                        <span className="footer-block-title">Newsletter</span>
                        <p className="footer-extras-desc">
                            Stay updated with the latest Projina features, product upgrades,
                            and useful resources — no spam, ever. Unsubscribe anytime.
                        </p>
                        <div className="newsletter-row">
                            <input type="email" className="footer-input" placeholder="Enter your email address" />
                            <button className="newsletter-btn">Subscribe</button>
                        </div>
                    </div>

                </div>

                {/* Copyright bar */}
                <div className="footer-end">
                    <div className="footer-end-left">
                        <span onClick={() => navigate("/terms-and-conditions")}>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Legal Notice</span>
                        <span>Cookie Settings</span>
                    </div>
                    <div>&copy; 2025 Projina Company Management System</div>
                </div>
            </div>
        </>
    );
};

export default Footer;