//정렬 

let numbers = [1,9,7,5,3]

numbers.sort() // 오름차 순 정렬
numbers.reverse() // 내림차 순 정렬
// 기본적으로 문자열 정렬을 해 숫자가 제대로 정렬되지 않는다.
//일반적인 숫자 정렬 방법
numbers.sort((a,b) => a>b? 1: -1) // numbers.sort((a,b) => a-b) 랑 같다.

const frutis = ['banana','apple','orenge']
const name = ['홍길동','김철수','박영희']


//언어별 지역에 해당하는 정렬방식

frutis.sort((a,b) => a.localeCompare(b)) // 오름차순
frutis.sort((a,b) => b.localeCompare(a)) // 내림차순

//object 내부의 값을 기준으로 비교 후 정렬
numbers.sort((a,b) =>
{
    if(a>b) return 1; // b가 앞으로
    if(a<b) return -1; // a 가 앞으로
    return 0; // 유지
})

//map() 함수 : 자바의 스트림과 유사
console.log(name.map(x => `이름 : ${x}`))

console.log(
    name.map(
        x => {
            if(x === "김철수"){
                return `이름 : ${x}`
            }
            return x
        }
    )
)

numbers = [1,8,7,5,3]
let data = [...numbers,10] // numbers 뒤에 10 추가.
//짝수만 출력
data.filter(
    x => x%2===0
);
//

console.log(
    data.filter(x => x > 3)
    .sort((a,b) =>a-b)
)