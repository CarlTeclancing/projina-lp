import React, { useEffect, useRef, useState } from "react";
import '../styles/aboutStyles.css'
import styles from '../styles/landingStyles.module.css'
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';

import aboutImg1 from '../assets/aboutImg1.jpg'
import aboutImg2 from '../assets/aboutImg2.jpg'

const About = () => {
    useParallax(0.18);
    return (
        <React.Fragment>
            <div className="about-container">

                <span className="about-title"><TypingText text="About Us" speed={90} /></span>

                <p style={{ textAlign: 'center', color: '#5a5a72', fontSize: '1rem', maxWidth: 600, lineHeight: 1.7 }}>
                    Projina is an all-in-one company management system built to simplify operations
                    and empower businesses of every size.
                </p>

                {/* Dashboard screenshot */}
                <div className={`${styles.dashboardScreenshot} parallax`} data-anim="slide-up">
                    <img src={aboutImg1} alt="Projina Dashboard" className={styles.dashboardScreenshotImg} />
                </div>

                {/* Intro card — clean, properly padded */}
                <div className="about-intro-card" data-anim="fade-left">
                    <p>
                        We understand the challenges that come with running a business — scattered spreadsheets,
                        disconnected tools, and time lost chasing updates. Projina brings everything together in
                        one powerful platform, giving you clarity, control, and confidence.
                    </p>
                    <strong>With Projina, you can:</strong>
                    <ul style={{ textAlign: 'left', marginTop: 12, paddingLeft: 20, color: '#5a5a72', lineHeight: 2 }}>
                        <li>Manage projects and tasks in one place</li>
                        <li>Track finances and payroll effortlessly</li>
                        <li>Collaborate across teams with clear visibility</li>
                        <li>Make data-driven decisions with built-in analytics</li>
                    </ul>
                </div>

                <section className="about-feature-section" data-anim="fade-up">
                    <div className="about-feature-card">
                        <h2>Designed to remove friction at every step</h2>
                        <p>Projina combines finance, team, and project tools into one connected workflow, so you can spend less time managing systems and more time growing your business.</p>
                        <div className="about-feature-grid">
                            <div className="about-feature-item">
                                <strong>Clear visibility</strong>
                                <p>Track deadlines, cash flow and team performance from one dashboard.</p>
                            </div>
                            <div className="about-feature-item">
                                <strong>Fast setup</strong>
                                <p>Start in minutes with guided onboarding and ready-made templates.</p>
                            </div>
                            <div className="about-feature-item">
                                <strong>Unified operations</strong>
                                <p>Manage projects, finances and people together — not in separate apps.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <div className="sBlocks">
                    <div className="sBlock">
                        <div className="sBlock-text">
                            <h3>Our Story</h3>
                            <p>
                                Every big idea starts with a problem. For us, it was the frustration of juggling
                                multiple tools just to keep a business running — spreadsheets for finance, apps for
                                tasks, emails for updates, and endless meetings to stay aligned. It was
                                time-consuming, costly, and exhausting.
                            </p>
                            <p>
                                That's why we built Projina: an all-in-one platform designed to simplify how
                                businesses operate. From finance to team management and project tracking, we wanted
                                everything under one roof — clean, connected, and easy to use.
                            </p>
                            <p>
                                What started as a small idea between problem-solvers has grown into a platform
                                trusted by businesses ready to scale smarter and faster. And this is just the
                                beginning.
                            </p>
                        </div>
                        <img src={aboutImg2} className="sBlock-img" alt="Our team" />
                    </div>
                </div>

                {/* Testimonials — drag / swipe to scroll */}
                <h2 className="about-title smaller-title" data-anim="fade-up"><TypingText text="What Founders Are Saying" speed={80} /></h2>

                <TestimonialsSlider />

            </div>
        </React.Fragment>
    );
};

export default About;

