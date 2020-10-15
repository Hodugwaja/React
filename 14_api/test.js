/*
function increase(number, callback){
    setTimeout(() => {
        const result = number + 10;
        if(callback){
            callback(result);
        }
    }, 1000)
}

console.log('일해라 카나미');
increase(0, result => {
    console.log(result);
    increase(10, result => {
        console.log(result);
        increase(20, result => {
            console.log(result);
            increase(30, result => {
                console.log(result);
                increase(40, result => {
                    console.log(result);
                })
            })
        })
    })
})
*/
/*
* 콜백 안에 콜백을 넣어서 구현이 가능하지만 여러번 중첩되기 때문에 코드의 가독성이 나빠짐
* === 콜백 지옥
*/

/* promise
function increase(number){
    const promise = new Promise((resolve, reject) => { // resolve : 성공, reject : 실패
        setTimeout(() => {
            const result = number + 10;
            if(result > 50){
                const e = new Error("number is to big\n그리고 마르카는 귀엽습니다(?)");
                return reject(e)
            }
            resolve(result);
        }, 1000)
    })
    return promise
}

increase(0)
    .then(number => {// 다음작업을 실행하도록 지시
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .catch(e => { // 버그가 발생하면 .catch를 통해 알 수 있음
        console.log(e);
    });
    */
   function increase(number){
    const promise = new Promise((resolve, reject) => { // resolve : 성공, reject : 실패
        setTimeout(() => {
            const result = number + 10;
            if(result > 50){
                const e = new Error("number is to big\n그리고 마르카는 귀엽습니다(?)");
                return reject(e)
            }
            resolve(result);
        }, 1000)
    })
    return promise
}
async function runTasks() {
    try{
        console.log("카나미 헤어져라");
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        
    }catch(e){
        console.log(e);
    }
}
runTasks();