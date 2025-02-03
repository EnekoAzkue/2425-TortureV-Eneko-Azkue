import globals from "./globals.js";
import { Game } from "./constants.js";

export default function render()
{

    //Change what the game is doing based on the game state
    switch(globals.gameState)
    {
        case Game.OVER:
            drawOver();
            break;

        case Game.PLAYING:
            drawGame();
            break;
    }
}

function drawGame()
{
    let score = globals.score;

    //Borramos la pantalla entera 
    globals.ctx.clearRect(0, 0, globals.canvas.width, globals.canvas.height);

    //Draw score
    globals.ctx.font = '12px emulogic';
    globals.ctx.fillStyle = 'white';
    globals.ctx.fillText("SCORE:", 34, 20);

    globals.ctx.fillText("" + score, 105, 20);

    //Draw life
    globals.ctx.font = '14px emulogic';
    //globals.ctx.fillText("\u{1F49A}", 300, 20);
    for(let i = 0; i < globals.life; i++)
    {
        globals.ctx.fillText("\u{1F49A}", 251 + (16 * i), 20);
    }
    

    //Draw player
    let xPosPlayer = globals.PosPlayer[0]; 
    let yPosPlayer = globals.PosPlayer[1];

    globals.ctx.fillText("\u{1F474}", 19 + (xPosPlayer*16), 24 + (yPosPlayer*16));   


    //Draw spider
    let random = Math.floor((Math.random() * 4) + 1);
    globals.ctx.fillText("\u{1F577}", 19 + (globals.PosSpider[0]*16), 24 + (globals.PosSpider[1]*16));   

    //Draw money
    let xPosMoney = globals.PosMoney[0];
    let yPosMoney = globals.PosMoney[1];
    globals.ctx.fillText("\u{1F4B5}", 19 + (xPosMoney*16), 24 + (yPosMoney*16));   

    drawMap();

}

function drawOver()
{

    globals.ctx.fillStyle = "blue"
    globals.ctx.beginPath(); // Start a new path
    globals.ctx.rect(97, 98, 150, 30); // Add a rectangle to the current path
    globals.ctx.fill(); // Render the path

    globals.ctx.font = '12px emulogic';
    globals.ctx.fillStyle = 'white';
    globals.ctx.fillText("GAME OVER", 117, 119);

}

