// const fetchdata = ()=>{
//     try{
//         for (let i=1; i<=50; i++){
//             const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//             fetch(url)
//             .then((response) =>{
//                 return response.json();
//             })
//             .then((data)=>{
//                 console.log(data)
        
//                 // const pokemonData ={
//                 // 'name' : data.name,
//                 // 'weight' : data.weight,
//                 // 'ability' : data.abilities
//                 // .map(ability =>ability.ability.name).join(", "),
//                 // 'moves' : data.moves.
//                 // map(move => move.move.name).join(", "),
//                 // 'image' : data.sprites['front_default'],
//                 // };
        
//                 // console.log(pokemonData)
//             })
//         }

//     } catch{
//         console.log(error);
//     }

// };
// fetchdata()



const fetchdata = ()=>{
    try{
        for (let i=1; i<=50; i++){
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            fetch(url)
            .then((response) =>{
                return response.json();
            })
            .then((data)=>{
                console.log(data)
        
                // const pokemonData ={
                // 'name' : data.name,
                // 'weight' : data.weight,
                // 'ability' : data.abilities
                // .map(ability =>ability.ability.name).join(", "),
                // 'moves' : data.moves.
                // map(move => move.move.name).join(", "),
                // 'image' : data.sprites['front_default'],
                // };
        
                // console.log(pokemonData)
            })
        }

    } catch{
        console.log(error);
    }

};
fetchdata()
