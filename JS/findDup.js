const arr = [1,2,3442,2,1,3]

const toFind= arr => arr.filter((item,index) =>arr.indexOf(item)!== index)

ele_rep= toFind(arr)
console.log(ele_rep)