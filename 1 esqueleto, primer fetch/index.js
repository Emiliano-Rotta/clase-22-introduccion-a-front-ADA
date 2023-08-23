fetch(`https://rickandmortyapi.com/api/character/`)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data.results)

    let elementos = document.getElementById('tarjetas')
    let html = ""
    for (let i = 0; i < 20; i++) {
      html = html +
      `
      <div class='card'>
      <h2>${data.results[i].name}</h2>
      <img src=${data.results[i].image} alt="">
      <p>Estado: ${data.results[i].status}</p>
      <p>Especie: ${data.results[i].species}</p>
      <p>Genero: ${data.results[i].gender}</p>
      </div>
      `
    }
    elementos.innerHTML = html

})