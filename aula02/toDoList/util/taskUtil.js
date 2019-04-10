const fs = require('fs')
const chalk = require('chalk')

const loadTasks = () => {

    try{
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer.toString())
    }
    catch(err){
        return []
    }
}

const findTask = (name) => {

    let jsonFile = loadTasks('tasks.json');

    const task = jsonFile.find((t) => { return t.name === name });

    console.log(task)

}

const addTask = (name, description) => {
    
    debugger

    // descobrir se a tarefa já existe
    const tasks = loadTasks()
    const duplicatedTasks = 
    tasks.find((task) => (task.name === name))

    if(!duplicatedTasks){
        const task ={
            name, 
            description
        }

        // adicionar no array tasks a nova task
        tasks.push(task)
        saveTask(tasks)

        console.log(chalk.green.bold.inverse('Task added with successful!'))
    }
    else
    {
        //throw new Error('This task already exists!')
        console.log(chalk.red.bold.inverse('This task already exists!'))
    }

    fs.appendFileSync(file, JSON.stringify(task))
}

const deleteTask = (name) => {

    let listTasks = loadTasks('tasks.json')

    // const indexTask = listTasks.find((task, index) => {
        
    //     if(task.name === name){
    //         return index
    //     }
    // })

    const tasks = listTasks.filter((task) => {
        return task.name !== name
    })

    console.log(indexTask)  
}

const saveTask = () => {
    const taskJson = JSON.stringify(task)
    fs.writeFileSync('task.json', taskJson)
}

module.exports = {
    addTask,
    loadTasks,
    deleteTask,
    findTask
}