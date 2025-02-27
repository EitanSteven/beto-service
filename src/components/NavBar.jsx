import betoLogo from '../assets/betogas_logo.png'

export function NavBar() {
    return (
        <nav>
            <section className='web-isologo'>
                <a href="#">
                    <img src={betoLogo} alt="Logo of the web." />
                    <h3>BETO</h3>
                </a>
            </section>
            <ul className='nav-ul'>
                <li className="nav-link"><a href="/#inicio">INICIO</a></li>
                <li className="nav-link"><a href="/#services">SERVICIOS</a></li>
                <li className="nav-link"><a href="/#reasons">MOTIVOS</a></li>
                <li className="nav-link"><a href="/#contact">CONTACTO</a></li>
            </ul>
        </nav>
    )
}