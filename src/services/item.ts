

export interface Item {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

export async function calcSubTotal(item: Item): Promise<number> {
    return item.price * item.quantity
}