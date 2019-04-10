// console.log('primeiro')

// setTimeout(()=>{
//     console.log('segundo')
//     setTimeout(()=>{
//         console.log('interno')
//     },2000)
// },2000)

// console.log('terceiro')

const add = (a, b, timeout, callback) =>{
    setTimeout(()=>{
        const resultado = a + b
        console.log(resultado)
    },timeout)
}

add(2, 2, 2000, (resultado)=>{
    console.log(resultado)
})

add(4, 3, 5000, (resultado)=>{
    console.log(resultado)
})