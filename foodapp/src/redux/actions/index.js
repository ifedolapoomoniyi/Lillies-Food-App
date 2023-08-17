export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item,
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    }
}