// async await >> promise chain >> callback hell

// synchronous and asynchronous

// synchronous -> means the code run in particular sequence. Each instruction waits for the previous instruction to complete its execution.
// asynchronous -> code allows to execute next instruction immediately and doesn't block the flow.


// Callback Hell :- Nested callbacks stacked below one another forming a pyramid structure.(which is also known as pyramid of doom).

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         // console.log("data",dataId);
//         if (getNextData) {
//             // getNextData();
//         }
//     }, 2000);
// }
// // callback hell -> nested callback
// getData(1, ()=>{
//     console.log("getting second data...");
//     getData(2,()=>{
//         console.log("gettind third data...");
//         getData(3,()=>{
//             console.log("gettind fourth data...");
//             getData(4);
//         })
//     });
// });



// Alredy done
// Promises -> Promise is for eventual completion of task. It is an object in js.
// It is also a soln of callback hell.
// syntax -> let promise = new Promise(resolve,reject) => {}
// resolve and reject are callbacks provided by JS.
// States in promises -> pending , resolved , rejected.
// .then() & .catch() in promises. ie
// promise.then((res)=>{}) // .then function execute when our promise is fullfiled otherwise .catch will execute.

// const getPromise = () => {
//     let myPromise = false;
//     return new Promise( (resolve,reject)=>{
//         if(myPromise){
//             // resolve({name:"JSON", value:1234})
//         }
//         else{
//             // reject("Error | check ur connection");
//         }
//     }
//     )
// }

// getPromise()
// .then((res)=>{
// console.log("Data fetched -> ",res)
// })
// .catch((err)=>{
//     console.log("Promise rejected due to reason : ",err)
// })
// .finally(()=>{
//     // console.log("It works by default");
// })



//Promise chaining ->code work like same as callback hell
// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("All Data fetched successfully...")
//         }, 2000);
//     });
// }
// console.log("Fetching data 1..")
// getData(11)
// .then((res)=>{
//     console.log("Fetching data 2..")
//     return getData(22);
// })
// .then((res)=>{
//     console.log("Fetching data 3..")
//     return getData(33);
// })
// .then((res)=>{
//     console.log(res);
// })


// Async-Await -> async function always return a promise.
// Await -> await pauses the execution of its surrounding async function until the promise is settled.It only used inside the async function.
// async function myFunc(){}


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("All Data fetched successfully...")
        }, 2000);
    });
}
async function getAllData(res) {
    console.log("Fetching data 1..")
    await getData(1)
    console.log("Fetching data 2..")
    await getData(2)
    console.log("Fetching data 3..")
    await getData(3)
    console.log("Fetching data 4..")
    getData(4).then((res)=>{
        console.log(res);
    })
}
getAllData()

// if u don't want to call the use IIFE.


// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
//   }
  
//   f();