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

