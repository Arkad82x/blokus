import * as mat from './mat'

describe("Matrix utility", () => {
  describe("Init", () => {
    it("inits correct dimensions", () => {
      expect(mat.init(0)).toEqual([])
      expect(mat.init(1)).toEqual([[0]])
      expect(mat.init(2)).toEqual([[0, 0], [0, 0]])
      expect(mat.init(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    })
  })

  describe("put", () => {
    it("puts 1 on given position 2D", () => {
      const m = mat.init(2)
      expect(mat.put(m, {x:0, y:0})).toEqual([[1, 0], [0, 0]])
      expect(mat.put(m, {x:0, y:1})).toEqual([[0, 0], [1, 0]])
      expect(mat.put(m, {x:1, y:0})).toEqual([[0, 1], [0, 0]])
      expect(mat.put(m, {x:1, y:1})).toEqual([[0, 0], [0, 1]])
    })

    it("puts 1 on given position 3D", () => {
      const m = mat.init(3)
      expect(mat.put(m, {x:0, y:0})).toEqual([[1, 0, 0], [0, 0, 0], [0, 0, 0]])
      expect(mat.put(m, {x:1, y:0})).toEqual([[0, 1, 0], [0, 0, 0], [0, 0, 0]])
      expect(mat.put(m, {x:2, y:0})).toEqual([[0, 0, 1], [0, 0, 0], [0, 0, 0]])
      expect(mat.put(m, {x:0, y:1})).toEqual([[0, 0, 0], [1, 0, 0], [0, 0, 0]])
      expect(mat.put(m, {x:1, y:1})).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
      expect(mat.put(m, {x:2, y:1})).toEqual([[0, 0, 0], [0, 0, 1], [0, 0, 0]])
      expect(mat.put(m, {x:0, y:2})).toEqual([[0, 0, 0], [0, 0, 0], [1, 0, 0]])
      expect(mat.put(m, {x:1, y:2})).toEqual([[0, 0, 0], [0, 0, 0], [0, 1, 0]])
      expect(mat.put(m, {x:2, y:2})).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 1]])
    })
  })

  describe("blocked", () => {
    it("returns true if position is 1", () => {
      const m = mat.init(3)
      const positions = [{x:0, y:0}, {x:2, y:2}, {x:2, y:0}]

      positions.forEach(pos => 
        expect(mat.blocked(mat.put(m, pos), pos)).toEqual(true)
      )
    })

    it("returns false if position is 0", () => {
      expect(mat.blocked(mat.init(3), {x:0, y:0})).toEqual(false)
    })
  })

  describe("equal", () => {
    it("returns true if matrices are equal", () => {
      const m1 = mat.init(3)
      expect(mat.equal(m1, m1)).toEqual(true)
      const m2 = mat.put(m1, {x:1, y:2})
      expect(mat.equal(m2, m2)).toEqual(true)
      expect(mat.equal(m1, m2)).toEqual(false)
    })
  })

  describe("includes", () => {
    it("returns true if matrix is included in array", () => {
      const m1 = mat.init(3)
      const m2 = mat.put(m1, {x:1, y:1})
      expect(mat.includes([m1, m2], m1)).toEqual(true)
    })

    it("returns false if matrix is not included in array", () => {
      const m1 = mat.init(3)
      const m2 = mat.put(m1, {x:1, y:1})
      const m3 = mat.put(m1, {x:1, y:0})
      expect(mat.includes([m1, m2], m3)).toEqual(false)
      expect(mat.includes([m3, m2], m1)).toEqual(false)
      expect(mat.includes([m1, m3], m2)).toEqual(false)
    })
  })

  describe("reverse", () => {
    it("mirrors on diagonal", () => {
      expect(mat.mirror([[1, 0], [0, 1]])).toEqual([[1, 0], [0, 1]])
      expect(mat.mirror([[1, 0], [0, 0]])).toEqual([[1, 0], [0, 0]])
      expect(mat.mirror([[0, 1], [0, 0]])).toEqual([[0, 0], [1, 0]])
    })
  })

  describe("outOfBounds", () => {
    it("returns true if block is out of bounds", () => {
      expect(mat.outOfBounds([[]], {x:1, y:0})).toEqual(true) 
    })

    it("return false if pos is inside the matrix", () => {
      expect(mat.outOfBounds([[1, 0], [1, 0]], {x:1, y:0})).toEqual(false) 
      
    })
  })

  describe("center", () => {
    it("returns the middle if all values are zeroes", () => {
      expect(mat.center(mat.init(3))).toEqual({x:1.5, y:1.5})
      expect(mat.center(mat.init(4))).toEqual({x:2, y:2})
    })

    it("calculates center of all ones", () => {
      const m = [
        [1, 0],
        [0, 1]
      ]
      expect(mat.center(m)).toEqual({x:0.5, y:0.5})

      const m2 = [
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 1]
      ]
      expect(mat.center(m2)).toEqual({x:2, y:1})
    })
  })
})
