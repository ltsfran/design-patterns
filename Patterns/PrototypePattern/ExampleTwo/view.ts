import { Duende } from './Duende';
import { Elfo } from './Elfo';
import { Orco } from './Orco';

let personajes = [];
personajes[0] = new Elfo();
personajes[1] = new Orco();
personajes[2] = new Duende();


let elfo1 = new Elfo();
let elfo2 = elfo1.clone();
console.log(elfo1, 'Elfo 1');
console.log(elfo2, 'Elfo 2');
console.log('');

if(elfo1 === elfo2) {
    console.log('Son iguales');
} else {
    console.log('No son iguales');
}

console.log('');

for(let personaje in personajes) {
    console.log('Creando ' + personajes[personaje].toString() + 's...');
    console.log('Con vida de: ' +  personajes[personaje].vida + ' y ataque de: ' + personajes[personaje].ataque);
    for(let i = 0; i < 3; i++) {
        console.log('Soy un ' + personajes[personaje].clone());
    }
    console.log('');
}