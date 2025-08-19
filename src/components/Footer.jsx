import React from "react";
import '../styles/footerStyles.css'
import styles from '../styles/landingStyles.module.css'

import iconWhite from '../assets/icon-white.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import dashboard from '../assets/dashboard.png'

const Footer = () =>{
    return(
        <React.Fragment>

            <div className={styles.trySection}>
                <h1>Try us for <span style={{color:'#EA5254'}}>Free</span></h1>
            
                <div style={{display:'flex' ,gap:20}}>
                    <button style={{border:'solid 1px rgb(175,175,175)'}}>Contact Sales</button>
                    <button style={{color:'white' ,backgroundColor:'#5B0C4E'}} >Sign up for free</button>
                </div>
            </div>

            <div className={styles.dashboard} style={{height:250}}>
                <img src={dashboard}  />
            </div>


            <div className="footer">
                
                <div className="footer-container">
                    <div className="footer-block first-block">
                        <span className="footer-block-title footer-logo" >
                            <img src={iconWhite} width={'42px'} height={'42px'} /> 
                            <span className="footer-company"> Pro<b style={{color:'white'}}>jina</b> </span>  
                        </span>
                        <span> One Platform. Every Tool You Need. Projina helps you manage better, work faster, and scale smarter — with tools for finance, employee management, projects, and schedules, built for modern businesses. </span>
                        <span className='social'>
                            <img src={linkedin}  width={35} height={35} alt="linkedin" />
                            <img src={facebook} width={35} height={35} alt="facebook" />
                            <img src={instagram} width={35} height={35} alt="instagram" />
                        </span>
                    </div>

                    <div style={{display:'flex' ,flexDirection:'column'}} >
                        <div className="footer-container-sub1">
                            <div className="footer-block">
                                <span className="footer-block-title">Quick Links</span>
                                    Home <br/>
                                    Features <br/>
                                    Plan & Pricing
                            </div>

                            <div className="footer-block">
                                <span className="footer-block-title">Address:</span>
                                <span className="footer-block-title" style={{lineHeight:'normal'}}>Projina company <br/> management system</span>
                                
                                Yaounde Cameroun<br/>
                                Tel: (+237) 6xxxxxxxx
                            </div>

                            <div className="footer-block">
                                <span className="footer-block-title">Resources</span>
                                Help Center<br/>
                                How it works<br/>
                                Business
                            </div>

                            <div className="footer-block">
                                <span className="footer-block-title">Company</span>
                                About Us<br/>
                                Contact Us<br/>
                                Career
                            </div>
                        </div>

                        <div style={{padding:20 ,fontSize:'smaller'}}>
                            <span className="footer-block-title">News Letter</span>
                            <p>Stay updated with the latest Projina features, <br/>
                            product upgrades, and useful resources  no spam, ever.<br/>
                             You can unsubscribe anytime.</p>
                            <input type="text" className="input" placeholder="Enter your email address"/> &nbsp;&nbsp;&nbsp; <button>Subscribe</button>
                        </div>

                    </div>



                </div>

                <div className="footer-end">
                    <div className="footer-end-left">
                        <span>Quick links</span>
                        <span>Privacy Policy</span>
                        <span>Legal Notice</span>
                        <span>Cookie Setting</span>
                    </div>
                    <div>&copy; 2025 - Projina Company Management System</div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Footer