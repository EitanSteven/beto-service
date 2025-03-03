//import { Clock } from "lucide-react";
// import QrCode from '../assets/qr.png';
import { MapPin, Clock, CopyNumber } from "./icons";
import { useState, useEffect } from 'react';

import { useClima } from "../hooks/useClima";
import { FetchNumber } from "../services/FetchNumber"
import { FetchQr } from '../services/FetchQr'

// Crear componente ClimaWidget fuera de useEffect
const ClimaWidget = ({ clima }) => {
    if (!clima || Object.keys(clima).length === 0) {
        return <p>Error al cargar datos del clima.</p>;
    }

    return (
        <div>
            <h2>Clima en Olavarría</h2>
            <p className="text"><b>{clima.temp.toFixed(2)} °C</b></p>
            <p className="text">Humedad: {clima.humedad} %</p>
            <p className="text">Presión Atm: {clima.presion_atmosferica.toFixed(2)} atm</p>
            <p className="text">Viento: {clima.viento} Km / h</p>
        </div>
    )
}

export default function ContactVento() {
    const climaData = useClima()
    const fetchNumber = new FetchNumber()
    const fetchQr = new FetchQr()
    const [number, setNumber] = useState("")
    const [qr, setQr] = useState("")

    useEffect(() => {
        const fetchNumberData = async () => {
            const data = await fetchNumber.getNumber()
            if (!data.data[0].number) {
                console.error("Number not found")
                setNumber("Numero no disponible.")
            }

            const numberFetched = data.data[0].number
            setNumber(numberFetched)
        }

        const fetchQrData = async () => {
            const data = await fetchQr.getQr()
            if (!data) console.error("Link de codigo QR no encontrado")
            setQr(data)
        }

        fetchQrData()
        fetchNumberData()
    }, [])

    return (
        <div className="grid">
            {/* Main Contact Box */}
            <div className="box main-box">
                <h2 className="contact-title">¿Cómo Contactarme?</h2>
                <p className="text">
                    Envía un mensaje a mi WhatsApp para despejarte de cualquier duda u organizar una visita si cuentas con alguna falla en tu hogar.
                </p>
                <br />
                <p className="text">¡Espero trabajar para ti!</p>
                <p className='wp-number'>{number === "" ? "Cargando numero..." : number}</p>
            </div>
            {/* Weather Widget Box */}
            <div className="box small-box">
                {climaData ? <ClimaWidget clima={climaData} /> : <p>Cargando datos del clima...</p>}
            </div>
            {/* Location Box */}
            <div className="box icon-box location-box">
                <MapPin className="vento-icon" />
                <p className="text text-center">Piedras 2049</p>
            </div>
            {/* Clock Box */}
            <div className="box icon-box hour-box">
                <Clock className="vento-icon" />
                <p className="text text-center">Abierto desde 9am a 1pm</p>
            </div>
            {/* QR Code Box */}
            <div className="box mid-box">
                <img className="qr-code" src={qr} alt="Código QR de contacto." />
            </div>
        </div>
    );
}
