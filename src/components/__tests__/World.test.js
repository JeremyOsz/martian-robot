import {render, screen, cleanup} from "@testing-library/react";
import World from '../World/World'
test('Should render Robot Controller', () =>{
    render(<World limitX={4} limitY={3}/>)
    const worldElement = screen.getByTestId('world-wrapper')
    expect(worldElement).toBeInTheDocument()
})