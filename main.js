let prim = 0;
let seg = 0;
let aux = 0;

let ordem = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];


for (let i = 0; i < ordem.length; i++) {
    for (let j = 0; j < i; j++) {
    prim = ordem[i];
    seg = ordem[j];
  if(prim < seg){
    aux = prim;
    ordem[i] = seg;
    ordem[j] = aux;
}
     } 
    }
    
console.log(ordem);
