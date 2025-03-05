// quais acoes meu carrinho

import { Item, calcSubTotal } from "./item"

// adicionar item
async function addItem(userCart: Item[], item: Item) {
    userCart.push(item)
}

// deletar item
async function deleteItem(userCart:Item[], id: number) {
    const index =  userCart.findIndex((item) => item.id == id)

    if(index != -1) {
        userCart.splice(index, 1)
    }
}

// diminuir um item
async function removeItem(userCart:Item[], item: Item) {
    
}

// calcular o total
async function calcTotal(userCart:Item[]): Promise<string> {
    let sum: number = 0
    
    for (const element of userCart) {
        sum += await calcSubTotal(element)
    }


    return sum.toFixed(2)
}

export {
    addItem,
    deleteItem,
    removeItem,
    calcTotal,
    Item,
    calcSubTotal
}