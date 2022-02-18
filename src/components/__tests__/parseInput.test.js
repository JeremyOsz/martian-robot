import parseInput from "../../helpers/parseInput/parseInput";

test('parseInput will reject a non-string', () => {
    expect(()=>{parseInput(1)}).toThrow('Input is not a String')
})

