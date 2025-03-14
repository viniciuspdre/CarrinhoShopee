import * as cart from "./services/cart"

async function main() {
    let myCart: cart.Item[] = []

    const item1: cart.Item = {
        id: 0,
        name: "Carrinho",
        price: 20.99,
        quantity: 4
    }

    const item2: cart.Item = {
        id: 1,
        name: "Etiqueta",
        price: 8.99,
        quantity: 1
    }
    
    await cart.addItem(myCart, item1)
    await cart.addItem(myCart, item2)
    cart.displayCart(myCart)
    await cart.removeItem(myCart, 1)
    cart.displayCart(myCart)
    // console.log(await cart.calcTotal(myCart))  
    // await cart.deleteItem(myCart, 0)
    // cart.displayCart(myCart)
    // console.log(await cart.calcTotal(myCart))
}

main()