class Personaje {
  // Atributos existentes...
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;    
    this.inventario = ["bumerang", "batipistolas"];
  }  
  correr(distancia) {
    return (this.energia = this.energia - distancia);
  }

  descansar(tiempo) {
    // Incrementa la energía en función del tiempo de descanso.
    // Por ejemplo, cada unidad de tiempo incrementa 2 puntos de energía.
    return (this.energia = this.energia + tiempo * 2);
  }

  addItem(item) {
    // Añade un ítem al inventario.
    this.inventario.push(item);
    console.log(`${this.nombre} agregó un elemento a su inventario y ahora tiene lo  siguiente ${this.inventario}`);
  }

  removerItem(item) {
    // Remueve un ítem del inventario.    
    for (let index = 0; index < this.inventario.length; index++) {
      if (item == this.inventario[index]) {
        this.inventario.splice(index,1);
        console.log(`El elemento ${item} ha sido removido del inventario, ahora solo te queda ${this.inventario}`);
        // break;
      }
    }    
  }
}

const Batman = new Personaje("Batman", 100);
let correr = 50;
let descansar = 5;

console.log(`${Batman.nombre} tiene una energia de ${Batman.energia} puntos`);
console.log(
  `${Batman.nombre} corriò ${correr} kms y redujo su energia en ${Batman.correr(
    correr
  )}  puntos`
);

console.log(
  `${
    Batman.nombre
  } descansó ${descansar} minutos y ahora tiene una energia de ${Batman.descansar(
    5
  )} puntos`
);

class Enemigo {
  constructor(nombre, energia) {
    this.nombre = nombre;
    this.energia = energia;
  }

  atacar(personaje, golpes) {
    //console.log(`${personaje.nombre} fue golpeado y ahora tiene ${
    personaje.correr(golpes);
    //} de energía`);
  }

  recibirDaño(daño) {
    // Reduce la propia energía en función del daño recibido.
    this.energia = this.energia - daño;
    // console.log(`El ${Guason.nombre} ha sido contraatacado y perdio ${daño} puntos de energia, por lo que ahora solo le restan ${this.energia} puntos de energia`);
  }
}

const Guason = new Enemigo("Guason", 100);

let golpesEnemigo = 5;

console.log(
  `El ${Guason.nombre} tiene una energia de ${Guason.energia} puntos`
);
console.log(`El ${Guason.nombre} va a pelar contra ${Batman.nombre}`);
console.log(
  `El ${Guason.nombre} va a atacar a ${Batman.nombre} dandole ${golpesEnemigo} golpes`
);

Guason.atacar(Batman, golpesEnemigo);

console.log(
  `${Batman.nombre} se defiende y va a contraatcar a ${Guason.nombre} quitandole 50 puntos a su energia actual que es de ${Guason.energia} puntos`
);

Guason.recibirDaño(50);

function pelear(personaje1, personaje2) {
  // Implementa la lógica de la pelea, donde cada uno ataca por turnos.
  // La pelea termina cuando la energía de uno de los personajes es 0.

  // Guason ataca
  if (personaje2.energia > 0) {
    personaje2.atacar(personaje1, 1);
    console.log(
      `${personaje1.nombre} fue atacado y perdio 1 punto de energia ahora le restan ${personaje1.energia} puntos`
    );
    // Batman ataca
    if (personaje1.energia > 0) {
      personaje2.recibirDaño(1);
      console.log(
        `${personaje2.nombre} es atacado por ${personaje1.nombre} y ha perdido un punto de energia ahora le restan ${personaje2.energia} puntos`
      );
    }
  }
}

while (Batman.energia > 0 && Guason.energia > 0) {
  pelear(Batman, Guason);
}
console.log(`${Batman.nombre} tiene el siguiente inventario: ${Batman.inventario}`);

Batman.addItem("baticinturon");
Batman.removerItem("batipistolas");