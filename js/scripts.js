//função que adiciona tarefa

function addTask() {
    const taskTitle = document.querySelector('#task-title').value

    if (taskTitle) {

        //clonar template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)
        
        //adiciona titulo
        newTask.querySelector('#task-title').textContent = taskTitle

        //remover classes desnecessarias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list')

        list.appendChild(newTask)


        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })

        //função compeltar a tarefa

        function completeTask(task){
            const taskComplete = task.parentNode

            taskComplete.classList.toggle('done')

        }



        //adicionar o evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this)
        })

        //função remover tarefa
        function removeTask(task){
            task.parentNode.remove(true)
        }

        //remover texto digitado ou limpar input
        document.querySelector('#task-title').value = ''


    }
}


//adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e){
    e.preventDefault()
    addTask()
})