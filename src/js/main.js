window.alert('Seja bem-vindo')

// SlideShow Automático
let imagens=['./src/assets/img/bike1.png','./src/assets/img/bike2.jpg','./src/assets/img/bike3.jpg', './src/assets/img/bike4.jpg'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

// Função que alterna entre 3 cores de fundo do index
function mudarCor() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const cores = ['rgb(160, 21, 240)', 'rgb(240, 132, 219)', 'rgb(139, 129, 240)'];
    const corAleatoria = cores[getRandomInt(3)];
    document.body.style.backgroundColor = corAleatoria;
}

window.addEventListener('load', function() {
    setInterval(function() {
        mudarCor();
    }, 2000);
});