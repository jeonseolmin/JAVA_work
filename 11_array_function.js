let iveMembers = ['안유진','가을','레이','리즈','이서']

iveMembers.push('장원영')

iveMembers.unshift('홍길동')

iveMembers.pop()

iveMembers.shift()


iveMembers.splice(2,1)

iveMembers.splice(3,0,'장원영')
iveMembers.sort() 
iveMembers.reverse() // 내림차순 정렬
console.log(` ${iveMembers}`)


let fruits = ['사과','딸기','배','포도','바나나']
fruits.concat('망고')
fruits.slice(0,3)

// 중요 : Spread Operator [...] : 배열 복사
let iveMembers2 = [...iveMembers] // == false , === false

//배열의 주소를 복사해서 사용하는 것
let iveMemvers3 = iveMembers; // == true , === false

iveMemvers3.unshift('홍') // 원본에 값이 적용