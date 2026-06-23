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

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30) - 1);

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    contador.innerHTML = `
        <h2>Quanto tempo do nosso amor?</h2>
        <p>
            ${anos} anos<br>
            ${meses} meses<br>
            ${dias} dias<br>
            ${horas} horas<br>
            ${minutos} minutos<br>
            ${segundos} segundos
        </p>
    `;
}

atualizar();
setInterval(atualizar, 1000);