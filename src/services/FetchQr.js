export class FetchQr {
    constructor() {
        this.baseUrl = "http://localhost:5500/api/v1"
    }

    async getQr() {
        try {
            const response = await fetch(`${this.baseUrl}/qr`)

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }

            const blob = await response.blob()
            return URL.createObjectURL(blob)
        } catch (error) {
            console.error("Error al obtener el QR: ", error)
            return null
        }
    }

    async updateQr(newQr, token) {
        const formData = new FormData()
        formData.append('image', newQr)
        try {
            const response = await fetch(`${this.baseUrl}/qr`, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData
            })

            if (!response.ok) {
                console.log('Respuesta no ok')
                throw new Error(`Error HTTP: ${response.status}`)
            }

            const blob = await response.blob()
            return URL.createObjectURL(blob)
        } catch (error) {
            console.error("Error al actualizar el número: ", error)
            return null
        }
    }



    //async createQr(newQr, token) {
    //    try {
    //        const response = await fetch(`${this.baseUrl}/qr`, {
    //            method: 'POST',
    //            headers: {
    //                "Content-Type": "application/json",
    //                "Authorization": `Bearer ${token}`
    //            },
    //            body: JSON.stringify({
    //                qr: newQr
    //            })
    //        })
    //
    //        if (!response.ok) {
    //            throw new Error(`Error HTTP: ${response.status}`)
    //        }
    //
    //        return await response.json()
    //    } catch (error) {
    //        console.error("Error al subir el QR: ", error)
    //        return null
    //    }
    //}
    //



}