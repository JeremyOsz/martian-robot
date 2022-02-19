import {parseInput, validateInstructions, validatePosition, validateWorld, splitLines, buildCommands} from "../../helpers/parseInput/parseInput";

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


test('parseInput will reject a non-string', () => {
    expect(()=>{parseInput(1)}).toThrow()
})

test('valid input will return object', () => {
    const parsedInput1 = parseInput(testInput1)
    const parsedInput2 = parseInput(testInput2)
    const parsedInput3 = parseInput(testInput3)

    //Check all inputs return valid outputs
    expect(()=>parsedInput1).not.toThrow()
    expect(()=>parsedInput2).not.toThrow()
    expect(()=>parsedInput3).not.toThrow()

    // Check outputs are expected
    expect(parseInput(testInput1).world).toBe(testWorld)
    expect(parseInput(testInput1).position).toBe(robotPosition1)
    expect(parseInput(testInput1).instructions).toBe(robotInstructions1)

    expect(parseInput(testInput2).world).toBeUndefined()
    expect(parseInput(testInput2).position).toBe(robotPosition2)
    expect(parseInput(testInput2).instructions).toBe(robotInstructions2)

    expect(parseInput(testInput3).world).toBeUndefined()
    expect(parseInput(testInput3).position).toBe(robotPosition3)
    expect(parseInput(testInput3).instructions).toBe(robotInstructions3)
    
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

test('Test input 1 will be split into [53,11E,RFRFRFRF]', () =>{
    const splitInput = splitLines(testInput1)
    expect(splitInput.length).toBe(3)
    expect(splitInput).toContain('53','11E','RFRFRFRF') 
})

test('Test input 2 will be split into [32N,FRRFLLFFRRFLL]', () =>{
    const splitInput = splitLines(testInput2)
    expect(splitInput.length).toBe(2)
    expect(splitInput).toContain('32N','FRRFLLFFRRFLL')
})

test('Test input 3 will be split into [03W,LLFFFLFLFL]', () =>{
    const splitInput = splitLines(testInput3)
    expect(splitInput.length).toBe(2)
    expect(splitInput).toContain('03W','LLFFFLFLFL')
})

test('Command string returns valid command object', () =>{
    expect(buildCommands(testInput1)).toStrictEqual({"instructions": "RFRFRFRF", "position": "11E", "world": "53"})
    expect(buildCommands(testInput2)).toStrictEqual({"instructions": "FRRFLLFFRRFLL", "position": "32N"})
    expect(buildCommands(testInput3)).toStrictEqual({"instructions": "LLFFFLFLFL", "position": "03W"})
})





