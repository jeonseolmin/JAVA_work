let ive ={
    name : '장원영',
    group : '아이브',
    dance : function(){
        return '장원영이 춤을 춥니다.'
    }
}

//값으로 접근
console.log(ive.name) // .으로 표시하는 건 클래스 구분자
console.log(ive['group']) // 대괄호 구분자

//변수로 키 접근이 가능하다.
const key = 'name';
console.log(ive[key])

// 단축 프로퍼티 (리엑트 혹은 뷰에서 사용)
const name ='민지';

const minji = {
    name,
}

console.log(minji)

const ive2 = {...ive}; //깊은 복사
console.log('------------------------------------')
console.log(`ive : ${Object.values(ive)}`)
console.log('------------------------------------')
ive2.name = '이서'
console.log(`ive : ${Object.values(ive2)}`)
