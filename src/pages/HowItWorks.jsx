import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/howItWorksStyles.css';
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';
import {
    HiOutlineUserAdd, HiOutlineAdjustments, HiOutlineClipboardCheck,
    HiOutlineTrendingUp, HiOutlineArrowRight, HiOutlineLightningBolt,
    HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineShieldCheck,
    HiOutlineClock, HiOutlineSupport, HiOutlineChevronDown,
    HiOutlineChevronUp, HiOutlineCurrencyDollar, HiOutlineUserGroup,
    HiOutlineChartBar, HiOutlineChatAlt2,
} from "react-icons/hi";
import workflowImage from '../assets/dashboard/dashboardTaskBoard.png';

/* ── Inline SVG platform ecosystem illustration ── */
const EcosystemIllustration = () => (
    <div className="hiw-ecosystem-svg-wrap">
        <svg viewBox="0 0 480 400" xmlns="http://www.w3.org/2000/svg" aria-label="Projina platform ecosystem diagram">
            <defs>
                <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B1C78"/>
                    <stop offset="100%" stopColor="#5B0C4E"/>
                </radialGradient>
                <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#5B0C4E" stopOpacity="0.18"/>
                    <stop offset="100%" stopColor="#5B0C4E" stopOpacity="0"/>
                </radialGradient>
                <filter id="softBlur">
                    <feGaussianBlur stdDeviation="3"/>
                </filter>
                <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#5B0C4E" floodOpacity="0.12"/>
                </filter>
            </defs>

            {/* ── Background glow ── */}
            <circle cx="240" cy="200" r="170" fill="url(#glowGrad)"/>

            {/* ── Orbit rings ── */}
            <circle cx="240" cy="200" r="100" fill="none" stroke="rgba(91,12,78,0.14)" strokeWidth="1.5" strokeDasharray="6 5"/>
            <circle cx="240" cy="200" r="155" fill="none" stroke="rgba(234,82,84,0.1)" strokeWidth="1" strokeDasharray="4 6"/>

            {/* ── Spoke lines ── */}
            {[
                [240,95],  [365,145], [365,255],
                [240,305], [115,255], [115,145]
            ].map(([x2,y2],i) => {
                const ang = i*60*(Math.PI/180);
                const xi = 240 + Math.cos(ang-Math.PI/2)*52;
                const yi = 200 + Math.sin(ang-Math.PI/2)*52;
                return <line key={i} x1={xi} y1={yi} x2={x2} y2={y2}
                    stroke="rgba(91,12,78,0.18)" strokeWidth="1.5" strokeDasharray="5 4"/>;
            })}

            {/* ── Hub circle ── */}
            <circle cx="240" cy="200" r="52" fill="url(#hubGrad)" filter="url(#cardShadow)"/>
            <circle cx="240" cy="200" r="44" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
            {/* Hub icon — simplified "P" lettermark */}
            <text x="240" y="194" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="white">P</text>
            <text x="240" y="212" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.7)" letterSpacing="1.5">PROJINA</text>

            {/* ── Node cards — 6 positions on clock ── */}
            {/* Helper: node card at angle (deg), label, icon-path */}
            {/* Top: Finance */}
            <g filter="url(#cardShadow)">
                <rect x="194" y="62" width="92" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="202" y="72" width="20" height="20" rx="5" fill="#f5edf3"/>
                {/* dollar icon simplified */}
                <text x="212" y="86" textAnchor="middle" fontSize="12" fill="#5B0C4E" fontFamily="sans-serif">$</text>
                <text x="252" y="84" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Finance</text>
            </g>

            {/* Top-right: Teams */}
            <g filter="url(#cardShadow)">
                <rect x="328" y="118" width="88" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="336" y="128" width="20" height="20" rx="5" fill="#f5edf3"/>
                {/* User group icon */}
                <g transform="translate(346, 139)">
                    <circle cx="-4" cy="-3" r="3" fill="#5B0C4E"/>
                    <circle cx="4" cy="-3" r="3" fill="#5B0C4E"/>
                    <path d="M -6 -1 L 6 -1 Q 6 1 4 2 L -4 2 Q -6 1 -6 -1" fill="none" stroke="#5B0C4E" strokeWidth="1.2"/>
                </g>
                <text x="387" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Teams</text>
            </g>

            {/* Bottom-right: Analytics */}
            <g filter="url(#cardShadow)">
                <rect x="328" y="245" width="96" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="336" y="255" width="20" height="20" rx="5" fill="#fdf0f0"/>
                {/* Bar chart icon */}
                <g transform="translate(346, 268)">
                    <rect x="-6" y="-2" width="2.5" height="5" fill="#EA5254"/>
                    <rect x="-1" y="-4" width="2.5" height="7" fill="#EA5254"/>
                    <rect x="4" y="-1" width="2.5" height="4" fill="#EA5254"/>
                </g>
                <text x="392" y="267" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Analytics</text>
            </g>

            {/* Bottom: Schedule */}
            <g filter="url(#cardShadow)">
                <rect x="192" y="302" width="96" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="200" y="312" width="20" height="20" rx="5" fill="#fdf0f0"/>
                {/* Calendar icon */}
                <g transform="translate(210, 325)">
                    <rect x="-6" y="-5" width="12" height="10" rx="1" fill="none" stroke="#EA5254" strokeWidth="1"/>
                    <line x1="-4" y1="-1" x2="4" y2="-1" stroke="#EA5254" strokeWidth="1"/>
                    <line x1="-6" y1="-1" x2="-6" y2="1" stroke="#EA5254" strokeWidth="1"/>
                    <line x1="6" y1="-1" x2="6" y2="1" stroke="#EA5254" strokeWidth="1"/>
                    <circle cx="-2" cy="2" r="1" fill="#EA5254"/>
                    <circle cx="2" cy="2" r="1" fill="#EA5254"/>
                </g>
                <text x="257" y="325" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Schedule</text>
            </g>

            {/* Bottom-left: Projects */}
            <g filter="url(#cardShadow)">
                <rect x="54" y="245" width="94" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="62" y="255" width="20" height="20" rx="5" fill="#f5edf3"/>
                {/* Clipboard/tasks icon */}
                <g transform="translate(72, 268)">
                    <rect x="-5" y="-5" width="10" height="10" rx="1" fill="none" stroke="#5B0C4E" strokeWidth="1"/>
                    <line x1="-3" y1="-2" x2="3" y2="-2" stroke="#5B0C4E" strokeWidth="1"/>
                    <line x1="-2" y1="0" x2="2" y2="0" stroke="#5B0C4E" strokeWidth="0.8"/>
                    <line x1="-2" y1="2" x2="2" y2="2" stroke="#5B0C4E" strokeWidth="0.8"/>
                </g>
                <text x="115" y="267" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Projects</text>
            </g>

            {/* Top-left: Support */}
            <g filter="url(#cardShadow)">
                <rect x="58" y="118" width="90" height="40" rx="10" fill="white" stroke="rgba(91,12,78,0.12)" strokeWidth="1"/>
                <rect x="66" y="128" width="20" height="20" rx="5" fill="#fdf0f0"/>
                {/* Chat/support icon */}
                <g transform="translate(76, 141)">
                    <path d="M -4 -4 L 4 -4 Q 5 -4 5 -3 L 5 2 Q 5 3 4 3 L 2 3 L 1 5 L 1 3 L -4 3 Q -5 3 -5 2 L -5 -3 Q -5 -4 -4 -4" fill="none" stroke="#EA5254" strokeWidth="1.2"/>
                </g>
                <text x="119" y="140" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a2e" fontFamily="sans-serif">Support</text>
            </g>

            {/* ── Animated pulse circles on hub ── */}
            <circle cx="240" cy="200" r="58" fill="none" stroke="rgba(91,12,78,0.2)" strokeWidth="1">
                <animate attributeName="r" values="58;72;58" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="240" cy="200" r="62" fill="none" stroke="rgba(234,82,84,0.15)" strokeWidth="1">
                <animate attributeName="r" values="62;80;62" dur="3s" begin="1s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin="1s" repeatCount="indefinite"/>
            </circle>

            {/* ── Small dots on spokes ── */}
            {[
                [240,122],[317,163],[317,237],
                [240,278],[163,237],[163,163]
            ].map(([cx,cy],i)=>(
                <circle key={i} cx={cx} cy={cy} r="4" fill="white" stroke="rgba(91,12,78,0.3)" strokeWidth="1.5">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin={`${i*0.33}s`} repeatCount="indefinite"/>
                </circle>
            ))}
        </svg>
    </div>
);

