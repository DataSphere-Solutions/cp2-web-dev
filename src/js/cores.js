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