/* ─────────────────────────────────────────
   Drag-to-scroll + auto-scroll testimonials
───────────────────────────────────────── */
const TESTIMONIALS = [
    { name: 'Janny Anderson',   title: 'Tech Startup Founder',   quote: 'Projina transformed how we manage our operations. The dashboard is intuitive and saves us hours every week.',          image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
    { name: 'Sarah Mitchell',  title: 'E-commerce Owner',        quote: 'From invoicing to team scheduling, everything is streamlined. Highly recommend for growing businesses.',              image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ryan Lee',        title: 'Consulting Firm CEO',     quote: 'The analytics features give us real insights into our performance. Projina is a game-changer.',                       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Emma Kim',        title: 'Non-profit Director',     quote: 'Managing volunteers and projects has never been easier. Projina adapts to our unique needs.',                         image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80' },
    { name: 'Michael Garcia',  title: 'Manufacturing Manager',   quote: 'Inventory tracking and payroll are now automated. Our efficiency has doubled.',                                       image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80' },
];

const TestimonialsSlider = () => {
    const trackRef = useRef(null);
    const containerRef = useRef(null);
    const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
    const animationRef = useRef(null);
    const lastTimeRef = useRef(0);
    const pausedRef = useRef(false);
    const clickPreventRef = useRef(false);
    const [activeCard, setActiveCard] = useState(null);

    const stopAuto = () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
        }
    };

    const startAuto = () => {
        const el = trackRef.current;
        if (!el || animationRef.current) return;

        lastTimeRef.current = 0;

        const step = (time) => {
            const currentEl = trackRef.current;
            if (!currentEl) return;

            if (!lastTimeRef.current) lastTimeRef.current = time;
            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;

            if (!pausedRef.current && !drag.current.active) {
                currentEl.scrollLeft += delta * 0.03;

                if (currentEl.scrollLeft >= currentEl.scrollWidth / 2) {
                    currentEl.scrollLeft -= currentEl.scrollWidth / 2;
                }
            }

            animationRef.current = requestAnimationFrame(step);
        };

        animationRef.current = requestAnimationFrame(step);
    };

    const pauseAuto = () => {
        pausedRef.current = true;
    };

    const resumeAuto = () => {
        pausedRef.current = false;
        setActiveCard(null);
        startAuto();
    };

    useEffect(() => {
        startAuto();

        const handleDocumentPointerDown = (e) => {
            if (!containerRef.current?.contains(e.target)) {
                resumeAuto();
            }
        };

        document.addEventListener('pointerdown', handleDocumentPointerDown);

        return () => {
            stopAuto();
            document.removeEventListener('pointerdown', handleDocumentPointerDown);
        };
    }, []);

    const onMouseDown = (e) => {
        pauseAuto();
        drag.current = {
            active: true,
            startX: e.pageX - trackRef.current.offsetLeft,
            scrollLeft: trackRef.current.scrollLeft
        };
        trackRef.current.style.cursor = 'grabbing';
        clickPreventRef.current = false;
    };

    const onMouseMove = (e) => {
        if (!drag.current.active) return;
        e.preventDefault();
        const x = e.pageX - trackRef.current.offsetLeft;
        const walk = (x - drag.current.startX) * 1.2;
        if (Math.abs(walk) > 6) clickPreventRef.current = true;
        trackRef.current.scrollLeft = drag.current.scrollLeft - walk;
    };

    const onMouseUp = () => {
        drag.current.active = false;
        if (trackRef.current) trackRef.current.style.cursor = 'grab';
        if (activeCard === null) pausedRef.current = false;
    };

    const onTouchStart = (e) => {
        pauseAuto();
        drag.current = {
            active: true,
            startX: e.touches[0].pageX,
            scrollLeft: trackRef.current.scrollLeft
        };
        clickPreventRef.current = false;
    };

    const onTouchMove = (e) => {
        if (!drag.current.active) return;
        const walk = (drag.current.startX - e.touches[0].pageX) * 1.1;
        if (Math.abs(walk) > 6) clickPreventRef.current = true;
        trackRef.current.scrollLeft = drag.current.scrollLeft + walk;
    };

    const onTouchEnd = () => {
        drag.current.active = false;
        if (activeCard === null) pausedRef.current = false;
    };

    const handleCardClick = (index) => {
        if (clickPreventRef.current) {
            clickPreventRef.current = false;
            return;
        }

        if (activeCard === index) {
            resumeAuto();
            return;
        }

        setActiveCard(index);
        pauseAuto();
    };

    const cards = [...TESTIMONIALS, ...TESTIMONIALS];

    return (
        <div className="testimonials-container" ref={containerRef}>
            <div
                className="testimonials-track"
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {cards.map((item, index) => (
                    <div
                        className="about-block"
                        key={index}
                        onClick={() => handleCardClick(index)}
                    >
                        <div className="about-block-header">
                            <img src={item.image} alt={item.name} className="profile-img" />
                            <div className="about-block-profile">
                                <b>{item.name}</b>
                                <span style={{ fontSize: 'small' }}>{item.title}</span>
                            </div>
                        </div>
                        <div className="about-block-stars">
                            {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                        </div>
                        <div>"{item.quote}"</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
