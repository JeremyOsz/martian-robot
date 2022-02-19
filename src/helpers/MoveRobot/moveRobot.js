
//TODO: Prevent subsequnt robots from getting lost


const moveRobots = (Robots, World) => {
    return Robots.map(Robot => moveOneRobot(Robot, World))
}

const moveOneRobot = (Robot, World) => {
    let position = Robot.initialPosition.slice(0,-1)
    let orientation = Robot.initialPosition.slice(-1)
    let finalPosition = null

    Robot.instructions.split("").forEach(instruction => {
            if( instruction === "L" || instruction === "R" ){
                orientation = rotateRobot(orientation, instruction)
            }
            else if( instruction === "F" ){
                const newPosition = moveForward(position, orientation, World.limitX, World.limitY, World.scents)
                
                if(newPosition.indexOf("LOST") > -1){
                    finalPosition  = `${position}${orientation} LOST`
                    return
                }
                else{
                    position = newPosition
                }
            }
            else{
                throw Error("Invalid Instruction")
            }
    })

    return {
        finalPosition : finalPosition ? finalPosition : `${position}${orientation}`,
        initialPosition : Robot.initialPosition,
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

const moveForward = (position, orientation, limitX, limitY, scents) => {
    let newX = position[0]
    let newY = position[1]

    switch(orientation){
        case "N":
            newY++
            break;
        case "S":
            newY--
            break;
        case "E":
            newX++
            break;
        case "W":
            newX--
            break;
    }

    // Ignore command to jump off where scent left
    if(scents.length > 0 && scents.indexOf(`${newX}${newY}`) > -1) {
        return `${position}`
    }

    // Return lost position if going beyond world bounds
    if(newX >= limitX || newY >= limitY ){
        scents.push(`${newX}${newY}`)
        return `${position} LOST`
    }
    return `${newX}${newY}`
}

export {moveRobots, moveOneRobot, moveForward, rotateRobot}