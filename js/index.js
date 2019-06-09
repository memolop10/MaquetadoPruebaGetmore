
var imagenes = ['img/group-10.png','img/ball-color-court-1405355.png','img/gokuCarrusel.jpg'],
    cont = 0;

    function carrusel(BallSection){

        BallSection.addEventListener('click',e =>{
            let atras = BallSection.querySelector('.atras'),
                adelante = BallSection.querySelector('.adelante'),
                img = BallSection.querySelector('.ImgSlides'),

                tgt = e.target;

                if (tgt == atras) {
                    if (cont > 0) {
                        img.src = imagenes[cont-1];
                        cont--;
                    }else{
                        img.src = imagenes[imagenes.length - 1];
                        cont = imagenes.length -1;
                    }
                    
                } else if( tgt = adelante){
                    if (cont < imagenes.length - 1) {
                        img.src = imagenes[cont+1];
                        cont++;
                    }else{
                        img.src = imagenes[0];
                        cont = 0;
                    }
                    
                }
        })


    }

    document.addEventListener("DOMContentLoaded",() => {
       let ball = document.querySelector('.BallSection');

       carrusel(ball);
    });