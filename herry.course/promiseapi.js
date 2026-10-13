let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("value 3")
    },1000)
})