const HowItWorks = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(0);

    useParallax(0.3);

    useEffect(() => {
        const t = setInterval(() => setActiveStep(s => (s + 1) % 4), 2800);
        return () => clearInterval(t);
    }, []);

    const steps = [
        { number:"01", title:"Create Your Account", description:"Sign up quickly and securely with email verification. No credit card required to get started.", icon:<HiOutlineUserAdd size={26}/>, highlights:["Free 14-day trial","Email verification","No credit card"], color:"#5B0C4E" },
        { number:"02", title:"Configure Your Workspace", description:"Set team roles, define project structures, and configure workflows to match how your team operates.", icon:<HiOutlineAdjustments size={26}/>, highlights:["Custom roles & permissions","Workspace templates","Flexible workflows"], color:"#7B1E6E" },
        { number:"03", title:"Track Tasks & Projects", description:"Assign tasks, monitor progress, and manage deadlines from your central command dashboard.", icon:<HiOutlineClipboardCheck size={26}/>, highlights:["Real-time updates","Deadline tracking","Team visibility"], color:"#EA5254" },
        { number:"04", title:"Optimize & Scale", description:"Use built-in analytics and reports to make data-driven decisions and grow your operations.", icon:<HiOutlineTrendingUp size={26}/>, highlights:["Advanced analytics","Custom reports","Growth insights"], color:"#c93d3f" },
    ];

    const perks = [
        { icon:<HiOutlineLightningBolt size={19}/>, text:"Up and running in under 2 minutes" },
        { icon:<HiOutlineCheckCircle size={19}/>, text:"No technical knowledge required" },
        { icon:<HiOutlineSparkles size={19}/>, text:"Loved by 50,000+ teams worldwide" },
    ];

    const features = [
        { icon:<HiOutlineShieldCheck size={24}/>, title:"Enterprise-grade security", desc:"SOC 2 Type II compliant with AES-256 encryption. Your data is always protected." },
        { icon:<HiOutlineClock size={24}/>, title:"99.9% uptime SLA", desc:"Built on resilient infrastructure so your team never misses a beat." },
        { icon:<HiOutlineSupport size={24}/>, title:"24/7 dedicated support", desc:"Real humans available around the clock via chat, email, and phone." },
        { icon:<HiOutlineTrendingUp size={24}/>, title:"Scales with your team", desc:"From 2 to 2,000 people — Projina grows as your organisation does." },
    ];

    const faqs = [
        { q:"Do I need a credit card to start?", a:"No. You can sign up and use Projina free for 14 days with no payment details required." },
        { q:"How long does onboarding take?", a:"Most teams are fully operational within 60 seconds of sign-up. Our setup wizard guides you through every step." },
        { q:"Can I migrate data from other tools?", a:"Yes — Projina supports CSV imports and direct integrations with popular tools like Trello, Asana, and Jira." },
        { q:"Is there a limit on team members?", a:"No hard limits. Our plans scale to any team size, from solo founders to enterprise organisations." },
    ];

    return (
        <div className="hiw-root">
            <div className="hiw-blob hiw-blob-1"/>
            <div className="hiw-blob hiw-blob-2"/>

            {/* HERO */}
            <section className="hiw-hero" data-anim="fade-down">
                <div className="hiw-hero-inner">
                    <div className="hiw-hero-left">
                        <span className="hiw-badge">How it works</span>
                        <h1 className="hiw-hero-title">
                            Built for how<br/>
                            <span className="hiw-accent">teams actually</span><br/>
                            work
                        </h1>
                        <p className="hiw-hero-sub">A simplified workflow designed around your operations — from first sign-in to full-scale growth.</p>
                        <div className="hiw-perks">
                            {perks.map((p,i)=>(
                                <div className="hiw-perk" key={i}>
                                    <span className="hiw-perk-icon">{p.icon}</span>
                                    <span>{p.text}</span>
                                </div>
                            ))}
                        </div>
                        <button className="hiw-cta" onClick={()=>navigate('/#features')}>
                            Explore all features <HiOutlineArrowRight size={17}/>
                        </button>
                    </div>
                    <div className="hiw-hero-right">
                        <div className="hiw-img-frame">
                            <img src={workflowImage} alt="Projina task board" className="hiw-hero-img"/>
                            <div className="hiw-img-pill hiw-pill-1"><span className="hiw-pill-dot"/>Live collaboration</div>
                            <div className="hiw-img-pill hiw-pill-2"><HiOutlineTrendingUp size={13}/>+38% productivity</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANIMATED TIMELINE */}
            <section className="hiw-timeline-section parallax" data-anim="fade-up">
                <div className="hiw-timeline-inner">
                    <div className="hiw-section-label"><span>Simple process</span></div>
                    <h2 className="hiw-section-title"><TypingText text="How It Works" speed={100} /></h2>
                    <p className="hiw-section-sub">Four simple steps to full operational clarity.</p>

                    <div className="hiw-timeline-track">
                        <div className="hiw-timeline-line">
                            <div className="hiw-timeline-progress" style={{width:`${(activeStep/3)*100}%`}}/>
                        </div>
                        {steps.map((step,i)=>(
                            <button key={i}
                                className={`hiw-timeline-node ${activeStep===i?'hiw-node-active':''} ${activeStep>i?'hiw-node-done':''}`}
                                onClick={()=>setActiveStep(i)}
                            >
                                <span className="hiw-node-number">{step.number}</span>
                                {activeStep===i && <span className="hiw-node-ring"/>}
                            </button>
                        ))}
                    </div>

                    <div className="hiw-timeline-detail">
                        {steps.map((step,i)=>(
                            <div key={i} className={`hiw-timeline-card ${activeStep===i?'hiw-tcard-active':''}`}>
                                <div className="hiw-tcard-icon" style={{background:`${step.color}18`,color:step.color}}>{step.icon}</div>
                                <div className="hiw-tcard-body">
                                    <h3 className="hiw-tcard-title">{step.title}</h3>
                                    <p className="hiw-tcard-desc">{step.description}</p>
                                    <ul className="hiw-tcard-highlights">
                                        {step.highlights.map((h,j)=>(
                                            <li key={j}><HiOutlineCheckCircle size={14} style={{color:step.color}}/><span>{h}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="hiw-timeline-labels">
                        {steps.map((step,i)=>(
                            <button key={i} className={`hiw-tl-label ${activeStep===i?'hiw-tl-active':''}`} onClick={()=>setActiveStep(i)}>
                                {step.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ECOSYSTEM — inline SVG illustration */}
            <section className="hiw-ecosystem-section parallax" data-anim="fade-up">
                <div className="hiw-ecosystem-inner">
                    <div className="hiw-section-label"><span>Platform ecosystem</span></div>
                    <h2 className="hiw-section-title">Everything connected. One platform.</h2>
                    <p className="hiw-section-sub">Projina sits at the centre of your operations — connecting every tool, team, and workflow in one unified hub.</p>

                    <div className="hiw-ecosystem-layout">
                        <div className="hiw-ecosystem-img-area">
                            <EcosystemIllustration/>
                        </div>
                        <div className="hiw-ecosystem-features">
                            {[
                                { icon:<HiOutlineCurrencyDollar size={21}/>, title:"Finance & Payroll", desc:"Track income, expenses, and salary all in one place." },
                                { icon:<HiOutlineUserGroup size={21}/>, title:"Team Management", desc:"Roles, permissions, and collaboration tools built in." },
                                { icon:<HiOutlineClipboardCheck size={21}/>, title:"Project Tracking", desc:"Tasks, milestones, and deadlines — always visible." },
                                { icon:<HiOutlineChartBar size={21}/>, title:"Analytics & Reports", desc:"Data-driven insights delivered straight to your dashboard." },
                            ].map((f,i)=>(
                                <div className="hiw-eco-feature" key={i}>
                                    <div className="hiw-eco-feature-icon">{f.icon}</div>
                                    <div>
                                        <h4 className="hiw-eco-feature-title">{f.title}</h4>
                                        <p className="hiw-eco-feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* STEPS GRID */}
            <section className="hiw-steps-section">
                <div className="hiw-steps-inner">
                    <div className="hiw-section-label"><span>The process</span></div>
                    <h2 className="hiw-section-title">Get started in four steps</h2>
                    <p className="hiw-section-sub">Everything is designed to be intuitive — no manuals, no onboarding calls needed.</p>
                    <div className="hiw-steps-grid">
                        {steps.map((step,index)=>(
                            <div className="hiw-step-card" key={index}>
                                <div className="hiw-step-top">
                                    <span className="hiw-step-number">{step.number}</span>
                                    <div className="hiw-step-icon" style={{background:`${step.color}15`,color:step.color}}>{step.icon}</div>
                                </div>
                                <h3 className="hiw-step-title">{step.title}</h3>
                                <p className="hiw-step-desc">{step.description}</p>
                                <ul className="hiw-step-highlights">
                                    {step.highlights.map((h,i)=>(
                                        <li key={i}><HiOutlineCheckCircle size={14} style={{color:step.color}}/><span>{h}</span></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PROJINA */}
            <section className="hiw-features-section">
                <div className="hiw-features-inner">
                    <div className="hiw-section-label"><span>Why Projina</span></div>
                    <h2 className="hiw-section-title">Everything your team needs to thrive</h2>
                    <p className="hiw-section-sub">Reliability, security, and scale — built into every layer of the platform.</p>
                    <div className="hiw-features-grid">
                        {features.map((f,i)=>(
                            <div className="hiw-feature-card" key={i}>
                                <div className="hiw-feature-icon">{f.icon}</div>
                                <h3 className="hiw-feature-title">{f.title}</h3>
                                <p className="hiw-feature-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="hiw-faq-section">
                <div className="hiw-faq-inner">
                    <div className="hiw-section-label"><span>FAQ</span></div>
                    <h2 className="hiw-section-title">Common questions</h2>
                    <p className="hiw-section-sub" style={{marginBottom:36}}>Everything you need to know before you get started.</p>
                    <div className="hiw-faq-list">
                        {faqs.map((faq,i)=>(
                            <div key={i} className={`hiw-faq-item ${openFaq===i?'hiw-faq-open':''}`} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                                <div className="hiw-faq-row">
                                    <span className="hiw-faq-q">{faq.q}</span>
                                    <span className="hiw-faq-chevron">{openFaq===i?<HiOutlineChevronUp size={17}/>:<HiOutlineChevronDown size={17}/>}</span>
                                </div>
                                {openFaq===i && <p className="hiw-faq-a">{faq.a}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="hiw-cta-banner">
                <div className="hiw-cta-overlay"/>
                <div className="hiw-cta-inner">
                    <div className="hiw-cta-text">
                        <h2>Ready to transform the way your team works?</h2>
                        <p>Join thousands of teams that trust Projina to deliver projects on time, every time.</p>
                    </div>
                    <div className="hiw-cta-buttons">
                        <button className="hiw-btn-primary" onClick={()=>navigate('/signup')}>Start for free <HiOutlineArrowRight size={17}/></button>
                        <button className="hiw-btn-secondary" onClick={()=>navigate('/#features')}>See all features</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;