import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/businessStyles.css';
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';
import {
    HiOutlineLightBulb,
    HiOutlineAcademicCap,
    HiOutlinePuzzle,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineChatAlt2,
    HiOutlineBriefcase,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineOfficeBuilding,
    HiOutlineGlobe,
    HiOutlineChartBar,
    HiOutlineUserGroup,
} from "react-icons/hi";

const Business = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useParallax(0.25);

    const services = [
        { title: "Consulting", description: "Expert advice to audit, streamline, and optimize your core business processes. We identify gaps and deliver a clear roadmap to operational excellence.", icon: <HiOutlineLightBulb size={28} />, highlights: ["Process audits", "Strategic roadmaps", "ROI-focused outcomes"], color: "#5B0C4E" },
        { title: "Training", description: "Hands-on workshops and tailored training sessions that get your team up to speed fast — from onboarding to advanced feature mastery.", icon: <HiOutlineAcademicCap size={28} />, highlights: ["Live & async formats", "Role-based curricula", "Certified completion"], color: "#EA5254" },
        { title: "Integration", description: "Seamless, zero-disruption integration of Projina into your existing workflow — connecting your tools, data, and teams under one unified platform.", icon: <HiOutlinePuzzle size={28} />, highlights: ["API & webhook support", "Data migration", "Dedicated tech support"], color: "#5B0C4E" },
    ];

    const stats = [
        { value: "300+", label: "Businesses served" },
        { value: "98%", label: "Client satisfaction" },
        { value: "2x", label: "Average productivity gain" },
        { value: "48h", label: "Onboarding turnaround" },
    ];

    const industries = [
        { icon: <HiOutlineOfficeBuilding size={24} />, name: "Enterprise & Corporations" },
        { icon: <HiOutlineGlobe size={24} />, name: "Startups & Scale-ups" },
        { icon: <HiOutlineChartBar size={24} />, name: "Consulting Firms" },
        { icon: <HiOutlineUserGroup size={24} />, name: "Non-profits & NGOs" },
    ];

    const faqs = [
        { q: "Is there a minimum team size for business plans?", a: "No minimum. Our business plans work for teams of any size, from 5-person startups to multinational corporations." },
        { q: "How does the onboarding process work?", a: "We assign you a dedicated onboarding specialist who guides your team through setup, data migration, and training over 48 hours." },
        { q: "Can we get a custom integration built?", a: "Yes. Our engineering team can build custom integrations for your specific tools and workflows. Contact us to scope the project." },
        { q: "Do you offer volume discounts?", a: "Absolutely. Organizations with 50+ seats receive custom pricing. Reach out to our sales team for a tailored quote." },
    ];

    return (
        <div className="biz-root">
            <div className="biz-blob biz-blob-1" />
            <div className="biz-blob biz-blob-2" />

            {/* HERO */}
            <section className="biz-hero" data-anim="fade-down">
                <div className="biz-hero-inner">
                    <span className="biz-badge"><HiOutlineBriefcase size={14} /> Enterprise Solutions</span>
                    <h1 className="biz-hero-title">Tailored services to<br /><span className="biz-accent">scale your business</span></h1>
                    <p className="biz-hero-sub">From consulting to full integration — we work alongside your team to ensure Projina delivers maximum value from day one.</p>
                    <button className="biz-cta" onClick={() => navigate('/contact-us')}>Talk to our team <HiOutlineArrowRight size={17} /></button>
                </div>
            </section>

            {/* STATS */}
            <section className="biz-stats-strip">
                <div className="biz-stats-inner">
                    {stats.map((s, i) => (
                        <div className="biz-stat" key={i}>
                            <span className="biz-stat-value">{s.value}</span>
                            <span className="biz-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="biz-services-section">
                <div className="biz-section-inner">
                    <div className="biz-section-label"><span>What we offer</span></div>
                    <h2 className="biz-section-title">Our Business Services</h2>
                    <p className="biz-section-sub">Each service is designed to remove friction and accelerate your path to operational clarity.</p>
                    <div className="biz-services-grid" data-anim="fade-up">
                        {services.map((svc, i) => (
                            <div className="biz-service-card" key={i}>
                                <div className="biz-service-icon" style={{ background: `${svc.color}12`, color: svc.color }}>{svc.icon}</div>
                                <h3 className="biz-service-title">{svc.title}</h3>
                                <p className="biz-service-desc">{svc.description}</p>
                                <ul className="biz-service-highlights">
                                    {svc.highlights.map((h, j) => (
                                        <li key={j}><HiOutlineCheckCircle size={15} style={{ color: svc.color }} /><span>{h}</span></li>
                                    ))}
                                </ul>
                                <button className="biz-learn-btn">Learn more <HiOutlineArrowRight size={15} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="biz-industries-section parallax">
                <div className="biz-section-inner">
                    <div className="biz-section-label"><span>Who we serve</span></div>
                    <h2 className="biz-section-title"><TypingText text="Built for every industry" speed={90} /></h2>
                    <p className="biz-section-sub">Whether you're a lean startup or a global enterprise, Projina adapts to your operational needs.</p>
                    <div className="biz-industries-grid">
                        {industries.map((ind, i) => (
                            <div className="biz-industry-card" key={i}>
                                <div className="biz-industry-icon">{ind.icon}</div>
                                <span className="biz-industry-name">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="biz-faq-section" data-anim="fade-up">
                <div className="biz-faq-inner">
                    <div className="biz-section-label"><span>FAQ</span></div>
                    <h2 className="biz-section-title"><TypingText text="Business plan questions" speed={90} /></h2>
                    <p className="biz-section-sub" style={{marginBottom: 40}}>Answers to what enterprise clients ask most.</p>
                    <div className="biz-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`biz-faq-item ${openFaq === i ? 'biz-faq-open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="biz-faq-row">
                                    <span className="biz-faq-q">{faq.q}</span>
                                    <span className="biz-faq-chevron">{openFaq === i ? <HiOutlineChevronUp size={18}/> : <HiOutlineChevronDown size={18}/>}</span>
                                </div>
                                {openFaq === i && <p className="biz-faq-a">{faq.a}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER — background image */}
            <section className="biz-cta-banner">
                <div className="biz-cta-overlay" />
                <div className="biz-cta-inner">
                    <div className="biz-cta-icon"><HiOutlineChatAlt2 size={32} /></div>
                    <div className="biz-cta-text">
                        <h2>Ready to get started?</h2>
                        <p>Our business team is standing by to create a custom plan that fits your organization's needs and goals.</p>
                    </div>
                    <button className="biz-cta-btn" onClick={() => navigate('/contact-us')}>
                        Contact Us <HiOutlineArrowRight size={17} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Business;