import React from 'react';
import '../styles/pricingStyles.css';
import Services from '../components/Services';
import { useNavigate } from 'react-router-dom';
import { GiImperialCrown } from 'react-icons/gi';
import TypingText from '../components/TypingText';
import useParallax from '../hooks/useParallax';

/*
 * IMPORTANT:
 * The plan slugs below are kept from the original pricing.jsx so the existing
 * registration URLs do not change. Confirm that the registration/backend code
 * maps these legacy slugs to the displayed plans:
 *   starter -> Free, growth -> Pro, enterprise -> Master, custom -> Enterprise.
 * If the backend uses different plan IDs, update each `slug` to match it.
 *
 * This component only displays limits. The backend must enforce them too.
 */
const plans = [
    {
        name: 'Free',
        slug: 'starter',
        description: 'Start managing your company at no cost with the core workspace.',
        price: '0',
        buttonText: 'Start Free',
        buttonClass: 'btn',
        features: [
            'Up to 3 users',
            'Up to 3 projects',
            'Up to 4 tasks per day',
            'Up to 10 files',
            'Up to 3 clients',
            'Up to 3 invoices',
            'AI Assistant not included',
            'SMS automation not included',
        ],
    },
    {
        name: 'Pro',
        slug: 'growth',
        description: 'More capacity and automation for growing teams.',
        price: '15,000',
        buttonText: 'Choose Pro',
        buttonClass: 'btn-color',
        featured: true,
        features: [
            'Up to 6 users',
            'Up to 6 projects per month',
            'Up to 6 clients per month',
            'Up to 6 invoices per month',
            'File storage up to 1 GB',
            'Unlimited tasks per day',
            '300 SMS per month',
            'Automation engine',
            'Attendance tracking',
            'Invoice PDF download',
            'Private workspace',
            'AI Assistant and Sentinel are not included',
        ],
    },
    {
        name: 'Master',
        slug: 'enterprise',
        description: 'Higher capacity and AI tools for teams running more of their operations in Projina.',
        price: '30,000',
        buttonText: 'Choose Master',
        buttonClass: 'btn',
        features: [
            'Up to 12 users',
            'Up to 12 projects per month',
            'Up to 12 clients per month',
            'Up to 12 invoices per month',
            'File storage up to 3 GB',
            'Unlimited tasks per day',
            'AI Assistant with up to 5,000 requests per month',
            '1,500 SMS per month',
            'Automation engine',
            'Attendance tracking',
            'Invoice PDF download',
            'Private workspace',
        ],
    },
    {
        name: 'Enterprise',
        slug: 'custom',
        description: 'High-volume operations with the full Projina feature set.',
        price: '50,000',
        buttonText: 'Choose Enterprise',
        buttonClass: 'btn-color',
        features: [
            'Unlimited users',
            'Unlimited projects',
            'Unlimited clients',
            'Unlimited invoices',
            'Unlimited tasks per day',
            'File storage up to 5 GB',
            'AI Assistant with up to 20,000 requests per month',
            'Sentinel agent',
            '5,000 SMS per month',
            'Automation engine',
            'Attendance tracking',
            'Invoice PDF download',
            'Private workspace',
        ],
    },
];

const Pricing = () => {
    const navigate = useNavigate();
    useParallax(0.2);

    const handleGetStarted = () => {
        window.location.href = 'https://crms.projina.top/public/register';
    };

    return (
        <React.Fragment>
            <div className="pricing-bg">
                <div className="pricing-container">
                    <div className="pricing-header" data-anim="fade-up">
                        <span className="pricing-title">
                            <TypingText text="Pricing" speed={90} />{' '}
                            <TypingText text="Plans" speed={90} delay={700} />
                        </span>
                        <div>
                            Manage your clients, projects, tasks, meetings, files, inventory, finances, and more in one place.
                        </div>
                        <span
                            style={{
                                display: 'inline-flex',
                                gap: '12px',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            <button className="btn-color" onClick={handleGetStarted}>
                                Sign up for free
                            </button>
                            <button className="btn" onClick={() => navigate('/contact-us')}>
                                Contact sales
                            </button>
                        </span>
                    </div>

                    <div className="pricings parallax" data-anim="slide-up">
                        {plans.map((plan, index) => {
                            const cardClass = [
                                'pricing-block',
                                plan.featured ? 'growth-block' : '',
                                index === 3 ? 'custom-pricing-block' : '',
                            ]
                                .filter(Boolean)
                                .join(' ');

                            return (
                                <div className={cardClass} data-anim="fade-up" key={plan.slug}>
                                    <h3
                                        style={
                                            plan.featured
                                                ? {
                                                      display: 'flex',
                                                      justifyContent: 'space-between',
                                                      alignItems: 'center',
                                                  }
                                                : undefined
                                        }
                                    >
                                        <span>{plan.name}</span>
                                        {plan.featured && (
                                            <span className="most-popular-badge">
                                                <GiImperialCrown
                                                    size={13}
                                                    style={{ color: '#FFD700', flexShrink: 0 }}
                                                />
                                                Most Popular
                                            </span>
                                        )}
                                    </h3>

                                    <span style={{ color: 'black' }}>{plan.description}</span>

                                    <div className="price">
                                        <span style={{ fontSize: '14px' }}>XAF</span>
                                        <span
                                            style={{
                                                fontSize: '40px',
                                                fontWeight: '600',
                                                color: '#5B0C4E',
                                            }}
                                        >
                                            {plan.price}
                                        </span>
                                        <span>/ 30 days</span>
                                    </div>

                                    <button
                                        className={plan.buttonClass}
                                        onClick={() => {
                                            window.location.href = `https://crms.projina.top/public/register?plan=${plan.slug}`;
                                        }}
                                    >
                                        {plan.buttonText}
                                    </button>

                                    <ul>
                                        <b>Plan includes:</b>
                                        {plan.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <Services />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Pricing;
