import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/landingStyles.module.css'
import '../styles/headerStyles.css'

import icon from '../assets/Icon.png'

const Header =() =>{

    return(
        <React.Fragment> 
            <div className='header'>
                <div className='logo'> 
                    <img src={icon} alt='logo' width={'40px'} height={'40px'} />
                    Pro<b>jina</b>
                </div>

                <div className={'headerLinks'}>
                    <span><Link to={'/home'} > Home </Link></span>
                    <span> <Link to={'/product'}> Product </Link></span>
                    <span><Link to={'/solutions'}> Solutions </Link></span>
                    <span><Link to={'/pricing'}> Pricing </Link></span>
                    <span><Link to={'/start-ups'}> Projina for startups </Link></span>
                </div>

                <div className={'headerBtns'}>
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