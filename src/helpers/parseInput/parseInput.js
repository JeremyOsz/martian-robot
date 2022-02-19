// parseInput and generate Command object
const parseInput = (input) => {
    //Parse if inputs are valid

    const throwInputError = (error) => {
        throw Error(error);
    };

    const CommandQueue = buildCommands(input);

    const getRobots = () => {
        return CommandQueue.map((Command) => {
            return {
                position: validatePosition(Command.position) ?
                    Command.position :
                    throwInputError("Invalid Position"),
                instructions: validateInstructions(Command.instructions) ?
                    Command.instructions :
                    throwInputError("Invalid Position"),
            };
        });
    };

    const parsedCommands = {
        world: CommandQueue[0].world ?
            {
                limitX: CommandQueue[0].world[0],
                limitY: CommandQueue[0].world[1],
            } :
            throwInputError("Invalid Input - no world"),
        robots: getRobots(),
    };

    return parsedCommands;
};

// Take multi line input and convert into commands
const splitLines = (command) => {
    const splitString = command
        .split("\n")
        .filter((line) => {
            return line.length > 0;
        })
        .map((input) => input.trim());
    return splitString;
};

// Split multi command into valid command
const splitCommands = (commandBlock) => {
    return commandBlock
        .split("\n\n")
        .filter((string) => string.length > 0) //filter empty
        .map((string) => string.trim());
};

//Takes a multi-line array of commands and tranforms it into a set of instructions
const buildCommands = (rawCommands) => {
    const processedCommands = splitCommands(rawCommands);
    const CommandQueue = processedCommands.map((command) => {
        const CommandArray = splitLines(command);

        // 3 line input creates new world and creates new robot
        if (CommandArray.length === 3) {
            return {
                world: CommandArray[0],
                position: CommandArray[1],
                instructions: CommandArray[2],
            };
        }

        // 2 line input only creates new robot
        if (CommandArray.length === 2) {
            return {
                position: CommandArray[0],
                instructions: CommandArray[1],
            };
        }
    });
    return CommandQueue;
};

const validatePosition = (position) => {
    if (typeof position !== "string" || position.length !== 3) {
        throw Error("Invalid Position");
    }
    return true;
};

const validateInstructions = (instructions) => {
    if (typeof instructions !== "string" || instructions.length < 1) {
        throw Error("Invalid Instructions");
    }
    return true;
};

const validateWorld = (world) => {
    if (typeof world !== "string" || world.length < 1) {
        throw Error("Invalid World");
    }
    return true;
};

export {
    parseInput,
    validatePosition,
    validateInstructions,
    validateWorld,
    splitLines,
    buildCommands,
    splitCommands,
};