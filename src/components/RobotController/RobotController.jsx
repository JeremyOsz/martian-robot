import React, {useState, createContext} from "react";
import { Container } from "./RobotController.style";
import CommandInput from "../CommandInput/CommandInput";
import World from "../World/World";

const Context = {
    Command : {
        "instructions": "RFRFRFRF", "position": "11E", "world": "53"
    }
}

const RobotController = () => {
    return(
        <Container data-testid='robot-controller'>
            Hello World
            <World limitX={4} limitY={3} />

            <CommandInput Command={null}/> 
        </Container>
    )
}
export default RobotController;