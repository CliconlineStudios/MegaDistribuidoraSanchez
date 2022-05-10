
function inicio() {
    document.getElementById("screen1").style.display = "block";	
    document.getElementById("screen2").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=0;
}



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("screen1"),
    contador=0;


function catalogos() {

if (contador==0) {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    contador=1;
}
}


function back() {

    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
    }
    else{
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
    }
    
    }

   //    menu laterl 

   var btns = document.getElementById("inicio"),
   informacion = document.getElementById("infomacion"),
   conta=0;

   function sidebar()  {

       if (conta==0) {
           document.getElementById("side").style.display = "block";
           conta=1;
       }
       else{
           document.getElementById("side").style.display = "none";
           conta=0;
       }
       }

       function cerrarside() {
           document.getElementById("side").style.display = "none";
           conta=0;
           
       }
 

    document.querySelector('.boton')   
    .addEventListener('click',()=>{
     window.scrollTo({
     top: 0,
     behavior: 'smooth'
    });
    });
   
    document.querySelector('.back')   
    .addEventListener('click',()=>{
     window.scrollTo({
     top: 0,
     behavior: 'smooth'
    });
    });



