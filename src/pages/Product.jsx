import React from "react";
import styles from '../styles/landingStyles.module.css'

const Product = () => {
    return(
        <React.Fragment>
            <div style={{display:'flex' ,gap:30 ,padding:30 ,border:'solid 0px red'}} >
                <div className={styles.service}>
                    <div><span className={styles.serviceIcon}>💰</span></div>
                    <div className={styles.serviceTitle}> Finance Management </div>
                    <div className={styles.serviceText} >Track expenses, revenue, budgets, and financial reports in real time to keep your business on track.</div>
                </div>

                <div className={styles.service}>
                    <div><span className={styles.serviceIcon}>👩</span></div>
                    <div className={styles.serviceTitle} > Employee Management </div>
                    <div className={styles.serviceText}>Manage staff profiles, roles, attendance, and performance from one centralized dashboard.</div>
                </div>

                <div className={styles.service}>
                    <div><span className={styles.serviceIcon}>📁</span></div>
                    <div className={styles.serviceTitle}> Project Management </div>
                    <div className={styles.serviceText}>Plan, assign, and monitor projects from start to finish with clear timelines and progress tracking.</div>
                </div>

                <div className={styles.service}>
                    <div><span className={styles.serviceIcon}>📊</span></div>
                    <div className={styles.serviceTitle}> Analytics Dashboard </div>
                    <div className={styles.serviceText}> Get actionable insights into performance, efficiency, and growth opportunities.</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Product