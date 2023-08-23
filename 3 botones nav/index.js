var todos = document.querySelector('#todos')
var mujeres = document.querySelector('#mujeres')
var hombres =document.querySelector('#hombres') 



fetch("https://rickandmortyapi.com/api/character") 
  .then(res =>res.json())
  .then((data)=>{    
    console.log(data)
    let element = document.getElementById('fetch')
    let html = ""
    for (let i = 0; i < 20; i++) {

        html = html + 
        `
        <div class="card">
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image} alt="">
        <p>${data.results[i].status}</p>
        <p>${data.results[i].species}</p>
        </div>
        `

    }
    // console.log(html)
  element.innerHTML = html
})

 
todos.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character") 
  .then(res =>res.json())
  .then((data)=>{    
    console.log(data)
    let element = document.getElementById('fetch')
    let html = ""
    for (let i = 0; i < 20; i++) {

        html = html + 
        `
        <div class="card">
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image} alt="">
        <p>${data.results[i].status}</p>
        <p>${data.results[i].species}</p>
        </div>
        `

    }
    // console.log(html)
    element.innerHTML = html
  })
    
})

mujeres.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character/?gender=female") 
  .then(res =>res.json())
  .then((data)=>{    
    console.log(data)
    let element = document.getElementById('fetch')
    let html = ""
    for (let i = 0; i < 20; i++) {

        html = html + 
        `
        <div class="card">
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image} alt="">
        <p>${data.results[i].status}</p>
        <p>${data.results[i].species}</p>
        </div>
        `

    }
    // console.log(html)
    element.innerHTML = html
  })
    
})


hombres.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character/?gender=male") 
  .then(res =>res.json())
  .then((data)=>{    
    console.log(data)
    let element = document.getElementById('fetch')
    let html = ""
    for (let i = 0; i < 20; i++) {

        html = html + 
        `
        <div class="card">
        <h2>${data.results[i].name}</h2>
        <img src=${data.results[i].image} alt="">
        <p>${data.results[i].status}</p>
        <p>${data.results[i].species}</p>
        </div>
        `

    }
    // console.log(html)
    element.innerHTML = html
  })
    
})

