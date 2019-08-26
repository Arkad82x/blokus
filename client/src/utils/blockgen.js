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

function genRec(remaining, current, pos, solutions){
  if(pos.x > current.length || pos.y > current.length) return []
  if(pos.x < 0 || pos.y < 0) return [] 
  if(mat.blocked(current, pos)) return []

  const next = mat.put(current, pos)

  if(mat.includes(solutions, next)) return []

  if(remaining === 1) return [next]

  return [
    ...solutions,
    ...genRec(remaining-1, next, {...pos, x: pos.x+1}, solutions),
    ...genRec(remaining-1, next, {...pos, x: pos.x-1}, solutions),
    ...genRec(remaining-1, next, {...pos, y: pos.y+1}, solutions),
    ...genRec(remaining-1, next, {...pos, y: pos.y-1}, solutions)
  ].filter((cur, index, self) => {
    return self.findIndex(m => mat.equal(cur, m) || mat.equal(cur, mat.mirror(m))) === index
  })
}
