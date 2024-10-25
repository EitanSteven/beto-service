const API_KEY = 'af00c6f76fd9fe6ce94fadf81dbcc2db';
//BASE : https://api.openweathermap.org/data/2.5/weather?q=Olavarria,%20Buenos%20Aires&appid=

export function getClima() {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=Olavarria,%20Buenos%20Aires&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            // Convertir Kelvis a Celcius
            const localTemp = (data.main.temp - 273.15);
            // Para convertir la presión de hectopascales (hPa) a atmósferas:
            const localPressure = (data.main.pressure / 1013.25);
            const newClima = {
                'temp': localTemp,
                'humedad': data.main.humidity,
                'presion_atmosferica': localPressure,
                'viento': data.wind.speed
            };
            return newClima;
        });
}
