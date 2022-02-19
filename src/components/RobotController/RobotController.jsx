import React, { useState, useEffect } from "react";
import { Container, OutputField} from "./RobotController.style";
import CommandInput from "../CommandInput/CommandInput";
import World from "../World/World";
import {moveRobots} from "../../helpers/MoveRobot/moveRobot";


const RobotController = () => {
  const [world, setWorld] = useState({ limitX: 5, limitY: 3, scents: []});
  const [Robots, setRobots] = useState([]);
  const [output, setOutput] = useState([])

 
  useEffect(() => {
    const movedRobots = moveRobots(Robots, world)
    
    setOutput(
        movedRobots.map((robot, i)=>{
            return <p key={i}>{robot.finalPosition}</p>
        })
    )
  }, [Robots]);

  const runCommand = (Command) => {

    
    if (Command.world) {
      console.log("generating new world");

      // setRobots([])
      // TODO: Process input - set rovers on world
      setWorld({
        limitX: parseInt(Command.world.limitX) + 1,
        limitY: parseInt(Command.world.limitY) + 1,
        scents: []
      });
    }

    
    setRobots(
      Command.robots.map(Robot => {
          return{
            initialPosition: Robot.position,
            instructions: Robot.instructions,
          }
      })
    );

  };

  return (
    <Container data-testid="robot-controller">
      Martian Robots
      <World limitX={world.limitX} limitY={world.limitY} Robots={Robots} />
      <OutputField>
        Output:
        {output}
    </OutputField>
      <CommandInput
        Command={null}
        runCommand={runCommand}
        data-testid="commandInput"
      />
      
    </Container>
  );
};
export default RobotController;
