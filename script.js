// -----------------------GALERIA------------------
const fotos = [
    {
        imagem: "assets/pictures/coladin.jpeg",
        legenda: "Nós dois coladinhos quando ce veio pro carnaval ❤️"
    },

    {
        imagem: "assets/pictures/anonovo.jpeg",
        legenda: "Fotinha muito demorada do ano novo, mas bem lindona "
    },

    {
        imagem: "assets/pictures/forno.jpeg",
        legenda: "A gente no Forno Paulista comendo coisa gostosa e comemorando o meu aniversário :3"
    },

    {
        imagem: "assets/pictures/natal.jpeg",
        legenda: "Nosso primeiro natal em família de verdade! "
    },

    {
        imagem: "assets/pictures/iphome.jpeg",
        legenda: "Nossa fotinha comendo A MELHOR pizza de Teresina "
    },

    {
        imagem: "assets/pictures/sanpaolo.jpeg",
        legenda: "A gente voltando do nosso date e passando na San Paolo porque sim "
    },

    {
        imagem: "assets/pictures/mozaofeliz.jpeg",
        legenda: "Meu amor toda boba com as flores dela "
    }
];

// ---- monta uma galeria dentro de um elemento ----
function montarGaleria(elemento, lista) {
    for (const foto of lista) {
        elemento.innerHTML += `
    <figure>
        <img src="${foto.imagem}" alt="${foto.legenda}" loading="lazy"
             onerror="this.closest('figure').classList.add('sem-foto')">
        <figcaption>${foto.legenda}</figcaption>
    </figure>
`;
    }
}

montarGaleria(document.getElementById("galeria"), fotos);

//-----------------CONTADOR-----------------------
const contador = document.getElementById("contador");
const inicio = new Date("2022-04-25T00:00:00");

// Diferença "de calendário": anos, meses, dias, horas, minutos e segundos que
// sobraram (ex.: 4 anos, 5 meses e 29 dias), e não o total de cada unidade.
function calcularTempo(de, ate) {
    let anos = ate.getFullYear() - de.getFullYear();
    let meses = ate.getMonth() - de.getMonth();
    let dias = ate.getDate() - de.getDate();
    let horas = ate.getHours() - de.getHours();
    let minutos = ate.getMinutes() - de.getMinutes();
    let segundos = ate.getSeconds() - de.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        // empresta os dias do mês anterior ao de "ate"
        dias += new Date(ate.getFullYear(), ate.getMonth(), 0).getDate();
        meses--;
    }
    if (meses < 0) { meses += 12; anos--; }

    return { anos, meses, dias, horas, minutos, segundos };
}

function atualizar() {
    const t = calcularTempo(inicio, new Date());

    contador.innerHTML = `
        <h2>Quanto tempo do nosso amor?</h2>

        <div class="tempo">
            <div class="box">
                <span class="num">${t.anos}</span>
                <span class="label">${t.anos === 1 ? "ano" : "anos"}</span>
            </div>

            <div class="box">
                <span class="num">${t.meses}</span>
                <span class="label">${t.meses === 1 ? "mês" : "meses"}</span>
            </div>

            <div class="box">
                <span class="num">${t.dias}</span>
                <span class="label">${t.dias === 1 ? "dia" : "dias"}</span>
            </div>

            <div class="box">
                <span class="num">${t.horas}</span>
                <span class="label">${t.horas === 1 ? "hora" : "horas"}</span>
            </div>

            <div class="box">
                <span class="num">${t.minutos}</span>
                <span class="label">${t.minutos === 1 ? "minuto" : "minutos"}</span>
            </div>

            <div class="box">
                <span class="num">${t.segundos}</span>
                <span class="label">${t.segundos === 1 ? "segundo" : "segundos"}</span>
            </div>
        </div>
    `;
}

atualizar();
setInterval(atualizar, 1000);


//-----------------MÚSICAS-----------------------

// capas em assets/covers/ e áudios (mp3) em assets/musics/
// formato do disco: "classico" (preto), "rosa" (vinil rosinha), "roxo" (vinil roxo) ou "coracao" (disco em forma de coração)

const musicas = [
    {
        titulo: "Só Nós Dois",
        artista: "Tim Bernardes",
        capa: "assets/covers/m4.jpg",
        audio: "assets/musics/m4.mp3",
        formato: "coracao",
        link: "https://www.instagram.com/p/C3ecupoAnyp/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
    },
    {
        titulo: "BB (Garupa de Moto Amarela)",
        artista: "Tim Bernardes",
        capa: "assets/covers/m1.jpg",
        audio: "assets/musics/m1.mp3",
        formato: "coracao",
        link: null
    },
    {
        titulo: " Lisboa",
        artista: "ANAVITÓRIA, Lenine",
        capa: "assets/covers/m2.jpg",
        audio: "assets/musics/m2.mp3",
        formato: "rosa",
        link: null
    },
    {
        titulo: "Naise",
        artista: "Nina Oliveira",
        capa: "assets/covers/m3.jpg",
        audio: "assets/musics/m3.mp3",
        formato: "classico",
        link: null
    }
];

let albumAtual = null; // só uma música toca por vez (vale pras duas seções)
let pendente = null;   // álbum que tentou tocar antes do navegador liberar o som

function avisar(el, texto) {
    el.textContent = texto;
    el.hidden = false;
}

