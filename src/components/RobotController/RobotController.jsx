import React from "react";
import { Container } from "./RobotController.style";
import CommandInput from "../CommandInput/CommandInput";
import World from "../World/World";

const RobotController = () => {
    return(
        <Container data-testid='robot-controller'>
            Hello World
            <World limitX={4} limitY={3} />

            // TODO Text field to input muliline
            <CommandInput />
            // TODO: Button + Text Input to generate world
            // TODO: Button + Text Input to place Robot
            // TODO: Field to give robot instructions

            // TODO: 
        </Container>
    )
}
export default RobotController;