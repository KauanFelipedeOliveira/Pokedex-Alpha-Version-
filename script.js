const pokemons = [
    { nome: 'Bulbasaur', categoria: 'Grass/Poison' },
    { nome: 'Ivysaur', categoria: 'Grass/Poison' },
    { nome: 'Venusaur', categoria: 'Grass/Poison' },
    { nome: 'Charmander', categoria: 'Fire' },
    { nome: 'Charmeleon', categoria: 'Fire' },
    { nome: 'Charizard', categoria: 'Fire/Flying' },
    { nome: 'Squirtle', categoria: 'Water' },
    { nome: 'Wartortle', categoria: 'Water' },
    { nome: 'Blastoise', categoria: 'Water' },
    { nome: 'Caterpie', categoria: 'Bug' },
    { nome: 'Metapod', categoria: 'Bug' },
    { nome: 'Butterfree', categoria: 'Bug/Flying' },
    { nome: 'Weedle', categoria: 'Bug/Poison' },
    { nome: 'Kakuna', categoria: 'Bug/Poison' },
    { nome: 'Beedrill', categoria: 'Bug/Poison' },
    { nome: 'Pidgey', categoria: 'Normal/Flying' },
    { nome: 'Pidgeotto', categoria: 'Normal/Flying' },
    { nome: 'Pidgeot', categoria: 'Normal/Flying' },
    { nome: 'Rattata', categoria: 'Normal' },
    { nome: 'Raticate', categoria: 'Normal' },
    { nome: 'Spearow', categoria: 'Normal/Flying' },
    { nome: 'Fearow', categoria: 'Normal/Flying' },
    { nome: 'Ekans', categoria: 'Poison' },
    { nome: 'Arbok', categoria: 'Poison' },
    { nome: 'Pikachu', categoria: 'Electric' },
    { nome: 'Raichu', categoria: 'Electric' },
    { nome: 'Sandshrew', categoria: 'Ground' },
    { nome: 'Sandslash', categoria: 'Ground' },
    { nome: 'Nidoran♀', categoria: 'Poison' },
    { nome: 'Nidorina', categoria: 'Poison' },
    { nome: 'Nidoqueen', categoria: 'Poison/Ground' },
    { nome: 'Nidoran♂', categoria: 'Poison' },
    { nome: 'Nidorino', categoria: 'Poison' },
    { nome: 'Nidoking', categoria: 'Poison/Ground' },
    { nome: 'Clefairy', categoria: 'Fairy' },
    { nome: 'Clefable', categoria: 'Fairy' },
    { nome: 'Vulpix', categoria: 'Fire' },
    { nome: 'Ninetales', categoria: 'Fire' },
    { nome: 'Jigglypuff', categoria: 'Normal/Fairy' },
    { nome: 'Wigglytuff', categoria: 'Normal/Fairy' },
    { nome: 'Zubat', categoria: 'Poison/Flying' },
    { nome: 'Golbat', categoria: 'Poison/Flying' },
    { nome: 'Oddish', categoria: 'Grass/Poison' },
    { nome: 'Gloom', categoria: 'Grass/Poison' },
    { nome: 'Vileplume', categoria: 'Grass/Poison' },
    { nome: 'Paras', categoria: 'Bug/Grass' },
    { nome: 'Parasect', categoria: 'Bug/Grass' },
    { nome: 'Venonat', categoria: 'Bug/Poison' },
    { nome: 'Venomoth', categoria: 'Bug/Poison' },
    { nome: 'Diglett', categoria: 'Ground' },
    { nome: 'Dugtrio', categoria: 'Ground' },
    { nome: 'Meowth', categoria: 'Normal' },
    { nome: 'Persian', categoria: 'Normal' },
    { nome: 'Psyduck', categoria: 'Water' },
    { nome: 'Golduck', categoria: 'Water' },
    { nome: 'Mankey', categoria: 'Fighting' },
    { nome: 'Primeape', categoria: 'Fighting' },
    { nome: 'Growlithe', categoria: 'Fire' },
    { nome: 'Arcanine', categoria: 'Fire' },
    { nome: 'Poliwag', categoria: 'Water' },
    { nome: 'Poliwhirl', categoria: 'Water' },
    { nome: 'Poliwrath', categoria: 'Water/Fighting' },
    { nome: 'Abra', categoria: 'Psychic' },
    { nome: 'Kadabra', categoria: 'Psychic' },
    { nome: 'Alakazam', categoria: 'Psychic' },
    { nome: 'Machop', categoria: 'Fighting' },
    { nome: 'Machoke', categoria: 'Fighting' },
    { nome: 'Machamp', categoria: 'Fighting' },
    { nome: 'Bellsprout', categoria: 'Grass/Poison' },
    { nome: 'Weepinbell', categoria: 'Grass/Poison' },
    { nome: 'Victreebel', categoria: 'Grass/Poison' },
    { nome: 'Tentacool', categoria: 'Water/Poison' },
    { nome: 'Tentacruel', categoria: 'Water/Poison' },
    { nome: 'Geodude', categoria: 'Rock/Ground' },
    { nome: 'Graveler', categoria: 'Rock/Ground' },
    { nome: 'Golem', categoria: 'Rock/Ground' },
    { nome: 'Ponyta', categoria: 'Fire' },
    { nome: 'Rapidash', categoria: 'Fire' },
    { nome: 'Slowpoke', categoria: 'Water/Psychic' },
    { nome: 'Slowbro', categoria: 'Water/Psychic' },
    { nome: 'Magnemite', categoria: 'Electric/Steel' },
    { nome: 'Magneton', categoria: 'Electric/Steel' },
    { nome: "Farfetch'd", categoria: 'Normal/Flying' },
    { nome: 'Doduo', categoria: 'Normal/Flying' },
    { nome: 'Dodrio', categoria: 'Normal/Flying' },
    { nome: 'Seel', categoria: 'Water' },
    { nome: 'Dewgong', categoria: 'Water/Ice' },
    { nome: 'Grimer', categoria: 'Poison' },
    { nome: 'Muk', categoria: 'Poison' },
    { nome: 'Shellder', categoria: 'Water' },
    { nome: 'Cloyster', categoria: 'Water/Ice' },
    { nome: 'Gastly', categoria: 'Ghost/Poison' },
    { nome: 'Haunter', categoria: 'Ghost/Poison' },
    { nome: 'Gengar', categoria: 'Ghost/Poison' },
    { nome: 'Onix', categoria: 'Rock/Ground' },
    { nome: 'Drowzee', categoria: 'Psychic' },
    { nome: 'Hypno', categoria: 'Psychic' },
    { nome: 'Krabby', categoria: 'Water' },
    { nome: 'Kingler', categoria: 'Water' },
    { nome: 'Voltorb', categoria: 'Electric' },
    { nome: 'Electrode', categoria: 'Electric' },
    { nome: 'Exeggcute', categoria: 'Grass/Psychic' },
    { nome: 'Exeggutor', categoria: 'Grass/Psychic' },
    { nome: 'Cubone', categoria: 'Ground' },
    { nome: 'Marowak', categoria: 'Ground' },
    { nome: 'Hitmonlee', categoria: 'Fighting' },
    { nome: 'Hitmonchan', categoria: 'Fighting' },
    { nome: 'Lickitung', categoria: 'Normal' },
    { nome: 'Koffing', categoria: 'Poison' },
    { nome: 'Weezing', categoria: 'Poison' },
    { nome: 'Rhyhorn', categoria: 'Ground/Rock' },
    { nome: 'Rhydon', categoria: 'Ground/Rock' },
    { nome: 'Chansey', categoria: 'Normal' },
    { nome: 'Tangela', categoria: 'Grass' },
    { nome: 'Kangaskhan', categoria: 'Normal' },
    { nome: 'Horsea', categoria: 'Water' },
    { nome: 'Seadra', categoria: 'Water' },
    { nome: 'Goldeen', categoria: 'Water' },
    { nome: 'Seaking', categoria: 'Water' },
    { nome: 'Staryu', categoria: 'Water' },
    { nome: 'Starmie', categoria: 'Water/Psychic' },
    { nome: 'Mr. Mime', categoria: 'Psychic/Fairy' },
    { nome: 'Scyther', categoria: 'Bug/Flying' },
    { nome: 'Jynx', categoria: 'Ice/Psychic' },
    { nome: 'Electabuzz', categoria: 'Electric' },
    { nome: 'Magmar', categoria: 'Fire' },
    { nome: 'Pinsir', categoria: 'Bug' },
    { nome: 'Tauros', categoria: 'Normal' },
    { nome: 'Magikarp', categoria: 'Water' },
    { nome: 'Gyarados', categoria: 'Water/Flying' },
    { nome: 'Lapras', categoria: 'Water/Ice' },
    { nome: 'Ditto', categoria: 'Normal' },
    { nome: 'Eevee', categoria: 'Normal' },
    { nome: 'Vaporeon', categoria: 'Water' },
    { nome: 'Jolteon', categoria: 'Electric' },
    { nome: 'Flareon', categoria: 'Fire' },
    { nome: 'Porygon', categoria: 'Normal' },
    { nome: 'Omanyte', categoria: 'Rock/Water' },
    { nome: 'Omastar', categoria: 'Rock/Water' },
    { nome: 'Kabuto', categoria: 'Rock/Water' },
    { nome: 'Kabutops', categoria: 'Rock/Water' },
    { nome: 'Aerodactyl', categoria: 'Rock/Flying' },
    { nome: 'Snorlax', categoria: 'Normal' },
    { nome: 'Articuno', categoria: 'Ice/Flying' },
    { nome: 'Zapdos', categoria: 'Electric/Flying' },
    { nome: 'Moltres', categoria: 'Fire/Flying' },
    { nome: 'Dratini', categoria: 'Dragon' },
    { nome: 'Dragonair', categoria: 'Dragon' },
    { nome: 'Dragonite', categoria: 'Dragon/Flying' },
    { nome: 'Mewtwo', categoria: 'Psychic' },
    { nome: 'Mew', categoria: 'Psychic' }
];

