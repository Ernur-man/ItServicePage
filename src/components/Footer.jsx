import './footer.less'
import logo from '../assets/LOGO.svg'
function Footer(){
    return(
        <footer>
            <div className="container">
                <nav>
                    <a href="/ItServicePage/"><img src={logo} alt="logo" loading='lazy'/></a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>@Lorem</p>
                </nav>
                <nav>
                    <h3><a href="/ItServicePage/about">About us</a></h3>
                    <menu>
                        <li>Lorem</li>
                        <li>Portfolio</li>
                        <li>Careers</li>
                        <li>Contact us</li>
                    </menu>
                </nav>
                <nav>
                    <h3><a href="/ItServicePage/contact">Contact us</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>+908 89097 890</p>
                </nav>
            </div>
        </footer>
    )
}
export default Footer
