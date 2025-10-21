import { Link } from "react-router-dom"
import './Header.less'
import logo from '../assets/LOGO.svg'
import { useEffect, useState } from "react"
function Header(){
    const [isDark, setIsDark] = useState(false)
    
    
    useEffect(()=>{
        if (isDark){
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }
    },[isDark])
    
    return (
        <header>
            <div className="container" >
                <a href="/"><img src={logo} alt="logo" /></a>
                <menu>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About us</Link>
                    <Link className="link" to="/services">Services</Link>
                    <Link className="link" to="/blog ">Blog</Link>
                    <Link className="link" to="/contact">Contact us</Link>
                </menu>
                <button onClick={()=>setIsDark(prev=>!prev)}>{isDark ? "Light": "Dark"}</button>
            </div>
        </header>
    )
}
export default Header

// onClick={()=>setTheme(theme === 'white' ? 'black':'white')}
