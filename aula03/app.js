const yargs = require('yargs')
const cotacao = require('./util/cotacao')
const chalk = require('chalk')

// alterando a versão do CLI
yargs.version('1.0.0')

yargs.command({
    command: 'consulta',
    describe: 'Consulta um ativo na bolsa de valores',
    builder: {
        ativo: {
            describe: 'Ativo na bolsa de valores',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        cotacao(argv.ativo.toUpperCase(), (data) =>{
            console.log(chalk.green.bold.inverse(data.symbol))
            console.log(chalk.red.bold(`Menor valor do dia: ${data.day_low}`))
            console.log(chalk.blue.bold(`Maior valor do dia: ${data.day_high}`))
            console.log(chalk.white.bold(`Valor de Abertura: ${data.price_open}`))
            console.log(chalk.white.bold(`Valor de Fechamento: ${data.price}`))
        })
    }
})

yargs.parse()