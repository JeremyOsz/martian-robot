const parseInput = (position, instructions) => {
    //Parse if inputs are valid
    if(validatePosition(position) && validateInstructions(instructions)){
        return true
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


export {parseInput, validatePosition, validateInstructions, validateWorld};