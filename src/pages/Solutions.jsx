import React, { useState } from "react";
import '../styles/solutionStyles.css'
import dashboard from '../assets/solutionDashboard.png'

import styles from '../styles/landingStyles.module.css'
import sol1 from '../assets/sol1.jpg'
import sol2 from '../assets/sol2.png'
import sol3 from '../assets/sol3.png'
import sol4 from '../assets/sol4.png'
import sworking from '../assets/sworking.jpg'


const Solutions = () => {

    const data = [
        {   
            question:'What can I do with Projina?',
            answer:'Sign up in minutes with no lengthy setup. You’ll get immediate access to your dashboard and can start managing your business right away.'
        },
        {
            question:'Is my data safe?',
            answer:'Yes. We use bank-grade encryption, secure APIs, and industry best practices to ensure your company’s information is always protected.'
        },
        {
            question:'How do I get started?',
            answer:'Sign up in minutes with no lengthy setup. You’ll get immediate access to your dashboard and can start managing your business right away.'
        },
        {
            question:'Is Projina mobile-friendly?',
            answer:'Projina is currently optimized for desktop use, giving you a full-featured and powerful workspace to manage your business efficiently.'
        },
        {
            question:'Is Projina right for my business?',
            answer:'Whether you’re a startup, a growing company, or an established enterprise, Projina helps you manage operations efficiently and scale with ease.'
        },
        {
            question:'Can my team collaborate on Projina?',
            answer:'Absolutely. Projina allows multiple team members to access, update, and work on shared projects, schedules, and reports in real time.'
        }
    ]

    return(
        <React.Fragment>
            <div className="solution-bg">
                <div className="solution-container" >
                    <div >
                        <div className="solution-header">
                            <span className="solution-title">All-in-one Company Management  for <span style={{color:'#EA5254'}} >Today's Companies</span> </span>
                            <span>
                                <button className="btn-color" >Sign up for free</button> &nbsp;&nbsp;&nbsp;
                                <button className="btn">Contact Sales</button>
                            </span>
                        </div>

                        <div className={styles.dashboard}>
                            <img src={dashboard} width={'100%'} />
                        </div>

                    </div>

                    <div style={{textAlign:'center' ,padding:10}}>
                        <span className=" solution-title">Tailored <span style={{color:'#EA5254'}} >Solutions</span> for Every <br/>Business Size</span>
                        <p>Whether you’re just starting out or running a large enterprise, Projina equips you with powerful tools to manage finances, teams, projects, and schedules — keeping operations smooth and growth on track.</p>
                    </div>

                    <div className="sBlocks" >
                        <div className="sBlock">
                            <div> <img src={sol1} className="sBlock-img" /> </div>
                            <div className="sBlock-text" >
                                <h3>Early-Stage & Solo Businesses</h3>
                                <p>Get up and running quickly with built-in project tracking, easy finance tools, and simple scheduling features. Everything you need to manage your company from one dashboard.</p>
                                <ul>
                                    <li>Mobile-first project & task management</li>
                                    <li>Automated payroll and expense tracking</li>
                                    <li>Smart reminders for deadlines & meetings</li>
                                    <li>Team communication and collaboration tools</li>
                                    <li>Clear, easy-to-read financial summaries</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sBlock">
                            <div className="sBlock-text">
                                <h3>Projina Small Business Toolkit</h3>
                                <p>Simplify your operations with smart payment tracking, automated logistics, and live sales insights.</p>
                                <ul>
                                    <li>Manage inventory across multiple locations</li>
                                    <li>Generate invoices & receipts automatically</li>
                                    <li>Accept payments & handle settlements seamlessly</li>
                                    <li>Schedule deliveries effortlessly</li>
                                    <li>Track daily transactions in real time</li>
                                </ul>
                            </div>
                            <div> <img src={sol2} className="sBlock-img" /> </div>
                        </div>

                        <div className="sBlock">
                            <div> <img src={sol3} className="sBlock-img"/> </div>
                            <div className="sBlock-text">
                                <h3>Scaling Teams & Growing Your Business</h3>
                                <p>Projina grows with you — manage your team, track expenses, and expand operations smoothly without the admin headaches.</p>
                                <ul>
                                    <li>Role-based access & staff permissions</li>
                                    <li>Sync products across web, social, and retail channels</li>
                                    <li>Branch-level reporting for complete visibility</li>
                                    <li>Weekly & monthly financial insights</li>
                                    <li>Bulk product uploads & catalog management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="sBlock">
                            <div className="sBlock-text">
                                <h3>Enterprise & High-Volume Commerce</h3>
                                <p>For large brands, manufacturers, and distributors — Projina centralizes finance, logistics, and customer engagement in one powerful platform.</p>
                                <ul>
                                    <li>Real-time reconciliation across all accounts</li>
                                    <li>Multi-department access with role-based permissions</li>
                                    <li>AI-powered forecasts for demand and cash flow</li>
                                    <li>Bulk invoicing & automated payouts</li>
                                    <li>API access for seamless integration with internal systems</li>
                                </ul>
                            </div>
                            <div> <img src={sol4} className="sBlock-img"/> </div>
                        </div>
                    </div>

                    <span style={{fontWeight:400}} className="faq-title">
                        Frequently Asked Questions
                    </span>

                    <div className="faq-container">
                        {
                            data.map((faq ,index) => <FaqItem key={index} data={faq} />)
                        }
                    </div>

                    <div className={styles.tabContent}>
                        <div>
                            <img src={sworking} className={styles.tabImage} style={{objectFit:'cover'}}/>
                        </div>
                        <div style={{width:350 ,fontSize:'large'}}>
                            <p className={styles.tabText} >"I no longer waste time juggling spreadsheets and chasing updates everything from finances to schedules runs smoothly."</p>
                            <span style={{fontSize:'small'}}>Mr. Yuven CEO Creastlancing.ltd</span><br/><br/>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}


export default Solutions


const FaqItem = ({data}) => {
    const [open ,setOpen] = useState(false)
    return(
        <React.Fragment>
            <div className="faq">
                <div className="faq-header">
                    <b className="faq-question">{data.question}</b>
                    <span className={open?'faq-arrow-down faq-arrow-active':"faq-arrow-down"} onClick={()=>setOpen(prev => !prev)}>🔽</span>
                </div>
                <span className={open?'faq-answer faq-answer-active':"faq-answer"}>{data.answer}</span>
            </div>
        </React.Fragment>
    )
}