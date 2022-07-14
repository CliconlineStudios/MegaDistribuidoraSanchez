
function inicio() {
    document.getElementById("screen1").style.display = "block";	
    document.getElementById("screen2").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=0;
}



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("screen1"),
    contador=0;


function insumos() {
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "block";
        document.getElementById("back").style.display = "block";
        document.getElementById("side").style.display = "none";
        contador=1;
        conta=0;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
           }); 
    }


function infantil() {


    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("back").style.display = "block";
    document.getElementById("side").style.display = "none";
    contador=1;
    conta=0;
}

function contac() {

 
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("back").style.display = "block";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "block";
        contador=1;
        conta=0;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
           }); 
    
    }



function back() {

    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        contador=0;
    }
    else{
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
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
 
// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });
   
    document.querySelector('.back')   
    .addEventListener('click',()=>{
     window.scrollTo({
     top: 0,
     behavior: 'smooth'
    });
    });

// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593959907464";
  
    let cliente = document.querySelector("#cliente").value;
    let venta = document.querySelector("#venta").value;
    let productos = document.querySelector("#productos1").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Mega Distribuidora Sánchez*%0A
          *Datos del Contacto*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Categoría*%0A
          ${venta}%0A
          *Busco*%0A
          ${productos}%0A`;
  
    if (cliente === "" || venta === "" || productos === ""  ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Tu Msj Fue Enviada, ${cliente}`;
  
    window.open(url);
  });
  

//ALERTAS>
  function save(){
    let url = `https://drive.google.com/u/0/uc?id=1F7gt7gsCsCUoeuyCLR4UXV5Ty2zncell&export=download`;
    window.open(url); 
   }
  
  function ftuser() {
      Swal.fire({
          title: 'Yesenia Sánchez',
          text: 'Directora Ejecutiva',
          imageUrl: 'img/Logo transp.Mega.png',
          imageWidth: 150,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
    
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
  
  
  
  function msj2() {
    Swal.fire({
      icon: 'info',
      title: 'Traducir a Ingles',
      text: 'Opción Disponible Próximamente',
      footer: 'Tarjeta De Presentación'
    });
  
   
  }

