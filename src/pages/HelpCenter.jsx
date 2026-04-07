import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/helpCenterStyles.css';
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';
import dashboardHero from '../assets/dashboard/dashboardActivity.png';
import {
    HiOutlineSearch,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineViewGrid,
    HiOutlineUserGroup,
    HiOutlineCreditCard,
    HiOutlineChatAlt2,
    HiOutlineMail,
    HiOutlineBookOpen,
    HiOutlineArrowRight,
} from "react-icons/hi";

const HelpCenter = () => {
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    useParallax(0.2);

    const faqs = [
        {
            question: "How do I get started with Projina?",
            answer: "Sign up for a free account, and you'll have immediate access to your dashboard. No lengthy setup required — create your first project within minutes and start collaborating with your team right away.",
            icon: <HiOutlineLightningBolt size={20} />,
            category: "Getting Started"
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely. We use AES-256 bank-grade encryption at rest and in transit, follow SOC 2 Type II compliance standards, and conduct regular third-party security audits. Your data belongs to you — always.",
            icon: <HiOutlineShieldCheck size={20} />,
            category: "Security"
        },
        {
            question: "Can I manage multiple projects?",
            answer: "Yes. Projina allows you to create and manage unlimited projects from a single dashboard. Switch between projects seamlessly, set priorities, and maintain full visibility across your entire portfolio.",
            icon: <HiOutlineViewGrid size={20} />,
            category: "Projects"
        },
        {
            question: "How do I add team members?",
            answer: "Navigate to the Teams section in your dashboard and invite members via email. You can set custom roles, permission levels, and access scopes for every individual on your workspace.",
            icon: <HiOutlineUserGroup size={20} />,
            category: "Teams"
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. All transactions are processed through Stripe's secure payment infrastructure.",
            icon: <HiOutlineCreditCard size={20} />,
            category: "Billing"
        },
    ];

    const filteredFaqs = faqs.filter(
        (faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const supportChannels = [
        {
            icon: <HiOutlineChatAlt2 size={28} />,
            title: "Live Chat",
            desc: "Instant help from our team, 24/7.",
            action: "Start a conversation",
            color: "#5B0C4E"
        },
        {
            icon: <HiOutlineMail size={28} />,
            title: "Email Support",
            desc: "Detailed answers within 4 hours.",
            action: "Send a message",
            color: "#EA5254"
        },
        {
            icon: <HiOutlineBookOpen size={28} />,
            title: "Documentation",
            desc: "Deep-dive guides and API docs.",
            action: "Browse docs",
            color: "#5B0C4E"
        },
    ];

    return (
        <div className="hc-root">
            {/* Decorative background blobs */}
            <div className="hc-blob hc-blob-1" />
            <div className="hc-blob hc-blob-2" />

            {/* ── HERO ── */}
            <section className="hc-hero parallax" data-anim="fade-down">
                <div className="hc-hero-inner">
                    <div className="hc-hero-left">
                        <span className="hc-badge">Support Center</span>
                        <h1 className="hc-hero-title">
                            <TypingText text="How can we" speed={80} /> <br />
                            <span className="hc-accent"><TypingText text="help you" speed={80} delay={800} /></span> <TypingText text="today?" speed={80} delay={1400} />
                        </h1>
                        <p className="hc-hero-sub">
                            Everything you need to know about Projina — answers, guides, and direct support in one place.
                        </p>

                        {/* Search bar */}
                        <div className="hc-search-wrap">
                            <HiOutlineSearch className="hc-search-icon" size={20} />
                            <input
                                className="hc-search-input"
                                type="text"
                                placeholder="Search for answers…"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="hc-hero-right">
                        <div className="hc-img-frame">
                            <img src={dashboardHero} alt="Projina Dashboard" className="hc-hero-img" />
                            <div className="hc-img-badge hc-img-badge-1">
                                <HiOutlineShieldCheck size={16} />
                                <span>Enterprise-grade security</span>
                            </div>
                            <div className="hc-img-badge hc-img-badge-2">
                                <HiOutlineLightningBolt size={16} />
                                <span>Setup in &lt; 2 minutes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ── */}
            <section className="hc-stats-strip">
                <div className="hc-stats-inner">
                    {[
                        { value: "99.9%", label: "Uptime SLA" },
                        { value: "<4h", label: "Response time" },
                        { value: "50K+", label: "Happy teams" },
                        { value: "24/7", label: "Live support" },
                    ].map((s, i) => (
                        <div className="hc-stat-item" key={i}>
                            <span className="hc-stat-value">{s.value}</span>
                            <span className="hc-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="hc-faq-section" data-anim="fade-up">
                <div className="hc-section-inner">
                    <div className="hc-section-label">
                        <span>FAQ</span>
                    </div>
                    <h2 className="hc-section-title">Frequently asked questions</h2>
                    <p className="hc-section-sub">
                        Can't find what you're looking for? Reach out to our support team directly.
                    </p>

                    <div className="hc-faq-list">
                        {filteredFaqs.length === 0 && (
                            <div className="hc-no-results">
                                <HiOutlineSearch size={36} />
                                <p>No results for "{searchQuery}"</p>
                            </div>
                        )}
                        {filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`hc-faq-item ${openIndex === index ? "hc-faq-open" : ""}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="hc-faq-header">
                                    <div className="hc-faq-header-left">
                                        <span className="hc-faq-icon">{faq.icon}</span>
                                        <div>
                                            <span className="hc-faq-category">{faq.category}</span>
                                            <h3 className="hc-faq-question">{faq.question}</h3>
                                        </div>
                                    </div>
                                    <span className="hc-faq-chevron">
                                        {openIndex === index
                                            ? <HiOutlineChevronUp size={20} />
                                            : <HiOutlineChevronDown size={20} />}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <div className="hc-faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUPPORT CHANNELS ── */}
            <section className="hc-support-section">
                <div className="hc-section-inner">
                    <div className="hc-section-label"><span>Get in touch</span></div>
                    <h2 className="hc-section-title">Still need help?</h2>
                    <p className="hc-section-sub">Our team is ready to help you succeed with Projina.</p>

                    <div className="hc-support-grid">
                        {supportChannels.map((ch, i) => (
                            <div className="hc-support-card" key={i} onClick={() => navigate('/contact-us')}>
                                <div className="hc-support-icon" style={{ color: ch.color }}>{ch.icon}</div>
                                <h3 className="hc-support-title">{ch.title}</h3>
                                <p className="hc-support-desc">{ch.desc}</p>
                                <span className="hc-support-link">
                                    {ch.action} <HiOutlineArrowRight size={15} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;