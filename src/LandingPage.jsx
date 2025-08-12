import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/landingStyles.module.css'

import icon from './assets/Icon.png'
import dashboard from './assets/dashboard.png'
import star1 from './assets/star1.png'
import star2 from './assets/star2.png'
import star3 from './assets/star3.png'
import working from './assets/working.png'
import sec1Img from './assets/sec1-img.jpg'
import sec2Img from './assets/sec2-img.jpg'
import slider1 from './assets/slider1.jpg'


const LandingPage = () => {
    
    const [activeBar ,setActiveBar] = useState('1')

    return(
        <React.Fragment>

            <img src={star1} style={{position:'absolute' ,top:'191px' ,left:'371px'}} />
            <img src={star2} style={{position:'absolute' ,top:'464px' ,left:'1445px'}}/>
            <img src={star3} style={{position:'absolute' ,top:'649px' ,left:'126px'}}/>


            <div className={styles.header}>
                <div className={styles.logo}> 
                    <img src={icon} alt='logo' width={'40px'} height={'40px'} />
                    Pro<b>jina</b>
                </div>

                <div className={styles.headerLinks}>
                    <span>Home</span>
                    <span>Product</span>
                    <span>Solutions</span>
                    <span>Pricing</span>
                    <span>Projina for startups</span>
                </div>

                <div className={styles.headerBtns}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.registerBtn}>Sign up for free</button>
                </div>

            </div>

            <div className={styles.desc}>
                <div> <span className={styles.ovals}> 🏆 Best Company Management </span></div>
                <div className={styles.moto1}>
                    <span>Make Company</span>
                    <span>Management <span style={{color:'#EA5254'}} >Effortless</span></span>
                </div>
                <div  className={styles.moto2} >Simplify Operations, Amplify Growth</div>
                <div> <button className={styles.registerBtn} >Sign up for free ➡ </button> </div>
                <div className={styles.reasons} > 
                    <span className={styles.ovals}>💰 Finance</span>
                    <span className={styles.ovals}>👩 Employee</span>
                    <span className={styles.ovals}>📁 Projects</span>
                    <span className={styles.ovals}>📆 Schedule</span> 
                </div>
            </div>

            <div className={styles.dashboard}>
                <img src={dashboard} width={'1246px'} />
            </div>

            <div className={styles.servicesContainer}>
                <div className={styles.serviceTitleContainer} >
                    <div className={styles.serviceHeaderTitle}>One <span style={{color:'#EA5254'}}>Platform.</span> Every Tool You Need</div>
                    <div style={{textAlign:'center'}} >With Projina, you manage better, work faster, and grow smarter using tools for finance, employees, projects,<br/> and schedules  all tailored for today’s businesses.</div>
                </div>

                <div className={styles.services}>
                    <div className={styles.service}>
                        <div><span className={styles.serviceIcon}>💰</span></div>
                        <div className={styles.serviceTitle}> Finance Management </div>
                        <div>Track expenses, revenue, budgets, and financial reports in real time to keep your business on track.</div>
                    </div>

                    <div className={styles.service}>
                        <div><span className={styles.serviceIcon}>👩</span></div>
                        <div className={styles.serviceTitle} > Employee Management </div>
                        <div>Manage staff profiles, roles, attendance, and performance from one centralized dashboard.</div>
                    </div>

                    <div className={styles.service}>
                        <div><span className={styles.serviceIcon}>📁</span></div>
                        <div className={styles.serviceTitle}> Project Management </div>
                        <div>Plan, assign, and monitor projects from start to finish with clear timelines and progress tracking.</div>
                    </div>

                    <div className={styles.service}>
                        <div> <span className={styles.serviceIcon}>📆</span></div>
                        <div className={styles.serviceTitle}> Schedule & Calendar </div>
                        <div> Organize company events, deadlines, and meetings in a shared, easy-to-use calendar. </div>
                    </div>
                    <div className={styles.service}>
                        <div><span className={styles.serviceIcon}>📊</span></div>
                        <div className={styles.serviceTitle}> Analytics Dashboard </div>
                        <div> Get actionable insights into performance, efficiency, and growth opportunities.</div>
                    </div>
                    <div className={styles.service}>
                        <div><span className={styles.serviceIcon}>📦</span></div>
                        <div className={styles.serviceTitle}> Resource & Inventory Tracking </div>
                        <div>Monitor assets, office supplies, and materials to ensure nothing falls through the cracks.</div>
                    </div>
                </div>

            </div>

            <div className={styles.section1}>
                <div><img src={working} style={{objectFit:'cover'}} className={styles.section1Image}/></div>

                <div className={styles.section1Block}> 

                     <div>
                        <img src={sec2Img} style={{ objectFit:'contain'}} width={'400px'} height={'350px'} />
                    </div>

                    <div style={{width:'350px'}}>
                        <h3>Finance Tracking & Categorizing</h3>
                        <p>Track your company’s income and expenses with automatic categorization by department, project, or expense type. Get real-time insights to improve budgeting and cut unnecessary costs.</p>
                    </div>

                   
                </div>

                <div className={styles.section1Block}>
                    <div style={{width:'350px'}}>
                        <h3>Project & Task Planning</h3>
                        <p>Seamlessly organize projects, assign tasks, and set clear deadlines. Keep teams aligned and projects progressing with performance milestones.</p>
                    </div>
                    <div>
                           <img src={sec1Img} style={{ objectFit:'contain'}} width={'400px'} height={'350px'} />
                    </div>
                </div>

                <div  style={{display:'flex', justifyContent:'space-between' ,gap:'20px'}}>
                    <div style={{backgroundColor:'white' ,padding:10, borderRadius:10}} >
                        <h3>Employee Payroll & Benefits Management</h3>
                        <p>Easily manage staff salaries, allowances, and deductions. Process payroll quickly and accurately with automated reports — no manual errors.</p>
                    </div>
                    <div style={{backgroundColor:'white',padding:10, borderRadius:10}}>
                        <h3>Performance & Growth Analytics</h3>
                        <p>Monitor key business metrics to evaluate how projects, teams, and departments are performing. Get actionable insights to drive improvement.</p>
                    </div>
                </div>

            </div>

            <div className={styles.section2}>
                <div>
                    <h1 style={{textAlign:'center'}}>Designed for the real needs of modern businesses.</h1>
                </div>

                <div style={{ display:'block', gap:10}}>
                    <div className={styles.section2Block}>
                        <h5>Automated Workflows</h5>
                        <span style={{color:'#EA5254', fontSize:30, fontWeight:600}}>500hours</span>
                        <p>Saved per month with automated project tracking, scheduling, and reporting.</p>
                    </div>

                    <div className={styles.section2Block}>
                        <h5>Seamless Payroll & Finance</h5>
                        <span style={{color:'#EA5254', fontSize:30, fontWeight:600}}>99.00%</span>
                        <p>In salary processing, expense tracking, and budget management.</p>
                    </div>

                    <div className={styles.section2Block}>
                        <h5>Quick Setup</h5>
                        <span style={{color:'#EA5254', fontSize:30, fontWeight:600}}>60seconds</span>
                        <p>To onboard your team and start managing projects, employees, and finances.</p>
                    </div>
                </div>

                {/* Video section */}

            </div>

            <div>
                <div className={styles.tabContainer}> 
                    <div 
                        className={activeBar == '1' ? styles.tabBtnActive:styles.tabBtn} 
                        onClick={()=>{setActiveBar('1')}} 
                        // onClick={e=>{
                        //     // console.log()
                        //     e.target.style.color = 'blue'
                        //     e.target.classList.remove('text')
                        //     console.log(e);
                        // }}
                    >
                        Crestlancing Ltd
                    </div>
                    <div className={activeBar == '2' ? styles.tabBtnActive:styles.tabBtn} onClick={()=>{setActiveBar('2')}}>Nephus</div>
                </div>

                <div className={styles.tabContent}>
                    <div>
                        <img src={activeBar == '1' ? slider1:working} className={styles.tabImage} style={{objectFit:'cover'}}/>
                    </div>
                    <div style={{width:350 ,fontSize:'large'}}>
                        {
                            activeBar == '1' ? 
                            <>
                                <p className={styles.tabText} >"I no longer waste time juggling spreadsheets and chasing updates everything from finances to schedules runs smoothly."</p>
                                <span style={{fontSize:'small'}}>Grace N. – Operations Manager, BrightPath Solutions</span><br/><br/>
                                <button style={{color:'white' ,backgroundColor:'#5B0C4E'}}>Read study case</button>
                            </>
                            :
                            <>
                            <p className={styles.tabText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, cumque doloribus aliquam eum eaque dolorum cupiditate facilis consequuntur dolor ea? Voluptate ad quibusdam nesciunt atque voluptatum illo itaque odit saepe?</p>
                            </>
                        }
                    </div>
                </div>


            </div>

            <div className={styles.trySection}>
                <h1>Try us for <span style={{color:'#EA5254'}}>Free</span></h1>
            
                <div style={{display:'flex' ,gap:20}}>
                    <button style={{border:'solid 1px rgb(175,175,175)'}}>Contact Sales</button>
                    <button style={{color:'white' ,backgroundColor:'#5B0C4E'}} >Sign up for free</button>
                </div>
            </div>

            <div className={styles.dashboard} style={{height:350}}>
                <img src={dashboard} width={'1246px'}  />
            </div>

            <div>
                
            </div>
                        

        </React.Fragment>
    )
}

export default LandingPage