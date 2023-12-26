// let input =[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// let output= input.map((outer)=>{return outer.map((element)=>element*element) }).flat()
// console.log(output)

let input = [1, 2, 3, 4, 5]
let output = input.map((element)=>{  if (element%2==0) {
    console.log(element)
    return element*element
} else {
    return element*20
    
} })
console.log(output)
