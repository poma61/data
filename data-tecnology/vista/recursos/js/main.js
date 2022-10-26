
/** ******************************************para el slider*****************************/
let slider=document.querySelector(".contenedor-info");
let sliderIndividual=document.querySelectorAll(".info-content");
let contador=1;
//primer elemento del contenido-slider
//clientWidth->agarra si width
let width=sliderIndividual[0].clientWidth;
let intervalo =4000;


//cada vez que el usuario modifique el tamaño de la ventana
//se ejecutara este evento
//para que se adapte al cambiar de tamaño la ventana
window.addEventListener("resize",()=>{
    // se actualizara el width
width=sliderIndividual[0].clientWidth;
//si cambia el tamaño de la ventana vuelve a reiniciar el slider

slider.style.transform="translateX(0px)";
slider.style.transition="transform 0s";
contador=1; 
});


function slides(){
slider.style.transform="translateX("+(-width*contador)+"px)";
slider.style.transition="transform 1s"; 
contador++;
//si contador esta en el ultimo elemento
if(contador==sliderIndividual.length){
setTimeout(function(){
    //para que vuelva en el punto donde estaba 
    slider.style.transform="translateX(0px)";
    slider.style.transition="transform 0s";
    contador=1; 

},1000);
}
}
//para verificar se apreto next o back
let active_play=true;
setInterval(function(){
   if(active_play){
    slides(); 
   } 
 
},intervalo);


/************************************* para cambiar play next or back***************************************************** */
function slides_play(){
    slider.style.transform="translateX("+(-width*contador)+"px)";
    slider.style.transition="transform 0.2s"; 
    contador++;
    //si contador esta en el ultimo elemento
    if(contador==sliderIndividual.length){
    setTimeout(function(){
        //para que vuelva en el punto donde estaba 
        slider.style.transform="translateX(0px)";
        slider.style.transition="transform 0s";
        contador=1; 
    
    },200);
    }
    }
 //controla si se preciono el boton next
 // si no se preciono el boton next entonces comienza con la animacion
 setInterval(function(){
    if(!active_play){   
        active_play=true;
    }
},4000);


let next=document.querySelector(".siguiente");
 next.addEventListener("click",()=>{
    active_play=false;
 if(!active_play){
    slides_play();

 }
 });


 let back=document.querySelector(".atras");
 back.addEventListener("click",()=>{
    active_play=false;
 if(!active_play){
    slides_play();

 }
 });



