//TODO: Write robot movement algorithm
//TODO: Signal lost robots
//TODO: Prevent subsequnt robots from getting lost


const moveRobots = (Robots) => {
    return Robots.map(Robot => moveOneRobot(Robot))
}

const moveOneRobot = Robot => {
    let position = Robot.initialPosition.slice(0,-1)
    let orientation = Robot.initialPosition.slice(-1)

    Robot.instructions.split("").forEach(instruction => {
        if( instruction === "L" || instruction === "R" ){
            orientation = rotateRobot(orientation, instruction)
        }
        else if( instruction === "F" ){
            position = moveForward(position, orientation)
        }
        else{
            throw Error("Invalid Instruction")
        }
    })
    return {
        finalPosition : `${position}${orientation}`,
        initialPosition : Robot.initialPosition,
        instruction : Robot.instruction,
    }
}

const rotateRobot = (orientation, direction) => {
    
    if(direction == "R"){
        switch(orientation){
            case "N":
                return "E"
            case "E":
                return "S"
            case "S":
                return "W"
            case "W":
                return "N"
            default:
                throw Error("Invalid Rotation")
        }
    }
    else if(direction == "L"){
        switch(orientation){
            case "N":
                return "W"
            case "W":
                return "S"
            case "S":
                return "E"
            case "E":
                return "N"
            default:
                throw Error("Invalid Rotation")
        }
    }
    throw Error("Invalid Rotation")
}

const moveForward = (position, orientation, limitX, limitY) => {
    let newX = position[0]
    let newY = position[1]

    switch(orientation){
        case "N":
            newX++
            break;
        case "S":
            newX--
            break;
        case "E":
            newY++
            break;
        case "W":
            newY--
            break;
    }

    const newPosition = `${newX}${newY}`

    return `${newX}${newY}`
}

const getFinalPosition = Robot => {
    console.log("THE END")
}
export {moveRobots, moveOneRobot, moveForward, getFinalPosition, rotateRobot}