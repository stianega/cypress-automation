let promise = new Promise((resolve, reject)=>{
    let a = 1+1;
    if (a ==3){
        resolve('berhasil')
    } else {
        reject('tidak berhasil')
    }
})  

promise.then((message)=>
{
    console.log(message+ 'mantap')
}).catch((message)=>{
    console.log(message + 'hfff')
})