
let arr1=[1,2,3,4,5]
let arr2=[4,5,6,7]

let arr_merge=arr1.concat(arr2)
let arr_sorted=arr_merge.sort()

let arr_res=[... new Set(arr_sorted)]
console.log(arr_res)