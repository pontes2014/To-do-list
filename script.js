setTimeout(pontes, 50)
setTimeout(removeDiv, 10000)
setTimeout(aparecerDiv, 10005)

let div = document.getElementById('box-apresentacao')

function pontes() {
    const texto = document.getElementById('texto')
    const conteudo = texto.innerHTML;
    texto.innerHTML = ''

    let i = 0;
    const intervalo = setInterval(() => {
        if (i < conteudo.length) {
            texto.innerHTML += conteudo.charAt(i)
            i++
        } else {
            clearInterval(intervalo)
        }
    }, 50);
}

function removeDiv() {
    document.getElementById('box-apresentacao').style.display = 'none'
}

function aparecerDiv() {
    document.getElementById('test').style.display = 'flex'
}

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
        listTask.push(task.value)
        document.getElementById("txtTask").value = ""
        criarlista()
    }
}

function criarlista() {
    toDoList.innerHTML = ''
    for (let i = 0; i < listTask.length; i++) {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')

        span.innerText = listTask[i]
        button2.innerText = 'realizado'
        button1.innerText = 'Excluir'
        
        button1.classList.add('botaoExcluir')
        button2.classList.add('botaoRealizado')
        li.classList.add('listaTarefas')

        button1.addEventListener('click', function () {
            listTask.splice(i, 1)
            criarlista()
        })

        button2.addEventListener('click', function () {
            span.classList.toggle('feito')
        })

        li.appendChild(span)
        li.appendChild(button2)
        li.appendChild(button1)
        toDoList.appendChild(li)
    }
}