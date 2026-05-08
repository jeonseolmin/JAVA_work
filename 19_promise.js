// Promise : 이 작업이 마무리 되면 결과를 꼭 돌려준다.
// resolve : 함수이며 성공하면 then으로 결과를 반환
// reject : 함수이며 실패하면 catch로 결과를 반환
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const text = prompt('따봉을 입력해줘!! 선물 줄게')
        if (text === '따봉') {
            //resolve() 를 호출해서 then으로 결과를 보냄
            resolve('👍')
        } else {
            //reject() 를 호출해서 catch()로 결과 보냄
            reject('따봉이 아니잖아.')
        }
    }, 2000);
})

myPromise
    .then((result) => {
        console.log(`Promise : ${result}`)
    })
    .catch((error) =>{
        console.log(`Promise : ${error}`)
    })
    .finally(()=>{
        console.log("끝")
    })