const number =[1,2,3,4,5,6,7,8,9]
const num = number.filter((n)=>(n%2==0))
console.log(num)

const num2 = []
number.forEach((n)=>{ if (n%2==0 ) {
    num2.push(n)
} 
})
console.log(num2)
