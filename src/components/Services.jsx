import { ServiceIconPlumber, ServiceIconGas, ServiceIconAir } from './icons'

export function Services() {
    return (
        <>
            <section id='services' className="service-section">
                <section className="service-content">

                    <article className="service-card">
                        <div className="service-icon-container plumber-si">{<ServiceIconPlumber />}</div>
                        <p>servicio</p>
                        <h3 className="service-title">Plomería</h3>
                        {/* Componente al que se le pasa url */}
                        <ul className="service-ul">
                            <li>Instalación y reparación de grifos y canillas.</li>
                            <li>Instalación de piletas.</li>
                            <li>Instalación de tuberias de agua.</li>
                            <li>Reparación de goteos.</li>
                            <li>Instalación y mantenimiento de calefones.</li>
                            <li>Instalación de bombas de agua.</li>
                            <li>Instalación de sanitarios y desagues.</li>
                        </ul>
                        {/* Fin del componente */}
                        <button className="btn services-card-btn"><a href="#contact">Programar cita de Plomeria</a></button>
                    </article>

                    <article className="service-card">
                        <div className="service-icon-container gas-si">{<ServiceIconGas />}</div>
                        <p>servicio</p>
                        <h3 className="service-title">Gasista</h3>
                        {/* Componente al que se le pasa url */}
                        <ul className="service-ul">
                            <li>Instalación y reparación de calefactores.</li>
                            <li>Limpieza de calefactores.</li>
                            <li>Instalación de tuberias de gas.</li>
                            <li>Detección y reparación de fugas.</li>
                            <li>Instalación y reparación de cocinas.</li>
                            <li>Instalación y reparación de calderas.</li>
                        </ul>
                        {/* Fin del componente */}
                        <button className="btn services-card-btn"><a href="#contact">Programar cita de Gasista</a></button>
                    </article>

                    <article className="service-card">
                        <div className="service-icon-container air-si">{<ServiceIconAir />}</div>
                        <p>servicio</p>
                        <h3 className="service-title">Climetización</h3>
                        {/* Componente al que se le pasa url */}
                        <ul className="service-ul">
                            <li>Instalación de aires acondicionados.</li>
                            <li>Limpieza de filtros.</li>
                            <li>Remplazo de liquido refrigerante.</li>
                            <li>Reparación de tablero digital.</li>
                            <li>Reparación problemas de conexión.</li>
                            <li>Asesoramiento según presupuestos.</li>
                        </ul>
                        {/* Fin del componente */}
                        <button className="btn services-card-btn"><a href="#contact">Programar cita de Aire</a></button>
                    </article>
                </section>

                <article className='services-invitation'>
                    <p>Si precias de alguno de mis servicios, coordinemos una visita para evaluar el problema y realizar un presupuesto.</p>
                    <p>La primera visita de diagnostico y o presupuesto es totalmente <span>GRATIS</span>.</p>
                </article>

            </section>



        </>
    )
}