// Favoritos
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function salvarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function toggleFavorito(numero, btn) {
    if (favoritos.includes(numero)) {
        favoritos = favoritos.filter(n => n !== numero);
        btn.classList.remove('favoritado');
    } else {
        favoritos.push(numero);
        btn.classList.add('favoritado');
    }
    salvarFavoritos();
}

// Gera as imagens de tipo direto da categoria
// "Grass/Poison" → <img src="img/Grass.webp"> <img src="img/Poison.webp">
function gerarImgsTipos(categoria) {
    return categoria.split('/').map(tipo => {
        return `<img src="img/${tipo}.webp" alt="Tipo ${tipo}">`;
    }).join('');
}

// Monta os cards
const container = document.querySelector('.container');

pokemons.forEach((pokemon, index) => {
    const numero = index + 1;
    const numStr = String(numero).padStart(3, '0');
    const classe = pokemon.categoria.replace('/', '-'); // "Grass/Poison" → "Grass-Poison"
    const jaFavoritado = favoritos.includes(numero);

    const div = document.createElement('div');
    div.className = classe;
    div.innerHTML = `
        <button class="btn-favorito ${jaFavoritado ? 'favoritado' : ''}" title="Favoritar">★</button>
        <img class="img_pokemon" src="img/${numStr}.png" alt="#${numero} ${pokemon.nome}">
        <p>#${numero} ${pokemon.nome}</p>
        ${gerarImgsTipos(pokemon.categoria)}
    `;

    div.querySelector('.btn-favorito').addEventListener('click', function () {
        toggleFavorito(numero, this);
    });

    container.appendChild(div);
});

const searchInput = document.querySelector('.search-text');
const searchBtn = document.querySelector('.search-btn');

function filtrarPokemons() {
    const termo = searchInput.value.toLowerCase().trim();
    const cards = container.querySelectorAll('div');

    cards.forEach((card, index) => {
        const pokemon = pokemons[index];
        const nomeMatch = pokemon.nome.toLowerCase().includes(termo);
        const tipoMatch = pokemon.categoria.toLowerCase().includes(termo);

        card.style.display = (nomeMatch || tipoMatch) ? '' : 'none';
    });
}

searchInput.addEventListener('input', filtrarPokemons);
searchBtn.addEventListener('click', filtrarPokemons);

