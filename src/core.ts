class Item {
    constructor(public item:string) {}
}

class TodoList {
    private itens: Item[] = [];
    constructor(public filePath: string) { }

    addItem(item: Item) {
        this.itens.push(item)
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }
    
    getItens() {
        return this.itens
    }
}

const zika = new TodoList("arquivo.txt")