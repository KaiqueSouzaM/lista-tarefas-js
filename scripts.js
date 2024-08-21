let BotaoAdd = document.getElementById('botao')
let imput = document.getElementById('imput-tarefas')
let tarefas = document.getElementById('tarefas')
let marcado = false

BotaoAdd.addEventListener('click', function() {
     if (imput.value != '') {
        var tarefa = document.createElement('p');
        tarefas.appendChild(tarefa);
        tarefa.innerText = '- ' + imput.value;
        imput.value = '';
        tarefa.addEventListener('click', function() {
            if (marcado == false ) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            }
            else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        tarefa.addEventListener ('dblclick', function() {
            tarefas.removeChild(tarefa);
        })
     }
})
