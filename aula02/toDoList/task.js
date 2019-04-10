const yargs = require('yargs')
const taskUtil = require('./util/taskUtil')

yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'adding new task',
    builder:{
        name:{
            describe: 'task name',
            demandOption: true,
            type: 'string'
        },
        description:{
            describe: 'task description',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler: function(argv){
        taskUtil.addTask(argv.name, argv.description)
    }
})
.command({
    command: 'delete',
    describe: 'delete a task',
    builder:{
        name:{
            describe: 'task name',
            demandOption: true,
            type: 'string',
            require: true
        }
    }, 
    handler: function(argv){
        taskUtil.deleteTask(argv.name)
        console.log(argv.name)
    }
})
.command({
    command: 'list',
    describe: 'list tasks',
    handler: function(argv){
        taskUtil.loadTasks()
    }
})
.command({
    command: 'find',
    describe: 'find task',
    builder:{
        name:{
            describe: 'task name',
            demandOption: true,
            type: 'string',
            require: true
        },
        description:{
            describe: 'task description',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler: function(argv){
        taskUtil.findTask(name)
        console.log('')   
    }             
})

//console.log(yargs.argv)