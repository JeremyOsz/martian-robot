import React from "react";
import { Container, TextArea, Button} from "./CommandInput.style";

const CommandInput = () => {
    return(
        <Container>
            <TextArea data-testid='command-text'>

            </TextArea>
            <Button data-testid='command-button'>Run</Button>

        </Container>
    )
}

export default CommandInput