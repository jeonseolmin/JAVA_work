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

//실행해보기

주문()
    .then((result) => {
        console.log(result);
        return 배달완료();
    })
    .then((result) => {
        console.log(result);
        return 먹기;
    }).then((result) => {
        console.log(result)
    })