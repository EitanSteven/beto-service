import { useEffect, useState, useCallback } from "react";
import { FetchQr } from "../services/FetchQr";

export function QrLoader() {
    const [qrImg, setQrImg] = useState("");
    const [qrFile, setQrFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const token = sessionStorage.getItem("token"); // No es necesario almacenarlo en el estado

    useEffect(() => {
        const fetchQr = new FetchQr();

        const fetchImage = async () => {
            try {
                setLoading(true);
                const fetchedImage = await fetchQr.getQr();
                if (!fetchedImage) throw new Error("No se pudo obtener el QR.");
                setQrImg(fetchedImage);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setQrFile(file)
        }
    }

    const handleSubmit = () => {
        if (!qrFile) return

        const btn = document.querySelector('.upload-btn')
        btn.disabled = true
        const fetchQr = new FetchQr();

        const fetchImage = async () => {
            try {
                const imageUpdated = await fetchQr.updateQr(qrFile, token);
                if (!imageUpdated) throw new Error("No se pudo obtener el QR.");
                setQrImg(imageUpdated)
                btn.disabled = false
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchImage()
    }

    return (
        <div className="qr-component">
            <div className="qr-img">
                {loading ? (
                    <p>Cargando QR...</p>
                ) : error ? (
                    <p>Error al cargar la imagen</p>
                ) : (
                    <img src={qrImg || 'fallback.png'} alt="Getting qr image from API" width="200" />
                )}
            </div>

            <div className="qr-btns">
                <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />

                <button
                    className="admin-btn upload-btn"
                    disabled={false}
                    onClick={handleSubmit}>
                    Subir
                </button>
            </div>
        </div>
    );
}
