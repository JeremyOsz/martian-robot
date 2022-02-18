import {render, screen, cleanup} from "@testing-library/react";
import RobotController from "../RobotController/RobotController";

test('Should render Robot Controller', () =>{
    render(<RobotController/>)
    const controllerElement = screen.getByTestId('robot-controller')
    expect(controllerElement).toBeInTheDocument()
    expect(controllerElement).toHaveTextContent('Hello World')
})