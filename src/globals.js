//Variables globales
import {Game} from "./constants.js";

export default 
{
    //Acceso al canvas y context
    canvas: {},
    ctx: {},
    canvasHUD: {},
    ctxHUD: {},

    //Estado de juego. Inicializamos a INVALIDO
    gameState: Game.INVALID,

    //Tiempo de ciclo de juego real(seconds)
    previousCycleMilliseconds: -1,

    //Timepo de ciclo real(seconds)
    cycleRealTime: 0,

    //Diferencia de tiempo(seconds)
    deltaTime: 0,

    //Tiempo de ciclo objetivo(seconds, constante)
    frameTimeObj: 0,

    //Timepo de juego
    gameTime: -1,
    
    //Temporizacion nivel
    levelTime: {},

    //Objeto que guarda el estado de la tecla pulsada
    action: {},

    //Life
    life: 0,

    //Score
    score: 0,

    //Player position
    PosPlayer: [0,0],

    //Spider position
    PosSpider: [0,0],

    //Money positin
    PosMoney: [0,0],

    
    //Wall positions [x,y]
    Pos1:   [8  ,2],
    Pos2:   [9  ,2],
    Pos3:   [10 ,2],
    Pos4:   [4  ,3],
    Pos5:   [5  ,3],
    Pos6:   [6  ,3],
    Pos7:   [12 ,3],
    Pos8:   [13 ,3],
    Pos9:   [14 ,3],
    Pos10:  [3  ,4],
    Pos11:  [6  ,4],
    Pos12:  [7  ,4],
    Pos13:  [8  ,4],
    Pos14:  [10 ,4],
    Pos15:  [11 ,4],
    Pos16:  [12 ,4],
    Pos17:  [15 ,4],
    Pos18:  [7  ,5],
    Pos19:  [11 ,5],
    Pos20:  [3  ,6],
    Pos21:  [4  ,6],
    Pos22:  [9  ,6],
    Pos23:  [14 ,6],
    Pos24:  [15 ,6],
    Pos25:  [3  ,7],
    Pos26:  [4  ,7],
    Pos27:  [9  ,7],
    Pos28:  [14 ,7],
    Pos29:  [15 ,7],
    Pos30:  [7  ,8],
    Pos31:  [11 ,8],
    Pos32:  [4,9],
    Pos33:  [6,9],
    Pos34:  [7,9],
    Pos35:  [8,9],
    Pos36:  [10,9],
    Pos37:  [11,9],
    Pos38:  [12,9],
    Pos39:  [14,9],
    Pos40:  [3,10],
    Pos41:  [4,10],
    Pos42:  [6,10],
    Pos43:  [12,10],
    Pos44:  [14,10],
    Pos45:  [15,10],
    Pos46:  [8,11],
    Pos47:  [9,11],
    Pos48:  [10,11],
};