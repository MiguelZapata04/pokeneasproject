const express = require('express')
const os = require("os")
const app = express()
const port = 80
const pokedex = [
      {
        "id": 1,
        "nombre": "Bulbasaur",
        "altura": 0.7,
        "habilidad": "Overgrow",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/bulbasaur.png",
        "frase_filosofica": "La fuerza de la naturaleza es la verdadera esencia de todo ser vivo."
      },
      {
        "id": 2,
        "nombre": "Caterpie",
        "altura": 0.3,
        "habilidad": "Shield Dust",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/caterpie.png",
        "frase_filosofica": "La apariencia no lo es todo, es lo que llevas dentro lo que importa."
      },
      {
        "id": 3,
        "nombre": "Charizard",
        "altura": 1.7,
        "habilidad": "Blaze",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/charizard.png",
        "frase_filosofica": "La llama ardiente del corazón es la fuente de la pasión y la fuerza interior."
      },
      {
        "id": 4,
        "nombre": "Charmander",
        "altura": 0.6,
        "habilidad": "Blaze",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/charmander.png",
        "frase_filosofica": "La chispa de la vida nunca se apaga, siempre sigue ardiendo en nuestro interior."
      },
      {
        "id": 5,
        "nombre": "Ekans",
        "altura": 2.0,
        "habilidad": "Intimidate",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/ekans.png",
        "frase_filosofica": "La astucia y el engaño pueden ser herramientas poderosas si se usan con sabiduría."
      },
      {
        "id": 6,
        "nombre": "Ivysaur",
        "altura": 1.0,
        "habilidad": "Overgrow",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/ivysaur.png",
        "frase_filosofica": "La fuerza de la naturaleza es la esencia misma de la vida, y debemos aprender a vivir en armonía con ella."
      },
      {
        "id": 7,
        "nombre": "Metapod",
        "altura": 0.7,
        "habilidad": "Shed Skin",
        "imagen": "https://storage.googleapis.com/pokeneas_miguel/metapod.png",
        "frase_filosofica": "La vida es un proceso de transform"
      }
    ]
app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    pokedex[number]["container"] = os.hostname()
    res.send(pokedex[number])   
})

app.get('/image', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    let pokemon ={
        "imagen" : pokedex[number]["imagen"],
        "frase_filosofica" : pokedex[number]["frase_filosofica"],
        "container" : os.hostname(),
    }
    res.send(pokemon)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
