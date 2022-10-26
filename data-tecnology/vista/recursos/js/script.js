
let menu=document.getElementById("menu");
let menu_bar=document.getElementById("menu-bar");
let user=document.querySelector(".user");
let hero=document.querySelector(".hero");
let siguiente_validar=document.querySelector(".siguiente");
let val=true;
let mostrar_menu=false;

hero.addEventListener("click",()=>{
if(mostrar_menu){
   menu.classList.remove('menu-toogle');
   siguiente_validar.classList.remove('siguiente-validar');
  mostrar_menu=false;
}
});

menu_bar.addEventListener("click",(evt)=>{
   if(val){
    //creamos un etiqueta html div
   let  div=document.createElement("DIV")
   //agregamos una clase a la equeta div creada
    div.classList.add("user-login");
     //agregamos contenido de user en el div creado
    div.innerHTML=user.innerHTML;
    //creamos un fragmento de documento
    const fragmento=document.createDocumentFragment();
    //agregamos el div creado en el fragmento del documento
     fragmento.appendChild(div);   
     //agregamos el fragmento de documento al menu
    menu.appendChild(fragmento);
    val=false;
   }
     //si la clase existe lo elimina y si no existe lo agrega
   
 mostrar_menu= menu.classList.toggle('menu-toogle');


});


/*****************************para mostrar el up************************ */
let up=document.querySelector(".up");

window.addEventListener("scroll",()=>{


let y = window.scrollY;
if(y>100){
  up.classList.add('up-mostrar');
}else{
if(up.classList.contains('up-mostrar')){
  up.classList.remove('up-mostrar');
}

}


});