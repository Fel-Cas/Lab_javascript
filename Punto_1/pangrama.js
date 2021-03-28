Pangrama=(palabra)=>{
    let abecedario="abcdefghijklmnopqrstuvwxyzñ";
    abcArreglo=Array.from(abecedario);
    palabra=palabra.toLowerCase();
    console.log(palabra);
    for( let i in abcArreglo){
        let letra=abcArreglo[i];
       if(palabra.indexOf(letra)==-1){
            return false;
        }
        
    }
    return true;
}

let boton=document.getElementById('boton');
boton.addEventListener('click',()=>{
    let texto=document.getElementById('texto').value;
    let respuesta=document.getElementById('resultado');

        if(Pangrama(texto)){
            respuesta.innerHTML="La palabra es Pangrama";
            console.log("La palabra es Pangrama")
            return;
        }
        respuesta.innerHTML="La palabra no es Pangrama";
        console.log("La palabra no es Pangrama")
        return;
    
});



