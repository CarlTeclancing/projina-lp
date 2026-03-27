import React from "react";
import '../styles/aboutStyles.css'
import styles from '../styles/landingStyles.module.css'
import '../styles/solutionStyles.css'

import aboutImg1 from '../assets/aboutImg1.jpg'
import aboutImg2 from '../assets/aboutImg2.jpg'

import Product from "./Product";

const About = () => {
    return(
        <React.Fragment>
            <div className="about-container">

                <span className="about-title">About Us</span>
                <div style={{textAlign:'center'}}>Projina is an all-in-one company management system built to simplify operations and empower businesses of every size.</div>

                <div className={styles.dashboardScreenshot}>
                    <img src={aboutImg1} alt="Dashboard Screenshot" className={styles.dashboardScreenshotImg} />
                </div>

                <div style={{backgroundColor:'white' ,borderRadius:10 ,padding:30}} >
                    <div style={{textAlign:'center'}}>
                        <p>We understand the challenges that come with running a business  scattered spreadsheets, disconnected tools, and time lost chasing updates. Projina brings everything together in one powerful platform, giving you clarity, control, and confidence.</p>
                    <strong>With Projina, you can:</strong>
                    </div>

                    <div>
                        {/* <Product/> */}
                    </div>
                </div>

                <div className="sBlocks">
                    <div className="sBlock">
                        <div className="sBlock-text" >
                            <h3>Our Story</h3>
                            <p style={{fontSize:'smaller'}}>Every big idea starts with a problem. For us, it was the frustration of juggling multiple tools just to keep a business running—spreadsheets for finance, apps for tasks, emails for updates, and endless meetings to stay aligned. It was time-consuming, costly, and exhausting. <br/> That's why we built Projina: an all-in-one platform designed to simplify how businesses operate. From finance to team management and project tracking, we wanted everything under one roof—clean, connected, and easy to use. <br/> What started as a small idea between problem-solvers has grown into a platform trusted by businesses ready to scale smarter and faster. And this is just the beginning.</p>
                        </div>
                        <div> <img src={aboutImg2} className="sBlock-img" /> </div>
                    </div>
                </div>

                <h2 className="about-title smaller-title">What Founders Are Saying</h2>

                <div className="testimonials-container">
                    <div className="testimonials-slider">
                        {[
                            {
                                name: 'John Anderson',
                                title: 'Tech Startup Founder',
                                quote: 'Projina transformed how we manage our operations. The dashboard is intuitive and saves us hours every week.',
                                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Sarah Mitchell',
                                title: 'E-commerce Owner',
                                quote: 'From invoicing to team scheduling, everything is streamlined. Highly recommend for growing businesses.',
                                image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Ryan Lee',
                                title: 'Consulting Firm CEO',
                                quote: 'The analytics features give us real insights into our performance. Projina is a game-changer.',
                                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Emma Kim',
                                title: 'Non-profit Director',
                                quote: 'Managing volunteers and projects has never been easier. Projina adapts to our unique needs.',
                                image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Michael Garcia',
                                title: 'Manufacturing Manager',
                                quote: 'Inventory tracking and payroll are now automated. Our efficiency has doubled.',
                                image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80'
                            }
                        ].concat([
                            {
                                name: 'John Anderson',
                                title: 'Tech Startup Founder',
                                quote: 'Projina transformed how we manage our operations. The dashboard is intuitive and saves us hours every week.',
                                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Sarah Mitchell',
                                title: 'E-commerce Owner',
                                quote: 'From invoicing to team scheduling, everything is streamlined. Highly recommend for growing businesses.',
                                image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Ryan Lee',
                                title: 'Consulting Firm CEO',
                                quote: 'The analytics features give us real insights into our performance. Projina is a game-changer.',
                                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Emma Kim',
                                title: 'Non-profit Director',
                                quote: 'Managing volunteers and projects has never been easier. Projina adapts to our unique needs.',
                                image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=100&q=80'
                            },
                            {
                                name: 'Michael Garcia',
                                title: 'Manufacturing Manager',
                                quote: 'Inventory tracking and payroll are now automated. Our efficiency has doubled.',
                                image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=100&q=80'
                            }
                        ]).map((item, index) => (
                            <div className="about-block" key={index}>
                                <div className='about-block-header'>
                                    <img src={item.image} alt={item.name} className="profile-img" />
                                    <div className="about-block-profile">
                                        <b>{item.name}</b>
                                        <span style={{fontSize:'small'}}>{item.title}</span>
                                    </div>
                                </div>
                                {/* ★ star row — only addition to this card */}
                                <div className="about-block-stars">
                                    {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                                </div>
                                <div>"{item.quote}"</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About