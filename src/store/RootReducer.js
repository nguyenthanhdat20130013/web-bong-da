const initState = {
    products: [],
    cart: []
}
export const root = (state = initState, action)=>{
    switch (action.type) {
        case 'products.load':
            return { ...state,
                products: action.payload
            };
        case 'cart.add':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        default:
            return state;

    }
}