const CORACAO = "M50 88 C18 62 6 42 6 28 C6 15 16 7 28 7 C38 7 46 13 50 21 C54 13 62 7 72 7 C84 7 94 15 94 28 C94 42 82 62 50 88 Z";

function htmlDisco(m, id) {
    if (m.formato === "coracao") {
        const reduz = s => `transform="translate(50 47.5) scale(${s}) translate(-50 -47.5)"`;
        return `
            <div class="disco coracao">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                    <defs><clipPath id="miolo-${id}"><circle cx="50" cy="47.5" r="13"/></clipPath></defs>
                    <path d="${CORACAO}" fill="#ff5c8a"/>
                    <g fill="none" stroke="#ffb3cb" stroke-width="0.7">
                        <path d="${CORACAO}" ${reduz(0.88)}/>
                        <path d="${CORACAO}" ${reduz(0.74)}/>
                        <path d="${CORACAO}" ${reduz(0.6)}/>
                    </g>
                    <circle cx="50" cy="47.5" r="14.5" fill="#fff"/>
                    <image href="${m.capa}" x="37" y="34.5" width="26" height="26"
                           clip-path="url(#miolo-${id})" preserveAspectRatio="xMidYMid slice"/>
                    <circle cx="50" cy="47.5" r="2" fill="#ffe4ec"/>
                </svg>
            </div>`;
    }
    return `<div class="disco ${m.formato || "rosa"}"></div>`;
}

// ---- monta os discos de uma lista dentro de um elemento ----
// prefixo: deixa os ids do SVG únicos entre as seções
function criarDiscos(lista, container, avisoEl, prefixo) {
    for (const [i, m] of lista.entries()) {
        const album = document.createElement("div");
        album.className = "album";
        album.tabIndex = 0;
        album.setAttribute("role", "button");
        album.setAttribute("aria-label", `Tocar ${m.titulo}, de ${m.artista}`);
        album.style.setProperty("--capa", `url("${m.capa}")`);

        // se m.link existir, envolve a capa com <a>; senão, mostra só a capa
        const conteudoCapa = `
            <div class="capa-area">
                <div class="disco-pos">${htmlDisco(m, prefixo + i)}</div>
                <div class="capa"><img src="${m.capa}" alt="Capa de ${m.titulo}" onerror="this.remove()"></div>
            </div>
        `;

        album.innerHTML = `
            ${m.link ? `<a href="${m.link}" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; display: block;">${conteudoCapa}</a>` : conteudoCapa}
            <div class="album-info">
                <strong>${m.titulo}</strong>
                <span>${m.artista}</span>
            </div>
        `;

        const audio = new Audio(m.audio);
        audio.loop = true;
        audio.preload = "none";

        // arquivo não encontrado / formato inválido
        audio.addEventListener("error", () => {
            album.classList.remove("tocando");
            avisar(avisoEl, `Erro ao abrir "${m.audio}"`);
        });

        function tocar() {
            if (albumAtual && albumAtual !== album) albumAtual.parar();
            albumAtual = album;
            audio.play()
                .then(() => {
                    album.classList.add("tocando");
                    avisoEl.hidden = true;
                    if (pendente === album) pendente = null;
                })
                .catch(err => {
                    album.classList.remove("tocando");
                    if (err.name === "AbortError") return; // tirou o mouse antes de começar
                    if (err.name === "NotAllowedError") {
                        pendente = album;
                        avisar(avisoEl, "O navegador bloqueou o som. Dê um clique em qualquer lugar da página e depois é só passar o mouse.");
                    }
                });
        }

        function parar() {
            audio.pause();
            album.classList.remove("tocando");
            if (pendente === album) pendente = null;
        }

        album.tocar = tocar;
        album.parar = parar;

        let ultimoPonteiro = "mouse";

        album.addEventListener("pointerenter", e => {
            ultimoPonteiro = e.pointerType;
            if (e.pointerType === "mouse") tocar();
        });
        album.addEventListener("pointerleave", e => {
            if (e.pointerType === "mouse") parar();
        });
        album.addEventListener("click", () => {
            if (audio.paused) tocar();
            else if (ultimoPonteiro !== "mouse") parar();
        });
        album.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                audio.paused ? tocar() : parar();
            }
        });

        container.appendChild(album);
    }
}

criarDiscos(musicas, document.getElementById("discos"), document.getElementById("aviso-som"), "m");

// No primeiro clique em qualquer lugar, o navegador libera o som:
// se o mouse estiver em cima de um disco que tinha sido bloqueado, ele começa a tocar.
document.addEventListener("pointerdown", () => {
    if (pendente && pendente.matches(":hover")) pendente.tocar();
});

//-----------------BTS-----------------------

const musicasBts = [
    {
        titulo: "Black Swan",
        artista: "BTS",
        capa: "assets/bts/c1.jpg",
        audio: "assets/bts/m1.mp3",
        formato: "coracao",
        link: null
    },
    {
        titulo: "Dimple",
        artista: "BTS",
        capa: "assets/bts/c2.jpg",
        audio: "assets/bts/m2.mp3",
        formato: "roxo",
        link: null
    },
    {
        titulo: "Hooligan",
        artista: "BTS",
        capa: "assets/bts/c3.jpg",
        audio: "assets/bts/m3.mp3",
        formato: "classico",
        link: null
    }
];

criarDiscos(musicasBts, document.getElementById("discos-bts"), document.getElementById("aviso-som-bts"), "bts");
montarGaleria(document.getElementById("galeria-bts"), fotosBts);