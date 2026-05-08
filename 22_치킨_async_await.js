const 주문 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('치킨')
    },2000)
})

const 배달완료 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('배달완료')
    },2000)
})

const 먹기 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('맛있게 먹기')
    },2000)
})

//async : 비동기 처리
async function 실행() {
    const 주문결과 = await 주문()
    console.log(주문결과)
    const 배달결과 = await 배달완료()
    console.log(배달결과)
    const 먹기결과 = await 먹기()
    console.log(먹기결과)
}
console.log('전화기를 들었음')
실행()
console.log('게임하기')