import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const redirect = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Validación simple
        if (!email || !password) {
            setError('❕ Todos los campos son obligatorios.');
            return;
        }

        try {
            const loginBtn = document.querySelector(".login-btn")
            loginBtn.disabled = true
            const response = await fetch('https://betoservice-api.onrender.com/api/v1/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }

            const data = await response.json();
            // Maneja la respuesta de la API
            console.log(data.message);
            if (response.ok) {
                const token = data.data.token
                sessionStorage.setItem('token', token)
                console.log('Token Saved.')
                redirect('/admin')
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <NavBar />
            <section className='login-section'>
                <div className='login-section-page'>
                    <div className="login-container">
                        <h2>❔ Login Page</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    placeholder='alguien@hotmail.com...'
                                    className='login-input'
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    placeholder='****'
                                    className='login-input'
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button
                                disabled={false}
                                className='login-btn'
                                type="submit">Login
                            </button>
                            {error && <p className="login-error">{error}</p>}
                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
