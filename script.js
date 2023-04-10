let task = window.document.getElementById('txtTask')
let toDoList = document.getElementById('toDoList')
let listTask = []

function AddTask() {
    if (task.value.length == 0) {
        alert('[ERRO] verifique o campo')
    } else if (listTask.includes(task.value)) {
        alert('[ERRO] ja existe uma tarefa com essa descricao')
        document.getElementById("txtTask").value = ""
    } else {
        listTask.push(task.value);
        document.getElementById("txtTask").value = "";
        criarlista();
    }
}

function criarlista() {
    toDoList.innerHTML = ''
    for (let i = 0; i < listTask.length; i++) {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')

        span.innerText = listTask[i]
        button.innerText = 'Excluir'

        button.addEventListener('click', function () {
            listTask.splice(i, 1)
            criarlista()
        })

        li.appendChild(span)
        li.appendChild(button)
        toDoList.appendChild(li)
    }
}