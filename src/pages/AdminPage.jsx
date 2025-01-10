import React, { useEffect, useState } from 'react';
import './AdminPage.css';

function AdminPage() {
    useEffect(() => {
        console.log('Admin Page')
        fetch("http://localhost:1234/servicios", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <>
            <main className='admin-section'>
                <h2>¡Hola Beto 👋!</h2>
                <section className='admin-services-section'>
                    <table border="1" className='admin-services-table'>
                        <thead>
                            <tr>
                                <th>Tipo de Servicio</th>
                                <th>Servicio</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Gasista</td>
                                <td>Tarea de Gasista 1</td>
                                <td className='admin-service-options'>
                                    <button className='admin-service-btn'><a href="#">Editar</a></button>
                                    <button className='admin-service-btn'><a href="#">Editar</a></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <form className='new-service'>
                        <h2>Ingresa un nuevo servicio</h2>
                        <div>
                            <label htmlFor="tipo_servicio">Tipo de Servicio:</label>
                            <select id="tipo_servicio" required>
                                <option value="Gasista">Gasista</option>
                                <option value="Plomero">Plomero</option>
                                <option value="Aires">Aires</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="tarea">Servicio:</label>
                            <input type="text" id='tarea' placeholder='Reparacion de...' required />
                        </div>
                        <input type="submit" value="Enviar" />
                        <p className='loader loading'>Enviando...</p>
                        <p className='loader loaded'>Enviado ✔</p>
                    </form>
                </section>
            </main>
        </>
    )
}

export default AdminPage;
