const pessoa = {
    name : 'prince',
    age : '31'
}

//console.log(pessoa)
const pessoaJSON = JSON.stringify(pessoa)
//console.log(pessoaJSON)

fs.writeFileSync('pessoa.json', pessoaJSON)

const buffer = fs.readFileSync('pessoa.json')
