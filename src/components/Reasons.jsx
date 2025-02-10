import WeatherStats from './WeatherStats';

export function Reasons() {
    return (
        <section id='reasons' className="reasons-section">
            <article className="reasons-article">
                <h2 className="reasons-title">¿Por que conmigo?</h2>
                <p className="reasons-content">
                    En los últimos años, Olavarría ha registrado temperaturas inusuales con
                    <span className="winter-p"> mínimas </span> y
                    <span className="summer-p"> máximas</span>. Yendo desde los
                    <span className=""> -8° C </span> hasta los
                    <span className="summer-p"> 40° C</span>. Estas mismas pueden llegar a afectar tu salud e integridad de tu hogar. Por eso es indispensable contar con un profesional que asegure el correcto funcionamiento de tus servicios.
                </p>

                <article className='reasons-graph-fonts'>
                    <div className="graph-1">
                        <WeatherStats />
                    </div>

                    <aside className='reasons-fonts'>
                        <p>
                            "Desde 1960 a 2018, la temperatura media y máxima promedio anual han incrementado en 1 °C" ... "Las observaciones indican que las olas de calor se han incrementado, y que entre 2010 y 2018 se produjeron más del doble que en la década de 1990." —Camilloni, 2020—.
                        </p>
                    </aside>
                </article>
            </article>
        </section>
    )
}