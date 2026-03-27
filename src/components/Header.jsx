import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from '../styles/landingStyles.module.css'
import '../styles/headerStyles.css'

import icon from '../assets/Icon.png'
import Product from '../pages/Product'
import menuBar from '../assets/mobile-menu.png'
import arrowBack from '../assets/arrow-back.png'
import close from '../assets/close.png'

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    // Close mobile menu on route change
    useEffect(() => {
        setShowMenu(false)
    }, [location.pathname])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [showMenu])

    function closeMenu() {
        setShowMenu(false)
    }

    return (
        <>
            {/* ── Main header bar ── */}
            <div className="header">

                {/* Mobile: Login button (left) */}
                <a href="https://app.projina.top" className="mobile-login-wrap">
                    <button className="mobile-login">Login</button>
                </a>

                {/* Logo (centre on mobile, normal flow on desktop) */}
                <div className="logo">
                    <img src={icon} alt="Projina logo" width="40" height="40" />
                    Pro<b style={{ color: '#5B0C4E' }}>jina</b>
                </div>

                {/* Mobile: Hamburger (right) */}
                <button
                    className="menu-bar"
                    onClick={() => setShowMenu(prev => !prev)}
                    aria-label={showMenu ? 'Close menu' : 'Open menu'}
                    aria-expanded={showMenu}
                >
                    <img
                        src={showMenu ? close : menuBar}
                        alt={showMenu ? 'Close menu' : 'Open menu'}
                    />
                </button>

                {/* Desktop: Nav links */}
                <div className="headerLinks">
                    <span className={location.pathname === '/' ? 'active-link' : ''}>
                        <Link to="/">Home</Link>
                    </span>
                    <span
                        className={location.pathname === '/product' ? 'active-link' : ''}
                        onMouseOver={() => setShow(true)}
                        onMouseLeave={() => {}}
                    >
                        <Link to="/product">Product</Link>
                    </span>
                    <span className={location.pathname === '/solutions' ? 'active-link' : ''}>
                        <Link to="/solutions">Solutions</Link>
                    </span>
                    <span className={location.pathname === '/pricing' ? 'active-link' : ''}>
                        <Link to="/pricing">Pricing</Link>
                    </span>
                    <span className={location.pathname === '/about' ? 'active-link' : ''}>
                        <Link to="/about">About & Testimonials</Link>
                    </span>
                </div>

                {/* Desktop: Auth buttons */}
                <div className="headerBtns">
                    <a href="http://crms.projina.top/">
                        <button className={styles.loginBtn}>Login</button>
                    </a>
                    <a href="https://crms.projina.top/public/register">
                        <button className={styles.registerBtn}>Sign up for free</button>
                    </a>
                </div>
            </div>

            {/* ── Desktop product dropdown ── */}
            <div
                className={show ? 'show-product' : 'hide-product'}
                onMouseLeave={() => setShow(false)}
            >
                <Product />
            </div>

            {/* ── Mobile fullscreen menu ── */}
            <div className={showMenu ? 'mobile-menu mobile-menu-open' : 'mobile-menu'}>
                <div className="mobile-link-container">
                    <span className={location.pathname === '/' ? 'active-link' : ''}>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </span>
                    <span className={location.pathname === '/product' ? 'active-link' : ''}>
                        <Link to="/product" onClick={closeMenu}>Product</Link>
                    </span>
                    <span className={location.pathname === '/solutions' ? 'active-link' : ''}>
                        <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
                    </span>
                    <span className={location.pathname === '/pricing' ? 'active-link' : ''}>
                        <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
                    </span>
                    <span className={location.pathname === '/about' ? 'active-link' : ''}>
                        <Link to="/about" onClick={closeMenu}>About & Testimonials</Link>
                    </span>
                    <span className={location.pathname === '/how-it-works' ? 'active-link' : ''}>
                        <Link to="/how-it-works" onClick={closeMenu}>How It Works</Link>
                    </span>
                    <span className={location.pathname === '/career' ? 'active-link' : ''}>
                        <Link to="/career" onClick={closeMenu}>Careers</Link>
                    </span>
                    <span className={location.pathname === '/business' ? 'active-link' : ''}>
                        <Link to="/business" onClick={closeMenu}>Business</Link>
                    </span>

                    {/* CTA buttons */}
                    <span style={{ padding: '20px 24px', borderBottom: 'none' }}>
                        <a href="https://crms.projina.top/public/register" style={{ display: 'block', marginBottom: '12px' }}>
                            <button className={styles.loginBtn} style={{ width: '100%', justifyContent: 'center' }}>
                                Sign up for free
                            </button>
                        </a>
                        <button
                            className={styles.registerBtn}
                            style={{ width: '100%', justifyContent: 'center' }}
                            onClick={() => { closeMenu(); navigate('/contact-us') }}
                        >
                            Contact Sales <img src={arrowBack} alt="arrow" />
                        </button>
                    </span>
                </div>

                <div className="mobile-menu-footer">
                    <span>Privacy policy</span>
                    <span>Legal notice</span>
                    <span>Cookie Settings</span>
                </div>
            </div>
        </>
    )
}

export default Header