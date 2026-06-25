// -----------------------GALERIA------------------
const fotos = [
    {
        imagem: "assets/coladin.jpeg",
        legenda: "Nós dois coladinhos quando c veio pro carnaval ❤️"
    },

    {
        imagem: "assets/anonovo.jpeg",
        legenda: "Fotinha muito demorada do ano novo, mas bem lindona "
    },

    {
        imagem: "assets/forno.jpeg",
        legenda: "A gente no Forno Paulista comendo coisa gostosa e comemorando o meu aniversário :3"
    },

    {
        imagem: "assets/natal.jpeg",
        legenda: "Nosso primeiro natal em família de verdade! "
    },

    {
        imagem: "assets/iphome.jpeg",
        legenda: "Nossa fotinha comendo A MELHOR pizza de Teresina "
    },

    {
        imagem: "assets/sanpaolo.jpeg",
        legenda: "A gente voltando do nosso date e passando na San Paolo porque sim "
    },

    {
        imagem: "assets/mozaofeliz.jpeg",
        legenda: "Meu amor toda boba com as flores dela "
    }
];

const galeria = document.getElementById("galeria")

for(const foto of fotos){
    galeria.innerHTML +=`
    <figure>
        <img src ="${foto.imagem}">
        <figcaption>${foto.legenda}</figcaption>
    </figure>
` 
}

//-----------------CONTADOR-----------------------
const contador = document.getElementById("contador");
const inicio = new Date("2022-04-25T10:00:00");

function atualizar() {
    const agora = new Date();
    const diff = agora - inicio;

    const anos = agora.getFullYear() - inicio.getFullYear();

    let meses =
        (agora.getFullYear() - inicio.getFullYear()) * 12 +
        (agora.getMonth() - inicio.getMonth());

    if (agora.getDate() < inicio.getDate()) {
        meses--;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    contador.innerHTML = `
        <h2>Quanto tempo do nosso amor?</h2>

        <div class="tempo">
            <div class="box">
                <span class="num">${anos}</span>
                <span class="label">anos</span>
            </div>

            <div class="box">
                <span class="num">${meses}</span>
                <span class="label">meses</span>
            </div>

            <div class="box">
                <span class="num">${dias}</span>
                <span class="label">dias</span>
            </div>

            <div class="box">
                <span class="num">${horas}</span>
                <span class="label">horas</span>
            </div>

            <div class="box">
                <span class="num">${minutos}</span>
                <span class="label">minutos</span>
            </div>

            <div class="box">
                <span class="num">${segundos}</span>
                <span class="label">segundos</span>
            </div>
        </div>
    `;
}

atualizar();
setInterval(atualizar, 1000);