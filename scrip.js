function efectoHabilidades(){
    var datosacademicos = document.getElementById("datosacademicos"); 
    var distancia_datosacademicos = window.innerHeight - datosacademicos.getBoundingClientRect().top;
    
    if (distancia_datosacademicos >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript"); 
        habilidades[1].classList.add("htmlcss"); 
        habilidades[2].classList.add("java"); 
        habilidades[3].classList.add("mysql"); 
        habilidades[4].classList.add("postgresql"); 
        habilidades[5].classList.add("comunicacion"); 
        habilidades[6].classList.add("trabajo"); 
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyecto"); 
        
    }
}

// Llama la función en el evento scroll
window.onscroll = function() {
    efectoHabilidades();
}
