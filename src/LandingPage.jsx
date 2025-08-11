import React from 'react'
import styles from './styles/landingStyles.module.css'
import icon from './assets/Icon.png'
import dashboard from './assets/dashboard.png'
import star1 from './assets/star1.png'
import star2 from './assets/star2.png'
import star3 from './assets/star3.png'
import working from './assets/working.png'


const LandingPage = () => {
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
                {/* <div><img src={working}/></div> */}
                <div> 
                    <div>
                        <span>Finance Tracking & Categorizing</span>
                        <p>Track your company’s income and expenses with automatic categorization by department, project, or expense type. Get real-time insights to improve budgeting and cut unnecessary costs.</p>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}

export default LandingPage