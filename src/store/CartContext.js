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
    switch(action.type){
        case CartActionTypeEnums.add:
            const menuItemData = action.payload;
            let ordered = [...state.orderedItems];
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
            let orderedItems = [...state.orderedItems];
            let existing = orderedItems.find(t => t.id === id);
            
            if(!existing){
                return state;
            }

            let itemAmount = existing.amount;
            let idx = orderedItems.indexOf(existing);
            if(itemAmount > 1){
                existing = {...existing, amount: itemAmount - 1};
                orderedItems[idx] = existing;
            }else{
                orderedItems = orderedItems.filter(t => t.id !== existing.id);
            }

            return {
                orderedItems: orderedItems,
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
    const addItem = (menuItemData) => {
        cartDataDispatch({type: CartActionTypeEnums.add, payload: menuItemData});
    }

    const removeItem = (id) => {
        cartDataDispatch({type: CartActionTypeEnums.remove, payload: id});
    }

    const emptyCart = () => {
        cartDataDispatch({type: CartActionTypeEnums.empty});
    }

    return <CartContext.Provider value = {{cartData, addItem, removeItem, emptyCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);