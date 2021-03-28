let elementos = [1,1,3,5,6,4,9,5,3,5,7,9,0,1];
let elementos1=[1, 2, 3, 1, 3];
Repetidos=(lista)=>{
    for(let i in lista ){
        let temporal=lista.slice();
        let valor=temporal[i];
        temporal.splice(i,1);
        if(temporal.indexOf(valor)==-1) lista.splice(i,1);         
    }
    return lista;
}

console.log(Repetidos(elementos1));