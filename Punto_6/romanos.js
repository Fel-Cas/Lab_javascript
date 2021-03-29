romanNumbers=(numero)=>{
    let letras=['I','V','X','L','C','D','M'];// Número romanos
    let valores=[1,5,10,50,100,500,1000]// valor que representan
    let i=6,letra,respuesta=[] ,valor;
    while(i>=0){
        if(numero>=valores[i]){ 
            valor=valores[i];
            letra=letras[i];
            let n=Math.floor(numero/valor);
            numero-=n*valor;
            if(n<4){
                while(n>0){
                    respuesta.push(letra);
                    n--;
                }
            }else{
                tresSeguidos(letra,letras,respuesta);
            }   
        }
        i--;
        }
    return respuesta.join('');
}

tresSeguidos=(letra,letras,respuesta)=>{
    let posicion,ultimaLetra;
    if(respuesta==0){
        posicion=letras.indexOf(letra)+1;
    }else{
        ultimaLetra=respuesta.pop();
        posicion=(Math.abs(letras.indexOf(letra)-letras.indexOf(ultimaLetra))==1?letras.indexOf(ultimaLetra):letras.indexOf(letra))+1;
        if(Math.abs(letras.indexOf(letra)-letras.indexOf(ultimaLetra))>1){
            respuesta.push(ultimaLetra);
        }
    }
    
    respuesta.push(letra);
    respuesta.push(letras[posicion]);
}

let boton=document.getElementById('boton');
boton.addEventListener('click',()=>{  
    let entrada=document.getElementById('numero').value;
    let valor=parseInt(entrada);
    let res=document.getElementById('respuesta');
    let numeroConvertido=romanNumbers(valor);
    let mensaje=`El número ${valor} en romano es ${numeroConvertido}`;
    console.log(mensaje);
    res.textContent=mensaje;


});
