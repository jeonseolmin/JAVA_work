//기본 연산자는 거의 동일함
// == -> 값만 비교 / === -> 값과 타입까지 비교

// console.log(5 == "5")
// console.log(5==="5")
// console.log(5 !== '5')

// 삼항 연산자 많이씁니다
// console.log(12 > 0 ? true : false)



let input ='홍길동';
const userName = input || "익명";
console.log(userName)

//null 병합 연산자
console.log("-----------------")
let name;
console.log(name)
// ?? -> name 이 null or undefind아니면 출력 null 이면 다음 것 출력
name = name ?? '안유진';
console.log(name)