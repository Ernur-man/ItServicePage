import { Link } from "react-router-dom"
import './Header.less'
import logo from '../assets/LOGO.svg'
import { useEffect, useState } from "react"
function Header(){




    return (
        <header>
            <div className="container" >
                <a href="/mixProject/"><img src={logo} alt="logo" loading="lazy"/></a>
                <menu>
                    <Link className="link" to="/mixProject/">Home</Link>
                    <Link className="link" to="/mixProject/about">About us</Link>
                    <Link className="link" to="/mixProject/services">Services</Link>
                    <Link className="link" to="/mixProject/blog ">Blog</Link>
                    <Link className="link" to="/mixProject/contact">Contact us</Link>
                </menu>
            </div>
        </header>
    )
}
export default Header

