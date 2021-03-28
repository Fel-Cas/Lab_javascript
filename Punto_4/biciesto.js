anoBiciesto=(ano)=>{
    if((ano%4==0)&&(ano%100!=0)){
       return true; 
    }
    if((ano%100==0)&&(ano%400==0)){
         return true;
    }
    return false;
}

let boton=document.getElementById('boton');
boton.addEventListener(('click'),()=>{
    let year=document.getElementById('year').value;
    let yearNumber=parseInt(year);
    let respuesta=document.getElementById('respuesta');
    
    if(!isNaN(yearNumber)){
        if(!anoBiciesto(yearNumber)){
            respuesta.textContent=`El año ${yearNumber} no es  biciesto`;
            console.log(`El año ${yearNumber} no es  biciesto`);
            return
        }
        respuesta.textContent=`El año ${yearNumber} es  biciesto`;
        console.log(`El año ${yearNumber} es  biciesto`);
        return
    }
    respuesta.textContent="Entre un número";
    console.log('Entre un número');
});