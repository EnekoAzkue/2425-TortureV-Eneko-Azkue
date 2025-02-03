import globals from "./globals.js";
import {Game, FPS} from "./constants.js";
//import Timer from "./Timer.js";
import { keydownHandler, keyupHandler } from "./events.js";



//Funcion que inicializa los elementos HTML
function initHTMLelements()
{

    //Canvas, context Screen
    globals.canvas = document.getElementById('gameScreen');
    globals.ctx = globals.canvas.getContext('2d');

    //Eliminacion del Anti-Aliasing
    globals.ctx.imageSmoothingEnabled = false;

    //Caja de texto para pruebas
    globals.txtPruebas = document.getElementById('txtPruebas');

}

//Funcion que inicializa las variables del juego
function initVars()
{

    //Inicializamos las variables de gestion de tiempo 
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS; //Frame time in seconds

    //Inicializamos el estado del juego
    globals.gameState = Game.PLAYING;

    //Inicializamos los estados de las acciones
    globals.action = 
    {
        moveLeft:   false,
        moveRight:  false,
        moveUp:     false,
        moveDown:   false
    }

    globals.life = 3;
    globals.score = 0;

    globals.PosPlayer[0] = 9;
    globals.PosPlayer[1] = 8;

    const randomSpider = Math.floor((Math.random() * 4)+ 1)
    if (randomSpider === 1)
    {
        globals.PosSpider[0] = 2
        globals.PosSpider[1] = 2
    }
    else if (randomSpider === 2)
    {
        globals.PosSpider[0] = 16
        globals.PosSpider[1] = 2
    }
    
    else if (randomSpider === 3)
    {
        globals.PosSpider[0] = 2
        globals.PosSpider[1] = 11
    }
    else if (randomSpider === 4)
    {
        globals.PosSpider[0] = 16
        globals.PosSpider[1] = 11
    }

    const randomMoney = Math.floor((Math.random() * 6)+ 1)
    if (randomMoney === 1)
    {
        globals.PosMoney[0] = 3
        globals.PosMoney[1] = 2
    }
    else if (randomMoney === 2)
    {
        globals.PosMoney[0] = 15
        globals.PosMoney[1] = 2
    }
    
    else if (randomMoney === 3)
    {
        globals.PosMoney[0] = 2
        globals.PosMoney[1] = 10
    }
    else if (randomMoney === 4)
    {
        globals.PosMoney[0] = 15
        globals.PosMoney[1] = 11
    }
    else if (randomMoney === 5)
    {
        globals.PosMoney[0] = 10
        globals.PosMoney[1] = 2
    }
    else if (randomMoney === 6)
    {
        globals.PosMoney[0] = 5
        globals.PosMoney[1] = 5
    }

}



function initEvents()
{
    //Add the keyboard event listeners
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
}


//Exportamos las funciones 
export 
{
    initHTMLelements,
    initVars,
    initEvents
}