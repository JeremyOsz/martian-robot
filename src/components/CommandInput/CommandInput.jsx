import React, {useState} from "react";
import { Container, TextArea, Button, ErrorMessage} from "./CommandInput.style";
import { parseInput } from "../../helpers/parseInput/parseInput";





const CommandInput = ({Command}) => {
    const [textInput, setTextInput] = useState("");
    const [worldCoordinates, setWorldCoordinates] = useState("00");
    const [errorText, setErrorText] = useState("");

    const runCommand = (e) => {
        e.preventDefault();
        try{
            const parsedInput = parseInput(textInput)
            Command = parsedInput
        }
        catch(error){
            setErrorText('Invalid input')
            console.warn("INPUT ERROR: " + error)
        }
    }

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    return(
        <Container>
            <TextArea data-testid='command-text' onChange={handleChange} value={textInput}>

            </TextArea>
            <Button data-testid='command-button' onClick={runCommand}>Run</Button>
            <ErrorMessage>{errorText}</ErrorMessage>

        </Container>
    )
}

export default CommandInput