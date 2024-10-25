import { getClima } from "../services/clima";
import { useState, useEffect } from "react";

export function useClima() {
    const [clima, setClima] = useState(null)

    useEffect(() => {
        getClima().then(newClima => setClima(newClima))
    }, [])

    return clima
}