import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/landingStyles.module.css'

import dashboard from './assets/dashboard/dashboardTeams.png'
import working from './assets/working.png'
import sec1Img from './assets/sec1-img.jpg'
import sec2Img from './assets/sec2-img.jpg'
import slider1 from './assets/slider1.jpg'
import slider2 from './assets/slider2.jpg'

import arrowBack from './assets/arrow-back.png'
import Services from './components/Services'

import {
    HiOutlineCurrencyDollar,
    HiOutlineUserGroup,
    HiOutlineViewBoards,
    HiOutlineCalendar,
} from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'

const LandingPage = () => {

    const [activeBar, setActiveBar] = useState('1')

    return (
        <React.Fragment>

            {/* ── Hero desc ── */}
            <div className={styles.desc}>

                {/* Badge — trophy + text perfectly inline */}
                <div>
                    <span className={styles.ovals} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        {/* Trophy uses same purple as other icons */}
                        <GiTrophy size={17} style={{ color: '#5B0C4E', flexShrink: 0 }} />
                        Best Company Management
                    </span>
                </div>

                <div className={styles.moto1}>
                    <span>Make Company</span>
                    <span> Management <span style={{ color: '#EA5254' }}>Effortless</span></span>
                </div>

                <div className={styles.moto2}>Simplify Operations, Amplify Growth</div>

                <div>
                    <button className={styles.registerBtn}>
                        Sign up for free <img src={arrowBack} alt="arrow" />
                    </button>
                </div>

                {/* Feature pills — icons vertically centred with text */}
                <div className={styles.reasons}>
                    <span className={styles.ovals} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <HiOutlineCurrencyDollar size={17} style={{ color: '#5B0C4E', flexShrink: 0 }} />
                        Finance
                    </span>
                    <span className={styles.ovals} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <HiOutlineUserGroup size={17} style={{ color: '#5B0C4E', flexShrink: 0 }} />
                        Employee
                    </span>
                    <span className={styles.ovals} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <HiOutlineViewBoards size={17} style={{ color: '#5B0C4E', flexShrink: 0 }} />
                        Projects
                    </span>
                    <span className={styles.ovals} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <HiOutlineCalendar size={17} style={{ color: '#5B0C4E', flexShrink: 0 }} />
                        Schedule
                    </span>
                </div>
            </div>

            {/* ── Dashboard screenshot ── */}
            <div className={styles.dashboardScreenshot}>
                <img src={dashboard} alt="Dashboard Screenshot" className={styles.dashboardScreenshotImg} />
            </div>

            {/* ── Services ── */}
            <div id="features" className={styles.servicesContainer}>
                <div className={styles.serviceTitleContainer}>
                    <div className={styles.serviceHeaderTitle}>
                        One <span style={{ color: '#EA5254' }}>Platform.</span> Every Tool You Need
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        With Projina, you manage better, work faster, and grow smarter using tools for
                        finance, employees, projects, and schedules — all tailored for today's businesses.
                    </div>
                </div>
                <Services />
            </div>

            {/* ── Section 1 ── */}
            <div className={styles.section1}>
                <div>
                    <img src={working} style={{ objectFit: 'cover' }} className={styles.section1Image} alt="Team working" />
                </div>

                <div className={styles.section1Block}>
                    <div style={{ width: '325px' }}>
                        <h3>Finance Tracking & Categorizing</h3>
                        <p>Track your company's income and expenses with automatic categorization by department,
                            project, or expense type. Get real-time insights to improve budgeting and cut unnecessary costs.</p>
                    </div>
                    <div>
                        <img src={sec2Img} style={{ objectFit: 'contain' }} width="400px" height="350px" alt="Finance section" />
                    </div>
                </div>

                <div className={styles.section1Block}>
                    <div style={{ width: '325px' }}>
                        <h3>Project & Task Planning</h3>
                        <p>Seamlessly organize projects, assign tasks, and set clear deadlines.
                            Keep teams aligned and projects progressing with performance milestones.</p>
                    </div>
                    <div>
                        <img src={sec1Img} style={{ objectFit: 'contain' }} width="400px" height="350px" alt="Projects section" />
                    </div>
                </div>

                <div className={styles.subBlocks}>
                    <div style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                        <h3>Employee Payroll & Benefits Management</h3>
                        <p>Easily manage staff salaries, allowances, and deductions. Process payroll quickly
                            and accurately with automated reports — no manual errors.</p>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                        <h3>Performance & Growth Analytics</h3>
                        <p>Monitor key business metrics to evaluate how projects, teams, and departments
                            are performing. Get actionable insights to drive improvement.</p>
                    </div>
                </div>
            </div>

            {/* ── Section 2 ── */}
            <div className={styles.section2}>
                <div>
                    <h1 className={styles.section2Title}>Designed for the real needs of modern businesses.</h1>
                </div>
                <div className={styles.section2BlockContainer}>
                    <div className={styles.section2Block}>
                        <h5>Automated Workflows</h5>
                        <span style={{ color: '#EA5254', fontSize: 30, fontWeight: 600 }}>500hours</span>
                        <p>Saved per month with automated project tracking, scheduling, and reporting.</p>
                    </div>
                    <div className={styles.section2Block}>
                        <h5>Seamless Payroll & Finance</h5>
                        <span style={{ color: '#EA5254', fontSize: 30, fontWeight: 600 }}>99.00%</span>
                        <p>In salary processing, expense tracking, and budget management.</p>
                    </div>
                    <div className={styles.section2Block}>
                        <h5>Quick Setup</h5>
                        <span style={{ color: '#EA5254', fontSize: 30, fontWeight: 600 }}>60seconds</span>
                        <p>To onboard your team and start managing projects, employees, and finances.</p>
                    </div>
                </div>
                <div>
                    <video
                        controls
                        className={styles.section2Video}
                    >
                        <source
                            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* ── Case studies tab ── */}
            <div>
                <div className={styles.tabContainer}>
                    <div
                        className={activeBar === '1' ? styles.tabBtnActive : styles.tabBtn}
                        onClick={() => setActiveBar('1')}
                    >
                        Crestlancing Ltd
                    </div>
                    <div
                        className={activeBar === '2' ? styles.tabBtnActive : styles.tabBtn}
                        onClick={() => setActiveBar('2')}
                    >
                        Nephus
                    </div>
                </div>

                <div className={styles.tabContent}>
                    <div>
                        <img
                            src={activeBar === '1' ? slider1 : slider2}
                            className={styles.tabImage}
                            style={{ objectFit: 'cover' }}
                            alt="Case study"
                        />
                    </div>
                    <div style={{ width: 350, fontSize: 'large' }}>
                        {activeBar === '1' ? (
                            <>
                                <p className={styles.tabText}>
                                    "I no longer waste time juggling spreadsheets and chasing updates —
                                    everything from finances to schedules runs smoothly."
                                </p>
                                <span style={{ fontSize: 'small' }}>Grace N. – Operations Manager, BrightPath Solutions</span>
                                <br /><br />
                                <button className={styles.registerBtn}>
                                    Read study case <img src={arrowBack} alt="arrow" />
                                </button>
                            </>
                        ) : (
                            <>
                                <p className={styles.tabText}>
                                    "With Projina handling our projects and schedules, we're way faster.
                                    It's like having an extra operations team working 24/7."
                                </p>
                                <span style={{ fontSize: 'small' }}>Amanda K. – Founder, Apex Builders Ltd.</span>
                                <br /><br />
                                <button className={styles.registerBtn}>
                                    Read study case <img src={arrowBack} alt="arrow" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default LandingPage