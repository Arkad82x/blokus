import * as mat from './mat'

export function gen(n){
  if(typeof(n) === "number" && n <= 0){
   throw new TypeError("Dimension has to be greater than 0")
  }
  if(typeof(n) !== "number"){
   throw new TypeError("Dimension has to be a number")
  }

  return genRec(n, mat.init(n), {x:0, y:0}, [])
}

function genRec(remaining, current, pos, solutions) {
  if(mat.outOfBounds(current, pos)) return []
  if(mat.blocked(current, pos)) return []

  current = mat.put(current, pos)

  if(remaining === 1) return [current]

  const freePositions = mat.freeAdjacentPositions(current)
  const nexts = freePositions.map(fpos => genRec(remaining-1, current, fpos, solutions)).flat()

  return [
    ...solutions,
    ...nexts
  ].filter((cur, index, self) => 
    self.findIndex(m => mat.equal(cur, m) || mat.equal(cur, mat.mirror(m))) === index
  )
}
