
const envioDatos = () => {
    
    let email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
    let valor = document.getElementById("dato");
    if(!email.test(valor.value)){
      document.getElementById("error").style.display = "block";
	}
	else {
        document.getElementById("error").style.display = "none";
        document.getElementById('dato').value="";
    };
    
}

const boton = document.getElementById("enviar");
boton.addEventListener("change", envioDatos)