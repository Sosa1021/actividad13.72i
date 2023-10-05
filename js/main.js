const animalesMezclados = ["perro", "perro", "sapo", "gato", "gato", "sapo", "perro", "gato", "sapo", "gato"];

animalesMezclados.filter(animal => animal === 'perro').map (perro => console.log("Guau"));
animalesMezclados.filter(animal => animal === 'gato').map (gato => console.log("Miau"));
animalesMezclados.filter(animal => animal === 'sapo').map(sapo => console.log("Werep"));