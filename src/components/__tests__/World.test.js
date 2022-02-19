import {
    render,
    screen
} from "@testing-library/react";
import World from '../World/World'


const Robots = [{
        initPosition: '11E',
        instructions: 'RFRFRFRF'
    },
    {
        initPosition: '32N',
        instructions: 'FRRFLLFFRRFLL'
    },
    {
        initPosition: '03W',
        instructions: 'LLFFFLFLFL'
    },
]
test('Should render Robot Controller', () => {
            render( < World limitX = {
                    4
                }
                limitY = {
                    3
                }
                Robots = {
                    Robots
                }
                />)
                const worldElement = screen.getByTestId('world-wrapper')
                expect(worldElement).toBeInTheDocument()
            })