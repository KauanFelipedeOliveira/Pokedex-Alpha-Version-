const TOTAL_POKEMON = 151;
const API_BASE = "https://pokeapi.co/api/v2/pokemon";

const TIPO_ICONE = {
    grass:    "img/Grass.webp",
    poison:   "img/Poison.webp",
    fire:     "img/Fire.webp",
    flying:   "img/Flying.webp",
    water:    "img/Water.webp",
    bug:      "img/Bug.webp",
    normal:   "img/Normal.webp",
    electric: "img/Electric.webp",
    ground:   "img/Ground.webp",
    fairy:    "img/Fairy.webp",
    fighting: "img/Fighting.webp",
    psychic:  "img/Psychic.webp",
    rock:     "img/Rock.webp",
    ghost:    "img/Ghost.webp",
    ice:      "img/Ice.webp",
    dragon:   "img/Dragon.webp",
    dark:     "img/Dark.webp",
    steel:    "img/Steel.webp",
};

// Mapeia tipo da API → classe CSS do seu style.css
const TIPO_CLASSE = {
    grass:    "Grass",
    poison:   "Poison",
    fire:     "Fire",
    flying:   "Flying",
    water:    "Water",
    bug:      "Bug",
    normal:   "Normal",
    electric: "Electric",
    ground:   "Ground",
    fairy:    "Fairy",
    fighting: "Fighting",
    psychic:  "Psychic",
    rock:     "Rock",
    ghost:    "Ghost",
    ice:      "Ice",
    dragon:   "Dragon",
    dark:     "Dark",
    steel:    "Steel",
};

// Favoritos via localStorage
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

function salvarFavoritos() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function toggleFavorito(id, btn) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(n => n !== id);
        btn.classList.remove('favoritado');
    } else {
        favoritos.push(id);
        btn.classList.add('favoritado');
    }
    salvarFavoritos();
}

function gerarClasseCor(tipos) {
    return tipos.map(t => TIPO_CLASSE[t] || t).join("-");
}

function formatarNumero(n) {
    return String(n).padStart(3, "0");
}

function criarCard(pokemon) {
    const tipos  = pokemon.types.map(t => t.type.name);
    const numero = formatarNumero(pokemon.id);
    const nome   = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const sprite = pokemon.sprites.front_default;
    const classe = gerarClasseCor(tipos);
    const jaFav  = favoritos.includes(pokemon.id);

    const div = document.createElement("div");
    div.className = classe;
    div.dataset.nome = nome.toLowerCase();

    // Botão favorito
    const btnFav = document.createElement("button");
    btnFav.classList.add("btn-favorito");
    if (jaFav) btnFav.classList.add("favoritado");
    btnFav.setAttribute("aria-label", "Favoritar");
    btnFav.innerHTML = "★";
    btnFav.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorito(pokemon.id, btnFav);
    });

    // Imagem
    const img = document.createElement("img");
    img.classList.add("img_pokemon");
    img.src = sprite;
    img.alt = nome;

    // Nome
    const p = document.createElement("p");
    p.textContent = `#${numero} ${nome}`;

    // Ícones de tipo
    const tiposDiv = document.createElement("div");
    tiposDiv.classList.add("card-types");
    tipos.forEach(tipo => {
        const icone = document.createElement("img");
        icone.src = TIPO_ICONE[tipo] || "";
        icone.alt = tipo;
        tiposDiv.appendChild(icone);
    });

    div.appendChild(btnFav);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(tiposDiv);

    // Abre popup ao clicar no card
    div.addEventListener("click", () => {
        window.abrirPopup(pokemon);
    });

    return div;
}

async function buscarPokemon(id) {
    const res = await fetch(`${API_BASE}/${id}`);
    if (!res.ok) throw new Error(`Erro ao buscar pokémon ${id}`);
    return res.json();
}

async function carregarPokedex() {
    const container = document.getElementById("pokedex-container");
    const ids = Array.from({ length: TOTAL_POKEMON }, (_, i) => i + 1);
    const resultados = await Promise.allSettled(ids.map(buscarPokemon));

    resultados.forEach(r => {
        if (r.status === "fulfilled") {
            container.appendChild(criarCard(r.value));
        }
    });
}

// Pesquisa
document.getElementById("searchInput").addEventListener("input", function () {
    const termo = this.value.toLowerCase().trim();
    document.querySelectorAll("#pokedex-container > div").forEach(card => {
        card.style.display = card.dataset.nome.includes(termo) ? "" : "none";
    });
});

carregarPokedex();
