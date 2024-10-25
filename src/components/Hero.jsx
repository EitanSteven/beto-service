import { ContactIcon, ServiceIcon } from './icons'
import betoLogo from '../assets/betogas_logo.png'

export function Hero() {
    return (
        <section id='home' className='hero-section'>
            <section className='hero-content'>
                <aside className='hero-info'>
                    <h2>Plomero & Gasista Matriculado</h2>
                    <h1>BETO GAS<br />BETO AGUA</h1>
                    <p>Más de 15 años de experiencia mejorando la seguridad y calidad de vida de los hogares y familias de Olavarría.</p>
                    <section className='hero-btns'>
                        <button className="btn service-btn">
                            <a href="#">Servicios</a>
                            <ServiceIcon />
                        </button>

                        <button className="btn contact-btn">
                            <a href="#">Contáctame</a>
                            <ContactIcon />
                        </button>
                    </section>
                </aside>
                <img className='main-logo' src={betoLogo} alt="Principal logo of the web" /></section>
        </section>
    )
}