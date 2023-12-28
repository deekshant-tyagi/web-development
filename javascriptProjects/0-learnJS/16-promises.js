// promises
// Promise().then().catch().finally()

const promiseOne = new Promise( function(resolve,reject){
    // do any async task
    // data base call , cryptography, network
    setTimeout(() => {
    // console.log('async task is completed');   
    resolve()  //we r connecting resolve with then
    }, 1000);
} )

promiseOne.then(function(){
    // console.log('promise consumed');
})

new Promise( function(resolve,reject){
    setTimeout(() => {
    // console.log('async task2 is completed');   
    resolve();
    }, 1000);
} ).then(function(){
    // console.log('promise2 consumed');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"yash", email:"@xyz.com"})
    }, 1000);
})
promiseThree.then(function(user){
    // console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({data:"javascript", value:12434})
        }
        else{
            reject('Error | something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.data
}).then((data)=>{
    console.log("data is:",data);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("by default"))
// finally works by default no matter condition is true or false.

// by using async await

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({data:"cpp", value:98765})
        }
        else{
            reject('Error | cpp went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()