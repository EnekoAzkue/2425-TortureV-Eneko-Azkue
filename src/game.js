import globals from "./globals.js";
import {initHTMLelements, initEvents, initVars} from "./initialize.js";
import update from "./gameLogic.js";
import render from "./gameRender.js";
import { Game } from "./constants.js"; // Importamos los estados del juego


/////////////////////
// GAME INIT
/////////////////////

window.onload = init;


function init() {
    // Inicializamos los elementos de HTML: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    // Inicialización de variables del juego
    initVars();



    // Inicializamos eventos
    initEvents();

    // Estado inicial del juego
    globals.gameState = Game.PLAYING;

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);

    let random = Math.floor((Math.random() * 4) + 1);
}

/////////////////////
// GAME EXECUTE
/////////////////////

// Bucle principal de ejecución 
function gameLoop(timeStamp) 
{
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop, globals.canvas);

    // Tiempo real del ciclo de ejecución 
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliseconds) / 1000; // Segundos

    // Tiempo anterior del ciclo de ejecución 
    globals.previousCycleMilliseconds = timeStamp ;

    // Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo (frameTimeObj)
    globals.deltaTime += elapsedCycleSeconds;

    // CHANGES: Correcciones
    globals.cycleRealTime += elapsedCycleSeconds;

    // CHANGES: Correcciones
    if (globals.cycleRealTime >= globals.frameTimeObj) 
    {
        // Actualizar la lógica del juego. gameLogic.js
        update();

        // Dibujar el juego. gameRender.js
        render();

        // CHANGES
        // Corregimos los excesos de tiempo
        globals.cycleRealTime -= globals.frameTimeObj;
        globals.deltaTime = 0;
    }
}
