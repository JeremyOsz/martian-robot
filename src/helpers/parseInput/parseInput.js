// parseInput and generate Command object
const parseInput = (input) => {
    //Parse if inputs are valid
    const Command = buildCommands(input)

    if(validatePosition(Command.position) && validateInstructions(Command.instructions)){
        if(!Command.World){
            return Command
        }
        else if(validateWorld(Command.World)){
            return Command
        }
    }
    throw Error('Invalid Input')
}

    // Take multi line input and convert into commands
const splitLines = command => {
    const splitString = command.split('\n').filter((line) => {
        return line.length > 0;
    }).map(input => input.trim())
    return splitString;
}

//Takes a multi-line array of commands and tranforms it into a set of instructions
const buildCommands = (command) => {
    const CommandArray = splitLines(command)
    
    //Only accept 2 or 3 line inputs
    if(CommandArray.length > 3 || CommandArray.length < 1){
        throw Error('Invalid Command')
    }
    // 3 line input creates new world and creates new robot
    if(CommandArray.length === 3){
        return {
            world : CommandArray[0],
            position : CommandArray[1],
            instructions : CommandArray[2]
        }
    }

    // 2 line input only creates new robot
    if(CommandArray.length === 2){
        return {
            position : CommandArray[0],
            instructions : CommandArray[1]
        }
    }
}

const validatePosition = (position) =>{
    if(typeof position !== 'string' || position.length !== 3){
        throw Error('Invalid Position')
    }
    return true;
}

const validateInstructions = (instructions) =>{
    if(typeof instructions !== 'string' || instructions.length < 1){
        throw Error('Invalid Instructions')
    }
    return true;
}

const validateWorld = (world) => {
    if(typeof world !== 'string' || world.length < 1){
        throw Error('Invalid World')
    }
    return true;
}


export {parseInput, validatePosition, validateInstructions, validateWorld, splitLines, buildCommands};