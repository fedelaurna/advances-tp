/*
const apiKey = "c1761899309a56237c5ec9c2fa949308"
const ciudad = "New York"

const contenedor = document.getElementById("clima-contenedor")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&appid=${apiKey}&units=metric&lang=es`)
  .then(res => res.json())
  .then(data => {
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon
    const temperatura = data.main.temp

    contenedor.innerHTML = `
      <h2>${ciudad}</h2>
      <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="${descripcion}">
      <p>${descripcion}</p>
      <p>Temperatura: ${temperatura}°C</p>
    `
  })
    */


  /* Datos simulados, le pedi a la IA qur mr ayude a vincular la api
  y le mostre los errores y le pedi una solucion temporal hasta que se
  active la API y se pueda usar
  https://home.openweathermap.org/api_keys */
  
  const ciudad = "New York";
const contenedor = document.getElementById("clima-contenedor");


const descripcion = "cielo parcialmente nublado";
const icono = "03d";
const temperatura = 22.5;

contenedor.innerHTML = `
  <h2>${ciudad}</h2>
  <img src="https://openweathermap.org/img/wn/${icono}@2x.png" alt="${descripcion}">
  <p>${descripcion}</p>
  <p>Temperatura: ${temperatura}°C</p>
`;