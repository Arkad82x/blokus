import {gen} from './blockgen'

describe ("block generation", () => {
  //TODO test when not called with number
  it("throws error when called with n=0", () => {
    //expect(gen(0)).toEqual([])
    expect(() => gen(0)).toThrowError("Dimension has to be greater than 0")
  })

  it("throws Dimension has to be a number Error when called with nonumber arguments", () => {
    expect(gen.bind("a")).toThrowError("Dimension has to be a number") 
    expect(gen.bind([])).toThrowError("Dimension has to be a number") 
    expect(gen.bind({n:5})).toThrowError("Dimension has to be a number") 
  })

  it("generates properly for D1", () => {
    expect(gen(1)).toEqual([[[1]]])
  })

  it("generates properly for D2", () => {
    const result = gen(2)
    expect(result.length).toEqual(1) 
    expect(result[0]).toEqual([[1, 1], [0, 0]])
  })

  it("returns array of blocks for n up to 5", () => {
   [1, 2, 3, 4, 5].forEach( n => {
     expect(gen(n)).toEqual(jasmine.any(Array))
   })
  })

})
