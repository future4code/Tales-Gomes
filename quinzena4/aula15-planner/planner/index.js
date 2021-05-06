function criarTarefa () {
    let selection = document.getElementById("dias-semana").value
    document.getElementById("dias-semana").value = "domingo"

    if(tarefa.value !== "") { // O if serve para a lista não ser preenchida
        let tarefa = document.getElementById("tarefa").value // caso nada for digitado
        document.getElementById(selection).innerHTML += `<p> - ${tarefa} </p>`
        document.getElementById("tarefa").value = ""
        const select = document.getElementById("tarefa")
        select.innerHTML += `<li>${tarefa.value}</li>`
    }
}