export class FetchNumber {
    constructor() {
        this.baseUrl = "https://betoservice-api.onrender.com/api/v1"
    }

    async getNumber() {
        try {
            const response = await fetch(`${this.baseUrl}/contact/number`)
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }

            const data = await response.json()
            return data
        } catch (error) {
            console.log("Error al obtener el numero: ", error)
            return null
        }
    }

    async updateNumber(newNumber, id, token) {
        try {
            const response = await fetch(`${this.baseUrl}/contact/number/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ number: newNumber })
            })

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`)
            }

            return await response.json()
        } catch (error) {
            console.error("Error al actualizar el número: ", error)
            return null
        }
    }
}