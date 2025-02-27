import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { PhoneNumber } from '../components/PhoneNumber';

function AdminPage() {
    const redirect = useNavigate()

    useEffect(() => {
        const token = sessionStorage.getItem('token')   //<=====
        if (!token) {
            redirect('/login')
        }
    }, [])

    return (
        <>
            <NavBar />
            <section className='admin-section-page'>

                <main className='admin-section'>
                    <h2>👋 ¡Hola Beto!</h2>
                    <PhoneNumber />
                </main>
            </section>
        </>
    )
}

export default AdminPage;
