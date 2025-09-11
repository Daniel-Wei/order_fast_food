import { createContext, useContext, useReducer } from "react";
import CartActionTypeEnums from "./CartActionTypeEnums";

const empty = () => {
    return {
        orderedItems: [],
        totalPrice: 0,
        totalAmount: 0
    }
};

const CartReducer = (state, action) => {
    let ordered = [...state.orderedItems];

    switch(action.type){
        case CartActionTypeEnums.add:
            const menuItemData = action.payload;
            let item = ordered.find(t => t.id === menuItemData.id);
            let index = ordered.indexOf(item);

            if(item){
                item = {...item, amount: item.amount + 1};
                ordered[index] = item;
            }else{
                item = {...menuItemData, amount : 1};
                ordered.push(item);
            }

            return {
                orderedItems: ordered,
                totalAmount: state.totalAmount + 1,
                totalPrice: state.totalPrice + menuItemData.price
            }
        case CartActionTypeEnums.remove:
            const id = action.payload;
            let existing = ordered.find(t => t.id === id);
            
            if(!existing){
                return state;
            }

            let itemAmount = existing.amount;
            let idx = ordered.indexOf(existing);
            if(itemAmount > 1){
                existing = {...existing, amount: itemAmount - 1};
                ordered[idx] = existing;
            }else{
                ordered = ordered.filter(t => t.id !== existing.id);
            }

            return {
                orderedItems: ordered,
                totalPrice: state.totalPrice - existing.price,
                totalAmount: state.totalAmount - 1
            };
        case CartActionTypeEnums.empty:
            return empty();
        default:
            return state;
    }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartData, cartDataDispatch] = useReducer(CartReducer, empty());

    return <CartContext.Provider value = {{ cartData, cartDataDispatch }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);