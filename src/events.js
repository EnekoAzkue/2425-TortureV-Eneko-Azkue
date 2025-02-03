import { Key } from "./constants.js";
import globals from "./globals.js";

export function keydownHandler(event)
{
    switch(event.keyCode)
    {
        case Key.UP:
            globals.action.moveUp = true;
            globals.PosPlayer[1] -= 1;  
            console.log("arriba")
            break;
        
        case Key.DOWN:
            globals.action.moveDown = true;
            globals.PosPlayer[1] += 1;  
            console.log("abajo")

            break;
    
        case Key.LEFT:
            globals.action.moveLeft = true;
            globals.PosPlayer[0] -= 1;  
            console.log("izq")

            break;
    
        case Key.RIGHT:
            globals.action.moveRight = true;
            globals.PosPlayer[0] += 1;  
            console.log("der")

            break;

    }
}

export function keyupHandler(event)
{
    switch(event.keyCode)
    {
        case Key.UP:
            globals.action.moveUp = false;
            break;
        
        case Key.DOWN:
            globals.action.moveDown = false;
            break;
    
        case Key.LEFT:
            globals.action.moveLeft = false;
            break;
    
        case Key.RIGHT:
            globals.action.moveRight = false;
            break;

    }
}