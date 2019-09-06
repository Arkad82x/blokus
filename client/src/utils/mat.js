export function init(dim) {
 return [...new Array(dim)].map(x => [...new Array(dim)].map(y => 0)) 
}

export function put(mat, pos) {
  return [
    ...mat.slice(0, Math.max(pos.y, 0)),
    [
      ...mat[pos.y].slice(0, Math.max(pos.x, 0)),
      1,
      ...mat[pos.y].slice(pos.x+1)
    ],
    ...mat.slice(pos.y+1)
  ]
}

export function blocked(mat, pos){
  return mat[pos.y][pos.x] === 1
}

export function includes(matrices, m){
  return matrices.some(matrix => equal(matrix, m)) 
}

export function equal(m1, m2) {
  for(let i = 0; i<m1.length; i++) {
    for(let j = 0; j<m1[i].length; j++){
      if(m1[i][j] !== m2[i][j]) return false
    }
  }return true
}

export function mirror(m) {
  //return [...m.map(col => [...col].reverse())].reverse()
  let ret = []
  for(let i = 0; i<m.length; i++) {
    ret[i] = []
    for(let j = 0; j<m[i].length; j++) {
      ret[i][j] = m[j][i]
    }
  }
  return ret
}

export function outOfBounds(m, pos) {
  return pos.x < 0 || pos.x >= m.length || pos.y < 0 || pos.y >= m.length
}

export function freeAdjacentPositions(m) {
  let result = []
  for( let x = 0; x<m.length; x++) {
    for( let y = 0; y<m[x].length; y++) {
      if(!blocked(m, {x,y})) {
        //free field
        if(hasBlockedNeighbor(m, {x, y})) {
          result.push({x,y})
        }
      }
    }
  }
  return result
}

function hasBlockedNeighbor(m, pos) {
  return [
    {x: pos.x-1, y: pos.y},
    {x: pos.x,   y: pos.y-1},
    {x: pos.x+1, y: pos.y},
    {x: pos.x,   y: pos.y+1}
  ].some( p => !outOfBounds(m, p) && blocked(m, p))
}

export function isMatrix(m) {
  const dim = m.length
  return m.every(col => col.length === dim) 
          && m.every(col => col.every(number => typeof(number) === "number"))
}
