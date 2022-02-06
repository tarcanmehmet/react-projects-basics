const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_DATA':
            return {...state, cart:action.payload}
        case 'LOADING':
            return {...state, loading: !state.loading}
        case 'CLEAR_CART':
            return {...state, cart: []}
        case 'TOTAL':
            return {...state, total: findTotal(state.cart)}
        case 'REMOVE_ITEM':
            return{...state, cart: removeItem(action.payload, state.cart)}
        case 'INCREASE':
            return {...state, cart: increase(action.payload, state.cart)}
        case 'DECREASE':
            return {...state, cart: decrease(action.payload, state.cart)}

    }
}
const findTotal = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.price, 0);
}
const removeItem = (id, arr) => {
    return arr.filter(item => item.id !== id);
}
const increase = (id, arr) => {
    return arr.map(item => {
        if(item.id === id){
            return {...item, amount: item.amount + 1 }
        }
        return item;
    })
}
const decrease = (id, arr) => {
    return arr.map(item => {
        if(item.id === id){
            return {...item, amount: item.amount -1 }
        }
        return item;
    }).filter(item => item.amount != 0);
}

export default reducer