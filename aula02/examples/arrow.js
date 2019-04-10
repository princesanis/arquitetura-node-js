// const add = function(a, b){
//     return a + b
// }

// const add = (a, b) => a + b

// const resultado = add(2,2)
// console.log(resultado)

const carro = {
    name : 'Ferrari',
    start: function(){
        console.log(`my car is ${this.name}`)
    }
}

const carro = {
    name : 'Ferrari',
    start (){
        console.log(`my car is ${this.name}`)
    }
}

const carro = {
    name : 'Ferrari',
    attributes : ['fast', 'expensive'],
    start (){
        console.log(`my car is ${this.name}`)

        this.attributes.forEach((attr) => {
            console.log(` my ${this.name} and  it is ${attr}`)
        })
    }
}

carro.start()