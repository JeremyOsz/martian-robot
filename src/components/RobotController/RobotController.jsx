import React, { useState } from "react";
import { Container } from "./RobotController.style";
import CommandInput from "../CommandInput/CommandInput";
import World from "../World/World";

const initialCommand = `
53
11E 
RFRFRFRF
`

const RobotController = () => {
    const [world, setWorld] = useState({limitX: 5, limitY: 3});
    const [Robots, setRobots] = useState([]);

    // const [initPosition, setPosition] = useState();

    const runCommand = (Command) => {
        if(Command.world){
            console.log('generating new world')
            setRobots([])
            setWorld({limitX: parseInt(Command.world[0]), limitY: parseInt(Command.world[1])})
        }

    }
    

    return(
            <Container data-testid='robot-controller'>
                
                    Martian Robots
                    <World limitX={world.limitX} limitY={world.limitY}  />

                    <CommandInput Command={null} runCommand={runCommand} data-testid='commandInput'/> 
            
            </Container>
    )
    
}
export default RobotController;