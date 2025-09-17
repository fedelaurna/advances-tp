 const key = "5hgcwemdorrZZQWCcgkqttIk7r8jH6KDy0qsTQes"
    const contenedor = document.getElementById("contenedor")

    window.onload = () => {
      fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`)
        .then(res => res.json())
        .then(data => {
          const foto = data[0]
          if (foto.media_type === "image") {
            contenedor.innerHTML = `
              <h2>${foto.title}</h2>
              <img src="${foto.url}" alt="${foto.title}" />
              <p>${foto.explanation}</p>
            `
          }
        })
    }