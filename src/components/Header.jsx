import React from 'react'
import { useNavigate ,Link } from 'react-router-dom'
import styles from '../styles/landingStyles.module.css'
import icon from '../assets/Icon.png'

const Header =() =>{

    const navigate = useNavigate()

    return(
        <React.Fragment> 
            <div className={styles.header}>
                <div className={styles.logo}> 
                    <img src={icon} alt='logo' width={'40px'} height={'40px'} />
                    Pro<b>jina</b>
                </div>

                <div className={styles.headerLinks}>
                    <span><Link to={'/home'} > Home </Link></span>
                    <span> <Link to={'/product'}> Product </Link></span>
                    <span><Link to={'/solutions'}> Solutions </Link></span>
                    <span><Link to={'/pricing'}> Pricing </Link></span>
                    <span><Link to={'/start-ups'}> Projina for startups </Link></span>
                </div>

                <div className={styles.headerBtns}>
                    <a href='https://app.projina/auth/login' >
                        <button className={styles.loginBtn} >Login</button>
                    </a>
                    <a href="https://app.projina/auth/register">
                        <button className={styles.registerBtn}>Sign up for free</button>
                    </a>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Header