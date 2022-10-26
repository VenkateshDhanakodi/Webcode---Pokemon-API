let page = 0; 
let lets_go = document.querySelector('#lets_go');
`Fetching the Pokemons data using Async and Await`
let pokemon_fetch = async (url, img_no)=>{
    try{
        let pokamon_details = await fetch(
            url,
            {method: "GET"}
        );
        let pokemon = await pokamon_details.json();  
        if(page == 0){
            `Loading the Homepage with all the random 50 Pokemon`
            let allimg = `<div class="oneimg"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img_no}.svg" alt="#"></div>`
            document.querySelector('#allimg').innerHTML += allimg;
    }
        if(page == 1){
            `Loading the respective pages pokemon content`
            let pokemon_details = `<div class = "pokemon_details">
            <div class = "pokemon_img"><div class = "pokemon">${pokemon.name}</div>
            <div class = "img_container"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img_no}.svg" alt="#"></div>
            <div class = "stats"><div class = "weight">Weight - ${pokemon.weight}</div>
            <div class = "ability"><span>&nbsp${pokemon.abilities[0].ability.name}&nbsp/&nbsp${pokemon.abilities[1].ability.name}&nbsp</span></div>
            <div class = "move"><span>&nbsp${pokemon.moves[0].move.name}&nbsp/&nbsp${pokemon.moves[1].move.name}&nbsp</span></div></div></div></div>`
            document.querySelector('#pokemon_list').innerHTML += pokemon_details;
        }
    }
catch(err){
    //No operation
}
}
let reference;
let homepage = ()=>{if(page == 0){
    `Fetching the images of 50 pokemon for the homepage`
    for(let i = 1; i <= 250; i=i+5){
        pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
    }
}}
homepage();

let setpage = `<div class="pagination">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">7</a>
                <a href="#">8</a>
                <a href="#">9</a>
                </div>`

lets_go.addEventListener("click",function(clicked){
    `Removing the homepage images and loading the first page pokemon content`
    document.querySelector('#allimg').remove();
    document.querySelector('#lets_go').remove();
    page = 1;
    `Setting new navbar for all the pages`
    let navbar = `<button id = "home" onclick=homecall()>Home</button>
        <div id = 'abilities'>Abilities &nbsp<span>Color &nbsp &nbsp</span></div>
        <div id = 'moves'>Moves &nbsp<span>Color &nbsp &nbsp</span></div>
        <img src="hash-pokemon.png.png" alt="#">`
    document.querySelector('#navbar').innerHTML = navbar;

    if(clicked.target.innerHTML == "Click here to check Pokemon Stats"){
        `loading the first page pokemon content`
        for(let i = 1; i <= 35; i=i+5){
        pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
        `Loading pages buttons to navigate`
        document.body.innerHTML += setpage;
    }
})
function homecall() {
    `Activating Homepage Button`
    location.href = "http://127.0.0.1:5501/Pokemon%20API/index.html";
};

window.addEventListener("click",function(clicked){
    if(clicked.target.innerHTML == 1){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 1; i <= 35; i=i+5){
            `Pulling first page 10 random Pokemon`
             pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 2){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 40; i <= 65; i=i+5){
            `Pulling second page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 3){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 70; i <= 95; i=i+5){
            `Pulling third page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 4){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 100; i <= 125; i=i+5){
            `Pulling forth page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 5){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 130; i <= 155; i=i+5){
            `Pulling fifth page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 6){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 140; i <= 165; i=i+5){
            `Pulling sixth page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 7){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        `Pulling seventh page 10 random Pokemon`
        for(let i = 170; i <= 195; i=i+5){
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 8){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 200; i <= 230; i=i+5){
            `Pulling eighth page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 9){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_list').innerHTML = '';
        for(let i = 235; i <= 265; i=i+5){
            `Pulling ninth page 10 random Pokemon`
            pokemon_fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
})
