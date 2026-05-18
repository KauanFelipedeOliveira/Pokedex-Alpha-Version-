const STAT_CONFIG = {
    "hp":              { label: "HP",             classe: "bar-hp"              },
    "attack":          { label: "ATTACK",         classe: "bar-attack"          },
    "defense":         { label: "DEFENSE",        classe: "bar-defense"         },
    "special-attack":  { label: "SPECIAL-ATTACK", classe: "bar-special-attack"  },
    "special-defense": { label: "SPECIAL-DEFENSE",classe: "bar-special-defense" },
    "speed":           { label: "SPEED",          classe: "bar-speed"           },
};

// Gradientes do popup por tipo (mesmos do popup.js original)
const TIPO_CLASSE_POPUP = {
    grass:"Grass", poison:"Poison", fire:"Fire", flying:"Flying",
    water:"Water", bug:"Bug", normal:"Normal", electric:"Electric",
    ground:"Ground", fairy:"Fairy", fighting:"Fighting", psychic:"Psychic",
    rock:"Rock", ghost:"Ghost", ice:"Ice", dragon:"Dragon",
    dark:"Dark", steel:"Steel",
};

const GRADIENTE_POR_CLASSE = {
    "Normal":   "radial-gradient(circle at top, white, gray)",
    "Fire":     "radial-gradient(circle at top, khaki, orangered)",
    "Water":    "radial-gradient(circle at top, rgb(122,176,228), rgb(5,91,172))",
    "Grass":    "radial-gradient(circle at top, limegreen, seagreen)",
    "Electric": "radial-gradient(circle at top, khaki, orange)",
    "Ice":      "radial-gradient(circle at top, aliceblue, lightskyblue)",
    "Fighting": "radial-gradient(circle at top, tomato, darkred)",
    "Poison":   "radial-gradient(circle at top, plum, purple)",
    "Ground":   "radial-gradient(circle at top, chocolate, sienna)",
    "Flying":   "radial-gradient(circle at top, paleturquoise, steelblue)",
    "Psychic":  "radial-gradient(circle at top, lightsalmon, palevioletred)",
    "Bug":      "radial-gradient(circle at top, lawngreen, olivedrab)",
    "Rock":     "radial-gradient(circle at top, lemonchiffon, brown)",
    "Fairy":    "radial-gradient(circle at top, lightpink, fuchsia)",
    "Ghost":    "radial-gradient(circle at top, orchid, indigo)",
    "Dragon":   "radial-gradient(circle at top, royalblue, darkblue)",
    "Dark":     "radial-gradient(circle at top, slategray, #1a1a2e)",
    "Steel":    "radial-gradient(circle at top, lightsteelblue, teal)",

    "Grass-Poison":   "linear-gradient(to right, limegreen, purple)",
    "Fire-Flying":    "linear-gradient(to right, orangered, paleturquoise)",
    "Bug-Flying":     "linear-gradient(to right, olivedrab, paleturquoise)",
    "Bug-Poison":     "linear-gradient(to right, olivedrab, purple)",
    "Bug-Grass":      "linear-gradient(to right, olivedrab, limegreen)",
    "Normal-Flying":  "linear-gradient(to right, gray, paleturquoise)",
    "Normal-Fairy":   "linear-gradient(to right, gray, lightpink)",
    "Poison-Flying":  "linear-gradient(to right, purple, paleturquoise)",
    "Poison-Ground":  "linear-gradient(to right, purple, chocolate)",
    "Water-Poison":   "linear-gradient(to right, rgb(5,91,172), purple)",
    "Water-Ice":      "linear-gradient(to right, rgb(5,91,172), lightskyblue)",
    "Water-Fighting": "linear-gradient(to right, rgb(5,91,172), darkred)",
    "Water-Psychic":  "linear-gradient(to right, rgb(5,91,172), palevioletred)",
    "Water-Flying":   "linear-gradient(to right, rgb(5,91,172), paleturquoise)",
    "Electric-Steel": "linear-gradient(to right, orange, teal)",
    "Electric-Flying":"linear-gradient(to right, orange, paleturquoise)",
    "Ground-Rock":    "linear-gradient(to right, sienna, brown)",
    "Rock-Ground":    "linear-gradient(to right, brown, sienna)",
    "Rock-Water":     "linear-gradient(to right, brown, rgb(5,91,172))",
    "Rock-Flying":    "linear-gradient(to right, brown, paleturquoise)",
    "Psychic-Fairy":  "linear-gradient(to right, palevioletred, lightpink)",
    "Grass-Psychic":  "linear-gradient(to right, limegreen, palevioletred)",
    "Ice-Flying":     "linear-gradient(to right, lightskyblue, paleturquoise)",
    "Ice-Psychic":    "linear-gradient(to right, lightskyblue, palevioletred)",
    "Ghost-Poison":   "linear-gradient(to right, indigo, purple)",
    "Dragon-Flying":  "linear-gradient(to right, darkblue, paleturquoise)",
};

