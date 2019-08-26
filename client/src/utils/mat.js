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
