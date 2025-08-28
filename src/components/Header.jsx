import React, { useEffect, useState } from 'react'
import { Link ,useLocation ,useNavigate } from 'react-router-dom'
import styles from '../styles/landingStyles.module.css'
import '../styles/headerStyles.css'

import icon from '../assets/Icon.png'
import Product from '../pages/Product'
import menuBar from '../assets/mobile-menu.png'
import arrowBack from '../assets/arrow-back.png'
import close from '../assets/close.png'

const Header =() =>{
    const navigate = useNavigate()
    const location = useLocation()
    const [show, setShow] = useState(false)
    const [showMenu ,setShowMenu] = useState(false)

    function closeMenu(){
        setShowMenu(false)
    }

    return(
        <React.Fragment> 
            <div className='header'>
                <div >
                    <Link to="https://www.app.projina.top"> 
                        <button className='mobile-login'>login</button>
                    </Link>
                </div>

                <div className='logo'> 
                    <img src={icon} alt='logo' width={'40px'} height={'40px'} />
                    Pro<b style={{color:'#5B0C4E'}}>jina</b>
                </div>

                <div className='menu-bar' onClick={()=>setShowMenu(prev => !prev)}>
                   {showMenu ? <img src={close} /> : <img src={menuBar} />}
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
                    <a href='https://www.app.projina.top' >
                        <button className={styles.loginBtn} >Login</button>
                    </a>
                    <a href="https://www.app.projina.top/onboarding>
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

            <div className={showMenu? 'mobile-menu mobile-menu-open':'mobile-menu'}  >
                <div className='mobile-link-container'>
                    <span className={location.pathname == '/home' ? 'active-link':''}> <Link to={'/home'} onClick={()=>closeMenu()}  >Home</Link> </span>
                    {/* <span> <Link>Product</Link> </span> */}
                    <span className={location.pathname == '/solutions' ? 'active-link':''}> <Link to={'/solutions'} onClick={()=>closeMenu()} >Solution</Link> </span>
                    <span className={location.pathname == '/pricing' ? 'active-link':''}> <Link to={'/pricing'} onClick={()=>closeMenu()} >Pricing</Link> </span>
                    <span className={location.pathname == '/about' ? 'active-link':''}> <Link to={'/about'} onClick={()=>closeMenu()}>About & Testimonials</Link> </span>
                    <span> 
                        <a href='https://www.app.projina.top/onboarding' >
                        <button className={styles.loginBtn}>Sign up for free </button>  </span>
                        </a>
                    <span> <button className={styles.registerBtn} onClick={()=>navigate("/contact-us")} >Contact Sales <img src={arrowBack} alt='here' /></button> </span>
                </div>

                <div className='mobile-menu-footer'>
                    <span>Privacy policy</span>
                    <span>Legal notice</span>
                    <span>Cookie Settings</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
