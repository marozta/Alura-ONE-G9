let numeroSecreto = 0;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 0;

let tuNombre = prompt('Hola, ingresa tu nombre');
let mayorNumero = parseInt(prompt('¿Cual es el mayor número permitido en el juego?'));
maximoIntentos = parseInt(prompt('¿Cual es la cantidad máxima de intentos permitidos para adivinar?'));

numeroSecreto = Math.floor(Math.random() * mayorNumero) + 1;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Por favor ${tuNombre}, ingresa un número entre 1 y ${mayorNumero}.`));

    if (numeroUsuario == numeroSecreto) {
        alert(`Felicitaciones ${tuNombre}, el número secreto es ${numeroUsuario}. Lo has adivinado en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}. `);
                
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor.");
        } else {
            alert("El número secreto es mayor.");   
        }
        intentos++;

        if (intentos > maximoIntentos) {
            alert(`Lamentablemente ${tuNombre} llegaste a la cantidad máxima de ${maximoIntentos} intentos.`);
            break;
        }
    }
}
