import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/careerStyles.css';
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';
import {
    HiOutlineCode,
    HiOutlineClipboardList,
    HiOutlineColorSwatch,
    HiOutlineLocationMarker,
    HiOutlineClock,
    HiOutlineArrowRight,
    HiOutlineHeart,
    HiOutlineGlobe,
    HiOutlineMail,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineTrendingUp,
    HiOutlineAcademicCap,
    HiOutlineCurrencyDollar,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineFlag,
} from "react-icons/hi";

const Career = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    useParallax(0.2);

    const jobs = [
        { title: "Software Engineer", location: "Yaounde, Cameroon", type: "Full-time", department: "Engineering", description: "Join our core team to architect and ship features that power thousands of businesses.", icon: <HiOutlineCode size={24} />, tags: ["React", "Node.js", "PostgreSQL"], color: "#5B0C4E" },
        { title: "Product Manager", location: "Remote", type: "Full-time", department: "Product", description: "Lead product vision, roadmap prioritization, and cross-functional delivery from idea to launch.", icon: <HiOutlineClipboardList size={24} />, tags: ["Strategy", "Roadmapping", "Agile"], color: "#EA5254" },
        { title: "UI/UX Designer", location: "Yaounde, Cameroon", type: "Contract", department: "Design", description: "Craft intuitive, beautiful interfaces that make complex workflows feel effortless.", icon: <HiOutlineColorSwatch size={24} />, tags: ["Figma", "Design Systems", "Prototyping"], color: "#5B0C4E" },
    ];

    const perks = [
        { icon: <HiOutlineHeart size={22} />, title: "Meaningful work", desc: "Build tools used by real teams making real decisions every day." },
        { icon: <HiOutlineShieldCheck size={22} />, title: "People-first culture", desc: "We invest in growth, wellbeing, and genuine work-life balance." },
        { icon: <HiOutlineGlobe size={22} />, title: "Remote-friendly", desc: "Work from where you do your best thinking — local or global." },
        { icon: <HiOutlineTrendingUp size={22} />, title: "Fast career growth", desc: "We promote from within and create clear paths for every role." },
        { icon: <HiOutlineAcademicCap size={22} />, title: "Learning budget", desc: "$1,200 per year for courses, books, and conferences." },
        { icon: <HiOutlineCurrencyDollar size={22} />, title: "Competitive pay", desc: "Market-rate salaries reviewed every 6 months." },
    ];

    // Values — icons only, no emojis
    const values = [
        {
            icon: <HiOutlineLightningBolt size={26} />,
            title: "Ship fast, learn faster",
            desc: "We believe in quick iteration, honest feedback, and continuous improvement.",
        },
        {
            icon: <HiOutlineShieldCheck size={26} />,
            title: "Trust by default",
            desc: "We hire people we trust, then trust the people we hire. No micromanagement.",
        },
        {
            icon: <HiOutlineFlag size={26} />,
            title: "Africa-first perspective",
            desc: "Built in Cameroon, used worldwide — we bring a unique lens to global problems.",
        },
    ];

    const faqs = [
        { q: "Do you offer relocation support?", a: "For on-site roles in Yaounde we offer a relocation package covering flight, accommodation for 30 days, and a setup stipend." },
        { q: "What does the interview process look like?", a: "It's 3 steps: a 30-min intro call, a take-home challenge (paid), and a final conversation with the team. No whiteboard puzzles." },
        { q: "Can I apply for multiple roles?", a: "Yes — if you're a strong fit for more than one position, apply to both and we'll coordinate internally." },
        { q: "How quickly do you respond to applications?", a: "We review every application within 5 business days and send a personal response — no automated rejections." },
    ];

    return (
        <div className="car-root">
            <div className="car-blob car-blob-1" />
            <div className="car-blob car-blob-2" />

            {/* HERO */}
            <section className="car-hero" data-anim="fade-down">
                <div className="car-hero-inner">
                    <span className="car-badge">We're hiring</span>
                    <h1 className="car-hero-title">Build the future of<br /><span className="car-accent">business management</span></h1>
                    <p className="car-hero-sub">We're a small, focused team solving big problems. If you love building things that matter, you'll fit right in.</p>
                </div>
            </section>

            {/* VALUES */}
            <section className="car-values-section" data-anim="fade-up">
                <div className="car-section-inner">
                    <div className="car-section-label"><span>Our values</span></div>
                    <h2 className="car-section-title">What we believe in</h2>
                    <p className="car-section-sub">Our culture is shaped by the principles that guide how we build, work, and grow together.</p>
                    <div className="car-values-grid">
                        {values.map((v, i) => (
                            <div className="car-value-card" key={i}>
                                <div className="car-value-icon">{v.icon}</div>
                                <h3 className="car-value-title">{v.title}</h3>
                                <p className="car-value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PERKS */}
            <section className="car-perks-section parallax">
                <div className="car-section-inner">
                    <div className="car-section-label"><span>Benefits</span></div>
                    <h2 className="car-section-title"><TypingText text="Why you'll love working here" speed={85} /></h2>
                    <p className="car-section-sub">We take care of our people so they can do the best work of their lives.</p>
                    <div className="car-perks-grid">
                        {perks.map((p, i) => (
                            <div className="car-perk-card" key={i}>
                                <div className="car-perk-icon">{p.icon}</div>
                                <h3 className="car-perk-title">{p.title}</h3>
                                <p className="car-perk-desc">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* JOBS */}
            <section className="car-jobs-section" data-anim="fade-up">
                <div className="car-section-inner">
                    <div className="car-section-label"><span>Open positions</span></div>
                    <h2 className="car-section-title"><TypingText text="Join Our Team" speed={85} /></h2>
                    <p className="car-section-sub">We're looking for passionate people to help us build the next generation of Projina.</p>
                    <div className="car-jobs-list">
                        {jobs.map((job, i) => (
                            <div className="car-job-card" key={i}>
                                <div className="car-job-left">
                                    <div className="car-job-icon" style={{ background: `${job.color}12`, color: job.color }}>{job.icon}</div>
                                    <div className="car-job-info">
                                        <span className="car-job-dept" style={{ color: job.color }}>{job.department}</span>
                                        <h3 className="car-job-title">{job.title}</h3>
                                        <p className="car-job-desc">{job.description}</p>
                                        <div className="car-job-meta">
                                            <span><HiOutlineLocationMarker size={14} /> {job.location}</span>
                                            <span><HiOutlineClock size={14} /> {job.type}</span>
                                        </div>
                                        <div className="car-job-tags">
                                            {job.tags.map((tag, j) => <span className="car-tag" key={j}>{tag}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <button className="car-apply-btn">Apply Now <HiOutlineArrowRight size={15} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="car-faq-section">
                <div className="car-faq-inner">
                    <div className="car-section-label"><span>FAQ</span></div>
                    <h2 className="car-section-title">Hiring questions</h2>
                    <p className="car-section-sub" style={{marginBottom:40}}>What candidates usually want to know.</p>
                    <div className="car-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`car-faq-item ${openFaq === i ? 'car-faq-open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="car-faq-row">
                                    <span className="car-faq-q">{faq.q}</span>
                                    <span className="car-faq-chevron">{openFaq === i ? <HiOutlineChevronUp size={18}/> : <HiOutlineChevronDown size={18}/>}</span>
                                </div>
                                {openFaq === i && <p className="car-faq-a">{faq.a}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="car-cta-banner">
                <div className="car-cta-overlay" />
                <div className="car-cta-inner">
                    <div className="car-cta-icon"><HiOutlineMail size={30} /></div>
                    <div className="car-cta-text">
                        <h2>Don't see the right role?</h2>
                        <p>Send us your resume and a note about what you'd love to build. We're always open to exceptional people.</p>
                    </div>
                    <button className="car-cta-btn" onClick={() => navigate('/contact-us')}>
                        Get in touch <HiOutlineArrowRight size={16} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Career;