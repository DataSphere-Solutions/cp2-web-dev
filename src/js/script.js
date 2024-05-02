// window.alert('Seja bem-vindo')

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