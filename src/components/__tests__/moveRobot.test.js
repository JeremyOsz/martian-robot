import { moveOneRobot, rotateRobot, moveForward } from "../../helpers/MoveRobot/moveRobot";

const testRobotBefore = {
    initialPosition: "11E",
    instructions: "RFRFRFRF",
    finalPostion: undefined
}

const testWorld = {
    limitX: 5,
    limitY: 3,
    scents : []
}

const testRobotAfter = {
    initialPosition: "11E",
    instructions: "RFRFRFRF",
    finalPosition: "11E"
}

test('Should move forward one square according to orientation', () => {
    expect(typeof moveForward("11", "E", 5, 3, [])).toBe("string")
    expect(moveForward("11", "E", 5, 3, [])).toBe("21")
})

test('Should rotate and follow cardinal directions', () => {
    expect(typeof rotateRobot("E", "L")).toBe("string")
    expect(rotateRobot("E", "L")).toBe("N")
    expect(rotateRobot("N", "L")).toBe("W")
    expect(rotateRobot("W", "L")).toBe("S")
    expect(rotateRobot("S", "L")).toBe("E")

    expect(rotateRobot("E", "R")).toBe("S")
    expect(rotateRobot("N", "R")).toBe("E")
    expect(rotateRobot("W", "R")).toBe("N")
    expect(rotateRobot("S", "R")).toBe("W")
})

test('Should return a robot with a final position', () => {
    const finalPosition = moveOneRobot(testRobotBefore, testWorld)
    expect(typeof finalPosition).toBe("object")
    expect(finalPosition.finalPosition).toBe(testRobotAfter.finalPosition)
})

test('Should become lost if going beyond bounds', () => {
    expect(moveForward("11", "E", 5, 3, [])).toBe("21")
    expect(moveForward("53", "E", 5, 3, [])).toBe("53 LOST")
})
