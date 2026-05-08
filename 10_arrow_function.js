//자바의 람다 표현식과 유사

const multiply = function(x,y){
    return x*y
}

console.log(multiply(2,3))


// 1. 기본 모양
const multi_01 = (x,y) => {
    return x*y;
}

const multi_02 = (x,y) => x*y
console.log(multi_02(5,6))

const multi_03 = x => x *10

// Rest Parameter (...) : 가변 인수
const multiplyAll = function(...args){
    let result = Object.values(args)
        .reduce((a,b) => a*b,1)
    console.log(result)
}

multiplyAll(2,3,4,5,6,7,8,9);

// 즉시실행함수
// 선언과 동시에 실행이 되는 함수 
(function(x,y){
    console.log(x*y);
})(4,5)
