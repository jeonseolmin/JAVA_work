//구조분해 할당 방식.
let m = 100;
let n = 200;
[m,n] = [n,m]
console.log(m,n)

console.log('----------------------')
const sumEvenBetween = (x,y) =>{
    [x,y] = x > y ? [y,x] : [x,y]
    let sum = 0
    for (let i = x; i <= y; i++) {
        sum = i % 2 === 0 ? (sum + i) : sum + 0
    }
    return sum
}
console.log(sumEvenBetween(3,9))