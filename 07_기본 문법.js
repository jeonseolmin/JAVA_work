// 1. 조건문
let number = 5;
console.log(
    number % 2 === 0 ? '짝수' : "홀수"
)

if(number % 2 === 0){ console.log("짝수") }
else{console.log("홀수")}

if(number % 2 === 0){ console.log("2의 배수") }
else if(number % 3 === 0){ console.log("3의 배수") }
else if(number % 4 === 0){ console.log("4의 배수") }
else if(number % 5 === 0){ console.log("5의 배수") }

const fruits = "Apple"

switch (fruits) {
    case "Apple":
        console.log("사과")
        break;

    default:
        console.log("과일")
        break;
}

let sum = 0
for (let index = 0; index < array.length; index++) {
    sum += i;
}
console.log(sum)

const 안유진 = {
    name : 'Ahb Youjin',
    year : 2003,
    group :'ive'
}

for (const key in 안유진) {
    console.log(key)
    console.log(안유진[key])
}

for (ley[key,value] of Object.entries(안유진)) {
    console.log(key)
    console.log(value)
}

const colors = ['빨강','검정','노랑']

for(let color of colors){
    console.log(color)
}
sum = 0
let i = 1
while (i < 11) {
    sum += i
    i++
}
console.log(sum)