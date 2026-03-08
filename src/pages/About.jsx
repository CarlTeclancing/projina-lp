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

                <div className={styles.dashboard}>
                    <img src={aboutImg1}  />
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
                            <p style={{fontSize:'smaller'}}>Every big idea starts with a problem. For us, it was the frustration of juggling multiple tools just to keep a business running—spreadsheets for finance, apps for tasks, emails for updates, and endless meetings to stay aligned. It was time-consuming, costly, and exhausting. <br/> That’s why we built Projina: an all-in-one platform designed to simplify how businesses operate. From finance to team management and project tracking, we wanted everything under one roof—clean, connected, and easy to use. <br/> What started as a small idea between problem-solvers has grown into a platform trusted by businesses ready to scale smarter and faster. And this is just the beginning.</p>
                        </div>
                        <div> <img src={aboutImg2} className="sBlock-img" /> </div>
                    </div>
                </div>

                <h2 className="about-title smaller-title">What Founders Are Saying</h2>

                <div className="about-blocks">
                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                    <div className="about-block">
                        <div className='about-block-header'>
                            <span className="pp"></span>
                            <div className="about-block-profile">
                                <b>Tolu Samuel A.</b>
                                <span style={{fontSize:'small'}}>Retail Business Owner</span>
                            </div>
                        </div>
                        <div>
                            I can now track finances, employees, and schedules without stress  all in one place. It’s like having a full operations team at my side.”
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default About