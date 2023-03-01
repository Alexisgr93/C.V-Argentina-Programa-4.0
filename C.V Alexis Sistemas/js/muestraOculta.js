window.addEventListener('load', init, false);
        function init() {
            let div = document.querySelector('#ocultar-y-mostrar');
            div.style.visibility = 'hidden';

            //parte escrita
            div.style.height = "60px";
            document.body.style.marginTop = "20%"; //body
            let a = document.getElementById("ocultar-mostrar");

            let muestra = document.querySelector("#muestra-seccion");
            muestra.style.visibility = "visible";
            
            let boton = document.querySelector('#ocultar-mostrar');
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'hidden'){
                    div.style.visibility = 'visible';

                    muestra.style.visibility = "hidden";
                    muestra.style.height = "0px";

                    //parte escrita
                    div.style.height = "80%";
                    document.body.style.marginTop = "0px"; //margen top body vuelva
                    a.innerHTML = "Ocultar";
                    
                    
                }else{
                    div.style.visibility = 'hidden';

                    //parte escrita
                    div.style.height = "60px";
                    document.body.style.marginTop = "20%"; //body
                    a.innerHTML = "Mostrar";
                    
                }
            }, false);
        }