import {render, screen} from "@testing-library/react";
import CommandInput from '../CommandInput/CommandInput'

test('Should render Command Input (Text Area + Button)', () =>{
    render(<CommandInput/>)
    const textArea = screen.getByTestId('command-text')
    const runButton = screen.getByTestId('command-button')
    expect(textArea).toBeInTheDocument()
    expect(runButton).toBeInTheDocument()
    
})