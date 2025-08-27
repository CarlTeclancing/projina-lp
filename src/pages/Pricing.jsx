import React from "react";
import '../styles/pricingStyles.css'
import Services from "../components/Services";
import check from '../assets/circleCheck.png'
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate()
    return(
        <React.Fragment>
            <div className="pricing-bg" >
                <div className="pricing-container" >
                    <div className="pricing-header">
                        <span className="pricing-title">Pricing<span style={{color:'#5B0C4E'}} >Plans</span></span>
                        <div>You can monitor all your clients, projects, task, schedule meetings,  distribute files and manage inventory,finances and more in one place.</div>
                        <span>
                            <button className="btn-color">Sign up for free</button>&nbsp;&nbsp;&nbsp;
                            <button className="btn" onClick={()=>navigate("/contact-us")} >Contact sales</button>
                        </span>
                    </div>

                    <div className="pricings">
                        <div className="pricing-block" >
                            <h3>Starter</h3>
                            <span style={{color:'black'}}>Perfect for solo founders and small freelancers <br/> who want to mange clients and projects.</span>
                            <div className="price">
                                <span>0.00</span>
                                <span>/month</span>
                            </div>
                            <button className="btn" > Get Started </button>
                            <ul >
                                <b>Features</b>
                                <li>Add up to 3 users</li>
                                <li>Up to 5 clients every month</li>
                                <li>up to 5 projects every month</li>
                                <li>File storage up to 1GB</li>
                                <li>No message history after 30 days</li>
                                <li>Unlimited meetings</li>
                                <li>5 Invoices per month</li>
                                <li>Manage finances</li>
                                <li>Inventory management upto 10 products</li>
                                <b>Priority support</b>
                                <li>Email and chat supports</li>
                            </ul>
                        </div>

                        <div className="pricing-block growth-block">
                            <h3 style={{display:'flex',justifyContent:'space-between' ,alignItems:'center'}}> <span>Growth</span> <button disabled style={{borderColor:'grey' ,padding:5 ,color:'grey'}}>Most popular</button> </h3>
                            <span style={{color:'black'}}>Built for distributors, marketplaces, and large <br/> teams.</span>
                            <div className="price">
                                <span>6,000</span>
                                <span>/month</span>
                            </div>
                            <button className="btn-color" > Start Growing </button>
                            <ul >
                                <b>Includes everything in the starter, plus:</b>
                                <li>Add up to 7 users</li>
                                <li>Up to 20 clients every month</li>
                                <li>up to 20 projects every month</li>
                                <li>File storage up to 12GB</li>
                                <li>No message history after 60 days</li>
                                <li>Unlimited meetings</li>
                                <li>20 Invoices per month</li>
                                <li>Manage finances</li>
                                <li>Inventory management upto 50 products</li>
                                <b>Priority support</b>
                                <li>Priority: Email, chat and phone supports</li>
                            </ul>
                        </div>

                        <div className="pricing-block">
                            <h3>Enterprise</h3>
                            <span style={{color:'black'}}>Built for distributors, marketplaces, and large <br/> teams</span>
                            <div className="price">
                                <span>10,000</span>
                                <span>/month</span>
                            </div>
                            <button className="btn"> Start Growing </button>
                            <ul >
                                <b>Includes everything in the growth, plus:</b>
                                <li>Add up to 15 users</li>
                                <li>Up to 50 clients every month</li>
                                <li>up to 100 projects every month</li>
                                <li>File storage up to 30GB</li>
                                <li>Message history for 350 days</li>
                                <li>Unlimited meetings</li>
                                <li>Unlimited Invoices per month</li>
                                <li>Manage finances</li>
                                <li>Inventory management upto 100 products</li>
                                <b>Priority support</b>
                                <li>Priority: Email, chat and phone supports</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <Services/>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Pricing