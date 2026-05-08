const k_group = [
  {
    group : 'ive',
    name : ['장원영','안유진', '이서'],
    count : 3
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅','마시로'],
    count : 3
  },
]

// 위 내용을 group_copy 라는 이름으로 깊은 복사해서 
// 1-1. 데이터 추가 (group : 브레이브걸스, name : 유나, 유정, 민영, count : 3)
// 1-2. 데이터를 맨 앞에 추가 (group : 블랙핑크, name : 제니, 리사, 로제, 지수 count : 4)
// 2-1) 데이터 삭제: 블랙핑크 삭제
// 2-2. 데이터 삭제 : 케플러 삭제
// 3. 데이터 수정 : group ive의 name 중 이서를 가을로 수정
// 4. group으로 오름차순 정렬
// 5. group으로 내림차순 정렬
// 6. 각 group name의 오름차순 정렬
// 7. name으로 검색 : 카리나를 변수로
// - group : 에스파, 멤버수 : 4
// 출력
// 8. 에스파의 name 정보를
// - 에스파 카리나
// - 에스파 윈터
// - 에스파 지젤
// - 에스파 닝닝
// =============================================

// 각 스크립트의 결과 출력 시 콘솔 내용

// 0) 깊은 복사
console.log('0) 깊은 복사')
const group_copy = [...k_group]
console.log(`group_copy : ${group_copy}`)
console.log('------------------------------------------')
/* 1-1) 데이터 추가: 브레이브걸스 */
console.log('1-1) 데이터 추가: 브레이브걸스')
let data ={
    group : '브레이브걸스',
    name : ['유나', '유정', '민영'],
    count : 3
  }
group_copy.push(data)
console.log(`group_copy : ${group_copy}`)
console.log(`group_copy : ${group_copy[0].group}`)
console.log(`group_copy : ${group_copy[1].group}`)
console.log(`group_copy : ${group_copy[2].group}`)
console.log(`group_copy : ${group_copy[3].group}`)
console.log('------------------------------------------')
/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
console.log('1-2) 데이터 맨 앞 추가: 블랙핑크');
data ={
    group : '블랙핑크',
    name : ['제니', '리사', '로제', '지수'],
    count : 4
}
group_copy.unshift(data)
console.log(`group_copy : ${group_copy}`)
console.log(`group_copy : ${group_copy[0].group}`)
console.log(`group_copy : ${group_copy[1].group}`)
console.log(`group_copy : ${group_copy[2].group}`)
console.log(`group_copy : ${group_copy[3].group}`)
console.log(`group_copy : ${group_copy[4].group}`)
console.log('------------------------------------------')
/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
console.log('2-1) 데이터 삭제: 블랙핑크 삭제')
group_copy.shift()
console.log(`group_copy : ${group_copy}`)
console.log(`group_copy : ${group_copy[0].group}`)
console.log(`group_copy : ${group_copy[1].group}`)
console.log(`group_copy : ${group_copy[2].group}`)
console.log(`group_copy : ${group_copy[3].group}`)
console.log('------------------------------------------')
/* 2-2) 데이터 삭제: 케플러 삭제 */
console.log('2) 데이터 삭제: 케플러 삭제')
group_copy.splice(2,1)
console.log(`group_copy : ${group_copy[0].group}`)
console.log(`group_copy : ${group_copy[1].group}`)
console.log(`group_copy : ${group_copy[2].group}`)
console.log('------------------------------------------')
/* 3) 데이터 수정: ive의 "이서" -> "가을" */
console.log('3) 데이터 수정: ive의 "이서" -> "가을"')
for (let index = 0; index < group_copy[0].name.length; index++) {
  if(group_copy[0].name[index] ==="이서"){
    group_copy[0].name[index] = "가을"
  }
}
console.log(`${group_copy[0].name}`)
/* 4) group 오름차순 정렬 (단순 문자 비교) */
console.log('4) group 오름차순');
console.log(group_copy.sort())
/* 5) group 내림차순 정렬 (단순 문자 비교) */
console.log('5) group 내림차순');
console.log(group_copy.reverse());

/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
console.log('6) 각 group name 오름차순 정렬 반영된 group_copy');
group_copy.sort()
group_copy.forEach(
    group =>{
      console.log(group.group,
        group.name.sort()
      )
    }
  )
/* 7) name으로 검색: "카리나" */
console.log('7) name으로 검색')


/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');