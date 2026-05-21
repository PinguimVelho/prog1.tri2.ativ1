// CLI: Command Line Interface

import TodoListClass, { Item } from "./core"

const todoList = new TodoListClass("todoList.json")
const params = process.argv
const command = params[2]

if (command === "add") {
    const value = params[3]

    if (!value) {
        console.log("aqui vai a lógica de adicionar: " + value)
        process.exit(1)
    }
    try {
        await todoList.addItem(new Item(value))
    } catch (error) {
        console.error("Erro ao adicionar item", error)
        process.exit(1)
    }

    console.log(`Item "${value}" adicionado com sucesso!`)
    process.exit(0)
}

if (command)
    console.log(`Comando não reconhecido: ${command}`);
    

console.log(`Comandos disponíveis:
    - add <item>: Adiciona um item a lista
    - remove <index>: remove um item da lista por indice
    - list: Lista os itens atuais
`);
