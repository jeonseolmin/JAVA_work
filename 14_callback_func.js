// Callback function : 나중에 필요할 때 실행될 함수
// 특정 조건이 만족된 후 실행되는 함수 
function greet(name, callback) {
    console.log('안녕하세요' + name + '님')
    callback();
}

function afterGreeting() {
    console.log('오늘도 맛점하세요.')
}

function beforeGreeting(){
    console.log('오늘도 아침 맛점 하세요.')
}

greet('홍길동',afterGreeting)

console.log('---------------------------------')
// setTimeout 함수는 특정 시간 이후에 실행할 함수를 정의

let t_1 = setTimeout(function(){
    console.log('3초가 지났어요')
},3000)

function sayHello() {
    console.log("안녕하세요!!!")
}
let t_2 = setTimeout(sayHello,2000)


//타이머를 취소하기
clearTimeout(t_1)

