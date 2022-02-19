import React, { useState} from "react";
import {
  Container,
  TextArea,
  Button,
  ErrorMessage,
} from "./CommandInput.style";
import { parseInput } from "../../helpers/parseInput/parseInput";

const CommandInput = ({ runCommand }) => {
  const [textInput, setTextInput] = useState("");
  const [worldCoordinates, setWorldCoordinates] = useState("00");
  const [errorText, setErrorText] = useState("");

  const fireCommand = (e) => {
    e.preventDefault();
    setErrorText("Invalid input");

    try {
      const parsedInput = parseInput(textInput);
      runCommand(parsedInput);
      setTextInput("");
      setErrorText("");
    } catch (error) {
      console.warn("INPUT ERROR: " + error);
    }
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <Container>
      <TextArea
        data-testid="command-text"
        onChange={handleChange}
        value={textInput}
      ></TextArea>
      <Button data-testid="command-button" onClick={fireCommand}>
        Run
      </Button>
      <ErrorMessage>{errorText}</ErrorMessage>
    </Container>
  );
};

export default CommandInput;
