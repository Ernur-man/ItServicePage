import { Link } from "react-router-dom"
import './Header.less'
import logo from '../assets/LOGO.svg'
import { useEffect, useState } from "react"
function Header(){




    return (
        <header>
            <div className="container" >
                <a href="/ItServicePage/"><img src={logo} alt="logo" loading="lazy"/></a>
                <menu>
                    <Link className="link" to="/ItServicePage/">Home</Link>
                    <Link className="link" to="/ItServicePage/about">About us</Link>
                    <Link className="link" to="/ItServicePage/services">Services</Link>
                    <Link className="link" to="/ItServicePage/blog ">Blog</Link>
                    <Link className="link" to="/ItServicePage/contact">Contact us</Link>
                </menu>
            </div>
        </header>
    )
}
export default Header

