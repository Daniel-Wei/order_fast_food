import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState({
        orderedItems: [],
        totalPrice: 0,
        totalAmount: 0,
    });


    const emptyCart = () => {
        setCartData(_ => {
            return {
                orderedItems: [],
                totalPrice: 0,
                totalAmount: 0
            }
        });
    }

    const addItem = (menuItemData) => {
        setCartData(prev => {
            let orderedItems = [...prev.orderedItems];
            let item = orderedItems.find(t => t.id === menuItemData.id);
            let idx = orderedItems.indexOf(item);

            if(item){
                item = {...item, amount: item.amount + 1};
                orderedItems[idx] = item;
            }else{
                item = {...menuItemData, amount : 1};
                orderedItems.push(item);
            }

            return {
                orderedItems: orderedItems,
                totalAmount: prev.totalAmount + 1,
                totalPrice: prev.totalPrice + menuItemData.price
            }
        })
    }

    const removeItem = (id) => {
        setCartData(prev => {
            let orderedItems = [...prev.orderedItems];
            let existing = orderedItems.find(t => t.id === id);
            
            if(!existing){
                return prev;
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
                totalPrice: prev.totalPrice - existing.price,
                totalAmount: prev.totalAmount - 1
            }
        })
    }

    return <CartContext.Provider value = {{cartData, addItem, removeItem, emptyCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);