function getPokemon(){fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then(response => response.json())
    .then(data => {
        const randomNum = Math.floor(Math.random() * data.results.length)
        const randomPokemon = data.results[randomNum].url
        return fetch(`${randomPokemon}`)
    }).then(response => response.json())
    .then(data =>{
        console.log(data)
        const pokemonType = data.types.map(type =>{
            return type.type.name
        }).join(` / `)
        const favMove = data.moves[Math.floor(Math.random()* data.moves.length)+1].move.name
        document.getElementById('poke-card').innerHTML =
        `   
            <img src="${data.sprites.front_default}">
            <h2>Name: ${data.forms[0].name}
            <h4>Type: ${pokemonType}</h4>
            <h4>Weight: ${data.weight}</h4>
            <h4>Favourite Attack: ${favMove}</h4>
        `
        document.getElementById(`congrats-text`).innerHTML=
        `
            <p>Congratulations! Your new Pokemon is <span>${data.forms[0].name}</span></p>
        `  
    })
}

document.getElementById(`get-pokemon`).addEventListener(`click`, getPokemon)

