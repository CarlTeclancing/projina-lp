import React, { useEffect, useState } from 'react'
import { Link ,useLocation } from 'react-router-dom'
import styles from '../styles/landingStyles.module.css'
import '../styles/headerStyles.css'

import icon from '../assets/Icon.png'
import Product from '../pages/Product'

const Header =() =>{
    const location = useLocation()
    const [show, setShow] = useState(false)

    return(
        <React.Fragment> 
            <div className='header'>
                <div >
                    <button className='mobile-login'>login</button>
                </div>

                <div className='logo'> 
                    <img src={icon} alt='logo' width={'40px'} height={'40px'} />
                    Pro<b style={{color:'#5B0C4E'}}>jina</b>
                </div>

                <div className='menu-bar' >
                    🍔
                </div>
  
                <div className={'headerLinks'}> 
                    <span className={location.pathname == '/home' ? 'active-link':''} ><Link to={'/home'} > Home </Link></span>
                    <span className={location.pathname == '/product' ? 'active-link':''} 
                        onMouseOver={()=>{ setShow(true) }}
                        onMouseLeave={()=>{}}
                    > 
                        <Link to={'#'} > Product </Link>
                    </span>
                    <span className={location.pathname == '/solutions' ? 'active-link':''}><Link to={'/solutions'} > Solutions </Link></span>
                    <span className={location.pathname == '/pricing' ? 'active-link':''}><Link to={'/pricing'} > Pricing </Link></span>
                    <span className={location.pathname == '/about' ? 'active-link':''}><Link to={'/about'}> About & Testimonials </Link></span>
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
            <div 
                className={show ?'show-product hide-product':'hide-product'}
                onMouseLeave={()=>setShow(false)}
            >
                <Product/>
            </div>
        </React.Fragment>
    )
}

export default Header