function drawMap()
{
    //Draw wall
    for(let i = 0; i < 17; i++)
        {
    
            globals.ctx.fillText("\u{2B1C}", 35 + (i*16), 40);    
        }
        for(let i = 0; i < 11; i++)
        {
    
            globals.ctx.fillText("\u{2B1C}", 35 , 56 + (i*16));    
        }
        for(let i = 0; i < 15; i++)
        {
    
            globals.ctx.fillText("\u{2B1C}", 51 + (i*16), 216);    
        }
        for(let i = 0; i < 11; i++)
        {
    
            globals.ctx.fillText("\u{2B1C}", 291 , 56 + (i*16));    
        }

        //Wall1
        let xPos1 = globals.Pos1[0];
        let yPos1 = globals.Pos1[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos1*16), 24 + (yPos1*16));   
        //Wall2
        let xPos2 = globals.Pos2[0];
        let yPos2 = globals.Pos2[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos2*16), 24 + (yPos2*16));   
        //Wall3
        let xPos3 = globals.Pos3[0];
        let yPos3 = globals.Pos3[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos3*16), 24 + (yPos3*16));  
        //Wall4
        let xPos4 = globals.Pos4[0];
        let yPos4 = globals.Pos4[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos4*16), 24 + (yPos4*16));  
        //Wall5
        let xPos5 = globals.Pos5[0];
        let yPos5 = globals.Pos5[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos5*16), 24 + (yPos5*16));  
        //Wall6
        let xPos6 = globals.Pos6[0];
        let yPos6 = globals.Pos6[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos6*16), 24 + (yPos6*16));  
        //Wall7
        let xPos7 = globals.Pos7[0];
        let yPos7 = globals.Pos7[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos7*16), 24 + (yPos7*16));  
        //Wall8
        let xPos8 = globals.Pos8[0];
        let yPos8 = globals.Pos8[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos8*16), 24 + (yPos8*16));  
        //Wall9
        let xPos9 = globals.Pos9[0];
        let yPos9 = globals.Pos9[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos9*16), 24 + (yPos9*16));  
        //Wall10
        let xPos10 = globals.Pos10[0];
        let yPos10 = globals.Pos10[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos10*16), 24 + (yPos10*16));
        //Wall11
        let xPos11 = globals.Pos11[0];
        let yPos11 = globals.Pos11[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos11*16), 24 + (yPos11*16));   
        //Wall12
        let xPos12 = globals.Pos12[0];
        let yPos12 = globals.Pos12[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos12*16), 24 + (yPos12*16));   
        //Wall13
        let xPos13 = globals.Pos13[0];
        let yPos13 = globals.Pos13[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos13*16), 24 + (yPos13*16));  
        //Wall14
        let xPos14 = globals.Pos14[0];
        let yPos14 = globals.Pos14[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos14*16), 24 + (yPos14*16));  
        //Wall15
        let xPos15 = globals.Pos15[0];
        let yPos15 = globals.Pos15[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos15*16), 24 + (yPos15*16));  
        //Wall16
        let xPos16 = globals.Pos16[0];
        let yPos16 = globals.Pos16[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos16*16), 24 + (yPos16*16));  
        //Wall17
        let xPos17 = globals.Pos17[0];
        let yPos17 = globals.Pos17[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos17*16), 24 + (yPos17*16));  
        //Wall18
        let xPos18 = globals.Pos18[0];
        let yPos18 = globals.Pos18[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos18*16), 24 + (yPos18*16));  
        //Wall19
        let xPos19 = globals.Pos19[0];
        let yPos19 = globals.Pos19[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos19*16), 24 + (yPos19*16));  
        //Wall20
        let xPos20 = globals.Pos20[0];
        let yPos20 = globals.Pos20[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos20*16), 24 + (yPos20*16));   
        //Wall1
        let xPos21 = globals.Pos21[0];
        let yPos21 = globals.Pos21[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos21*16), 24 + (yPos21*16));   
        //Wall2
        let xPos22 = globals.Pos22[0];
        let yPos22 = globals.Pos22[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos22*16), 24 + (yPos22*16));   
        //Wall3
        let xPos23 = globals.Pos23[0];
        let yPos23 = globals.Pos23[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos23*16), 24 + (yPos23*16));  
        //Wall4
        let xPos24 = globals.Pos24[0];
        let yPos24 = globals.Pos24[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos24*16), 24 + (yPos24*16));  
        //Wall5
        let xPos25 = globals.Pos25[0];
        let yPos25 = globals.Pos25[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos25*16), 24 + (yPos25*16));  
        //Wall6
        let xPos26 = globals.Pos26[0];
        let yPos26 = globals.Pos26[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos26*16), 24 + (yPos26*16));  
        //Wall7
        let xPos27 = globals.Pos27[0];
        let yPos27 = globals.Pos27[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos27*16), 24 + (yPos27*16));  
        //Wall8
        let xPos28 = globals.Pos28[0];
        let yPos28 = globals.Pos28[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos28*16), 24 + (yPos28*16));  
        //Wall9
        let xPos29 = globals.Pos29[0];
        let yPos29 = globals.Pos29[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos29*16), 24 + (yPos29*16));  
        //Wall10
        let xPos30 = globals.Pos30[0];
        let yPos30 = globals.Pos30[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos30*16), 24 + (yPos30*16));
        //Wall11
        let xPos31 = globals.Pos31[0];
        let yPos31 = globals.Pos31[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos31*16), 24 + (yPos31*16));   
        //Wall12
        let xPos32 = globals.Pos32[0];
        let yPos32 = globals.Pos32[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos32*16), 24 + (yPos32*16));   
        //Wall13
        let xPos33 = globals.Pos33[0];
        let yPos33 = globals.Pos33[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos33*16), 24 + (yPos33*16));  
        //Wall14
        let xPos34 = globals.Pos34[0];
        let yPos34 = globals.Pos34[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos34*16), 24 + (yPos34*16));  
        //Wall15
        let xPos35 = globals.Pos35[0];
        let yPos35 = globals.Pos35[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos35*16), 24 + (yPos35*16));  
        //Wall16
        let xPos36 = globals.Pos36[0];
        let yPos36 = globals.Pos36[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos36*16), 24 + (yPos36*16));  
        //Wall17
        let xPos37 = globals.Pos37[0];
        let yPos37 = globals.Pos37[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos37*16), 24 + (yPos37*16));  
        //Wall18
        let xPos38 = globals.Pos38[0];
        let yPos38 = globals.Pos38[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos38*16), 24 + (yPos38*16));  
        //Wall19
        let xPos39 = globals.Pos39[0];
        let yPos39 = globals.Pos39[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos39*16), 24 + (yPos39*16));  
        //Wall10
        let xPos40 = globals.Pos40[0];
        let yPos40 = globals.Pos40[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos40*16), 24 + (yPos40*16));
        //Wall11
        let xPos41 = globals.Pos41[0];
        let yPos41 = globals.Pos41[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos41*16), 24 + (yPos41*16));   
        //Wall12
        let xPos42 = globals.Pos42[0];
        let yPos42 = globals.Pos42[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos42*16), 24 + (yPos42*16));   
        //Wall13
        let xPos43 = globals.Pos43[0];
        let yPos43 = globals.Pos43[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos43*16), 24 + (yPos43*16));  
        //Wall14
        let xPos44 = globals.Pos44[0];
        let yPos44 = globals.Pos44[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos44*16), 24 + (yPos44*16));  
        //Wall15
        let xPos45 = globals.Pos45[0];
        let yPos45 = globals.Pos45[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos45*16), 24 + (yPos45*16));  
        //Wall16
        let xPos46 = globals.Pos46[0];
        let yPos46 = globals.Pos46[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos46*16), 24 + (yPos46*16));  
        //Wall17
        let xPos47 = globals.Pos47[0];
        let yPos47 = globals.Pos47[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos47*16), 24 + (yPos47*16));  
        //Wall18
        let xPos48 = globals.Pos48[0];
        let yPos48 = globals.Pos48[1];
        globals.ctx.fillText("\u{2B1C}", 19 + (xPos48*16), 24 + (yPos48*16));  
}