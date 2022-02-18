import React from "react";
import { Container } from "./RobotController.style";
import World from "../World/World";

const RobotController = () => {
    return(
        <Container data-testid='robot-controller'>
            Hello World
            <World limitX={4} limitY={3} />
        </Container>
    )
}
export default RobotController;