import { useState, useEffect } from "react"
import { FetchNumber } from "../services/FetchNumber"

export function PhoneNumber() {
    const [number, setNumber] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [isFetching, setIsFetching] = useState(false)
    const [numberId, setNumberId] = useState("")
    const [token, setToken] = useState("")

    const fetchNumber = new FetchNumber()

    // Obtener el numero al cargar el componente
    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token')
        const fetchData = async () => {
            const response = await fetchNumber.getNumber()
            const data = response.data[0]
            if (data && data.number) {
                setNumber(data.number)
                setNewNumber(data.number) // Para que el input tenga el valor inicial
                setNumberId(data._id)
                setToken(sessionToken)
            }
        }

        fetchData() // Invocamos la funcion
    }, [])

    // Manejar la actualización del número
    const handleUpdate = async () => {
        const saveBtn = document.querySelector(".save")
        saveBtn.disabled = true
        const updatedData = await fetchNumber.updateNumber(newNumber, numberId, token)
        const dataNumber = updatedData.data.number
        if (updatedData && dataNumber) {
            setNumber(dataNumber)
            setIsFetching(false)
            saveBtn.disabled = false
        }
    }

    return (
        <>
            <div className="phone-container">
                <h3>📱 Numero de Contacto:</h3>
                {isFetching ? (
                    <div className="phone-editor">
                        <input
                            className="phone-number phone-number-input"
                            type="text"
                            value={newNumber}
                            onChange={(e) => setNewNumber(e.target.value)}
                        />
                        <button className="admin-btn save" disabled={false} onClick={handleUpdate}>Guardar</button>
                        <button className="admin-btn" onClick={() => setIsFetching(false)}>Cancelar</button>
                    </div>
                ) : (
                    <div className="phone-container-edit">
                        <p className="phone-number">{number || "Cargando número..."}</p>
                        <button className="admin-btn" onClick={() => setIsFetching(true)}>✍ Editar</button>
                    </div>
                )}
            </div >
        </>
    )
}