const STAT_MAX = 255;

const overlay    = document.getElementById("popupOverlay");
const popupCard  = document.getElementById("popupCard");
const popupClose = document.getElementById("popupClose");
const popupImg   = document.getElementById("popupImg");
const popupStats = document.getElementById("popupStats");
const popupFav   = document.getElementById("popupFav");
const tabBase    = document.getElementById("tabBase");
const tab3D      = document.getElementById("tab3D");

let pokemonAtual = null;

function classeDosTipos(tipos) {
    return tipos.map(t => TIPO_CLASSE_POPUP[t] || t).join("-");
}

function aplicarGradiente(tipos) {
    const classe = classeDosTipos(tipos);
    const gradiente = GRADIENTE_POR_CLASSE[classe]
                   || GRADIENTE_POR_CLASSE[TIPO_CLASSE_POPUP[tipos[0]]]
                   || "radial-gradient(circle at top, #555, #222)";
    popupCard.style.background = gradiente;
}

function abrirPopup(pokemon) {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    pokemonAtual = pokemon;

    // Sincroniza botão fav do popup com localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (favoritos.includes(pokemon.id)) {
        popupFav.classList.add("favoritado");
    } else {
        popupFav.classList.remove("favoritado");
    }

    renderizarPopup(pokemon);
}

function fecharPopup() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
        popupImg.src = "";
        popupStats.innerHTML = "";
        popupCard.style.background = "";
        pokemonAtual = null;
        tabBase.classList.add("active");
        tab3D.classList.remove("active");
    }, 280);
}

function renderizarPopup(pokemon) {
    const tipos = pokemon.types.map(t => t.type.name);
    aplicarGradiente(tipos);
    trocarImagem("pixel");
    renderizarStats(pokemon.stats);
}

function trocarImagem(modo) {
    if (!pokemonAtual) return;
    const pixel   = pokemonAtual.sprites.front_default;
    const oficial = pokemonAtual.sprites.other["official-artwork"].front_default || pixel;

    popupImg.style.opacity = "0";
    setTimeout(() => {
        popupImg.src = modo === "pixel" ? pixel : oficial;
        popupImg.alt = pokemonAtual.name;
        popupImg.classList.toggle("modo-art", modo === "oficial");
        popupImg.style.opacity = "1";
    }, 180);
}

function renderizarStats(stats) {
    popupStats.innerHTML = "";
    const fills = [];

    stats.forEach((statObj) => {
        const config = STAT_CONFIG[statObj.stat.name];
        if (!config) return;

        const valor = statObj.base_stat;
        const pct   = Math.min((valor / STAT_MAX) * 100, 100);

        const row = document.createElement("div");
        row.classList.add("stat-row");
        row.innerHTML = `
            <span class="stat-label">${config.label}</span>
            <div class="stat-bar-track">
                <div class="stat-bar-fill ${config.classe}" style="width:0%"></div>
            </div>
            <span class="stat-value">${valor}</span>
        `;
        popupStats.appendChild(row);
        fills.push({ el: row.querySelector(".stat-bar-fill"), pct });
    });

    popupStats.getBoundingClientRect();
    fills.forEach(({ el, pct }, i) => {
        setTimeout(() => { el.style.width = pct + "%"; }, 80 + i * 80);
    });
}

function mostrarArteOficial() {
    trocarImagem("oficial");
    popupStats.innerHTML = `
        <p class="msg-3d">
            Arte oficial do pokémon.<br>
            <small>Clique em BASE para voltar às stats.</small>
        </p>`;
}

// Favorito no popup
popupFav.addEventListener("click", () => {
    if (!pokemonAtual) return;
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (favoritos.includes(pokemonAtual.id)) {
        favoritos = favoritos.filter(n => n !== pokemonAtual.id);
        popupFav.classList.remove("favoritado");
    } else {
        favoritos.push(pokemonAtual.id);
        popupFav.classList.add("favoritado");
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    // Atualiza botão no card também
    const card = document.querySelector(`[data-nome="${pokemonAtual.name}"]`);
    if (card) {
        const btnCard = card.querySelector(".btn-favorito");
        if (btnCard) btnCard.classList.toggle("favoritado", favoritos.includes(pokemonAtual.id));
    }
});

tabBase.addEventListener("click", () => {
    tabBase.classList.add("active");
    tab3D.classList.remove("active");
    if (pokemonAtual) {
        trocarImagem("pixel");
        renderizarStats(pokemonAtual.stats);
    }
});

tab3D.addEventListener("click", () => {
    tab3D.classList.add("active");
    tabBase.classList.remove("active");
    mostrarArteOficial();
});

overlay.addEventListener("click", (e) => { if (e.target === overlay) fecharPopup(); });
popupClose.addEventListener("click", fecharPopup);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) fecharPopup();
});

window.abrirPopup = abrirPopup;
