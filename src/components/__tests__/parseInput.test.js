import {parseInput, validateInstructions, validatePosition, validateWorld} from "../../helpers/parseInput/parseInput";

// Plain text inputs
const testInput1 = `
    53
    11E 
    RFRFRFRF
`
const testInput2 = `
    32N 
    FRRFLLFFRRFLL
`
const testInput3 = `
    03W 
    LLFFFLFLFL
`

//Splitting inputs into strings for simplicity

const testWorld = '53'
const robotPosition1 = '11E'
const robotInstructions1 = 'RFRFRFRF'

const robotPosition2 = '32N'
const robotInstructions2 = 'FRRFLLFFRRFLL'

const robotPosition3 = '03W'
const robotInstructions3 = 'LLFFFLFLFL'


console.log("test Input=" + testInput1[0])

test('parseInput will reject a non-string', () => {
    expect(()=>{parseInput(1)}).toThrow()
})

test('valid input will return true', () => {
    expect(parseInput(robotPosition1, robotInstructions1)).toBe(true)
})

test('valid position will return true', () => {
    expect(validatePosition(robotPosition1)).toBe(true)
})

test('valid instructions will return true', () => {
    expect(validateInstructions(robotInstructions1)).toBe(true)
})

test('valid world will return true', () => {
    expect(validateWorld(testWorld)).toBe(true)
})






