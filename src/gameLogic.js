import globals from "./globals.js";
import {Game} from "./constants.js";


export default function update()
{

    switch(globals.gameState)
    {
        case Game.PLAYING:
            playGame();
            break;

        case Game.OVER:
            gameOver();
            break;
            
        default:
            console.error("Error: Game State invalid");
    }
}

function playGame()
{
    updatePlayer();
    //updateSpider();

    //detectCollisionsPlayer();

    updateGameTime();

    updateLevelTime();
    updateLife();
    updateScore();
}

function gameOver()
{

}

//Funcion que actualiza el presonaje
function updatePlayer()
{
    //Aqui actualizariamos el estado de las variables del player
    let player = globals.PosPlayer;
    if (globals.action.moveLeft = true)
    {
        player[1] -= 1; 
        let isColision = checkCollisionLeft(player[0],player[1])

        if(isColision === true)
        {
            player[0] += 1; 

        } 
    }
    if (globals.action.moveRight = true)
    {
        
        player[1] += 1; 

    }
    if (globals.action.moveUp = true)
    {
        player[0] -= 1; 
        let isColision = checkCollisionUp(player[0],player[1])

        if(isColision === true)
        {
            player[1] += 1; 

        }   

    }
    if (globals.action.moveDown = true )
    {
        player[0] += 1; 
    }
    if(player[0] <= 1)
    {
        player[0] = 2;
    }
    if(player[0] >= 17)
    {
        player[0] = 16;
    }
    if(player[1] <= 1)
    {
        player[1] = 2;
    }
    if(player[1] >= 12)
    {
        player[1] = 11;
    }
}

function updateSpider()
{
    let spider = globals.PosSpider;

    if(globals.cycleRealTime > 1)
    {
        const random = Math.floor((Math.random() * 4)+ 1) 
        if (random === 1)
            {
                spider[0] -= 1 

            }
            else if (random === 2)
            {
                spider[0] += 1
            }
            
            else if (random === 3)
            {

                spider[1] -= 1
            }
            else if (random === 4)
            {

                spider[1] += 1
            }
    }
    if(spider[0] <= 1)
        {
            spider[0] = 2;
        }
        if(spider[0] >= 17)
        {
            spider[0] = 16;
        }
        if(spider[1] <= 1)
        {
            spider[1] = 2;
        }
        if(spider[1] >= 12)
        {
            spider[1] = 11;
        }
}




function updateGameTime()
{
    //Incrementamos el contador
    globals.gameTime += globals.deltaTime;

}

function updateLevelTime()
{
    //Incrementaremos el contador de cambio de valor
    globals.levelTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor de timer
    if (globals.levelTime.timeChangeCounter > globals.levelTime.timeChangeValue)
    {
        globals.levelTime.value--;

        //Resetearemos timeChangerCounter
        globals.levelTime.timeChangeCounter = 0;
    }
}

function updateLife()
{
    if ( globals.PosPlayer[0] === globals.PosSpider[0] && globals.PosPlayer[1] === globals.PosSpider[1])
    {
        if(globals.life <= 1)
        {
            globals.gameState = Game.OVER;
        }
        globals.life--;
        globals.PosPlayer[0] = 9;
        globals.PosPlayer[1] = 8;
        const random = Math.floor((Math.random() * 4)+ 1)
        if (random === 1)
        {
            globals.PosSpider[0] = 2
            globals.PosSpider[1] = 2
        }
        else if (random === 2)
        {
            globals.PosSpider[0] = 16
            globals.PosSpider[1] = 2
        }
        
        else if (random === 3)
        {
            globals.PosSpider[0] = 2
            globals.PosSpider[1] = 11
        }
        else if (random === 4)
        {
            globals.PosSpider[0] = 16
            globals.PosSpider[1] = 11
        }
    }
}

function updateScore()
{
    if ( globals.PosPlayer[0] === globals.PosMoney[0] && globals.PosPlayer[1] === globals.PosMoney[1])
        {
            globals.score += 100;

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
                globals.PosMoney[1] = 3
            }
            else if (randomMoney === 6)
            {
                globals.PosMoney[0] = 5
                globals.PosMoney[1] = 5
            }
        }
}
function checkCollisionUp(xPos, yPos)
{
    let xOcupied = globals.Pos1[0] - 1;
    let yOcupied = globals.Pos1[1] ;
    
    let isColision = false;
    if(xPos === xOcupied && yPos === yOcupied)
    {
        isColision = true;
        return isColision;
    }
    else
    {
        isColision = false;

        return isColision;
    }
}

function checkCollisionLeft(xPos, yPos)
{
    let xOcupied = globals.Pos6[0] ;
    let yOcupied = globals.Pos6[1] ;
    
    let isColision = false;
    if(xPos === xOcupied && yPos === yOcupied)
    {
        isColision = true;
        return isColision;
    }
    else
    {
        isColision = false;

        return isColision;
    }
}