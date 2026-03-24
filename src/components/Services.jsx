import React from "react";
import styles from '../styles/landingStyles.module.css'
import { FaDollarSign, FaUsers, FaFolderOpen, FaCalendarAlt, FaChartBar, FaBox } from 'react-icons/fa'


const Services = () => {
    return(
        <React.Fragment>
            <div className={styles.services}>
                <div className={styles.service}>
                    <div><FaDollarSign size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle}> Finance Management </div>
                    <div>Track expenses, revenue, budgets, and financial reports in real time to keep your business on track.</div>
                </div>

                <div className={styles.service}>
                    <div><FaUsers size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle} > Employee Management </div>
                    <div>Manage staff profiles, roles, attendance, and performance from one centralized dashboard.</div>
                </div>

                <div className={styles.service}>
                    <div><FaFolderOpen size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle}> Project Management </div>
                    <div>Plan, assign, and monitor projects from start to finish with clear timelines and progress tracking.</div>
                </div>

                <div className={styles.service}>
                    <div><FaCalendarAlt size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle}> Schedule & Calendar </div>
                    <div> Organize company events, deadlines, and meetings in a shared, easy-to-use calendar. </div>
                </div>
                <div className={styles.service}>
                    <div><FaChartBar size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle}> Analytics Dashboard </div>
                    <div> Get actionable insights into performance, efficiency, and growth opportunities.</div>
                </div>
                <div className={styles.service}>
                    <div><FaBox size={48} color="#5B0C4E" /></div>
                    <div className={styles.serviceTitle}> Resource & Inventory Tracking </div>
                    <div>Monitor assets, office supplies, and materials to ensure nothing falls through the cracks.</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Services