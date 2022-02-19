import React, { useState } from "react";
import { Container } from "./RobotController.style";
import CommandInput from "../CommandInput/CommandInput";
import World from "../World/World";
import {moveRobot, getFinalPosition} from "../../helpers/MoveRobot/moveRobot";


const RobotController = () => {
  const [world, setWorld] = useState({ limitX: 5, limitY: 3 });
  const [Robots, setRobots] = useState([]);

  // const [initPosition, setPosition] = useState();

  const runCommand = (Command) => {

    
    if (Command.world) {
      console.log("generating new world");

      // setRobots([])
      // TODO: Process input - set rovers on world
      setWorld({
        limitX: parseInt(Command.world.limitX),
        limitY: parseInt(Command.world.limitY),
      });
    }

    console.log(Command)

    setRobots(
      Command.robots.map(Robot => {
          return{
            initialPosition: Robot.position,
            instructions: Robot.instructions,
            finalPosition: getFinalPosition()
          }
      })
    );

    moveRobot(Robots)
  };

  return (
    <Container data-testid="robot-controller">
      Martian Robots
      <World limitX={world.limitX} limitY={world.limitY} Robots={Robots} />
      <CommandInput
        Command={null}
        runCommand={runCommand}
        data-testid="commandInput"
      />
    </Container>
  );
};
export default RobotController;
