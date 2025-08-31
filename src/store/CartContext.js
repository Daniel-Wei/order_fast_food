import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState({
        orderedItems: [],
        totalPrice: 0,
        totalAmount: 0,
    });

    const addItem = (menuItemData) => {
        setCartData(prev => {
            let orderedItems = [...prev.orderedItems];
            let item = orderedItems.find(t => t.id === menuItemData.id);
            orderedItems = orderedItems.filter(t => t.id !== menuItemData.id);

            if(item){
                item = {...item, amount: item.amount + 1};
            }else{
                item = {...menuItemData, amount : 1};
            }

            orderedItems.push(item);

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
            orderedItems = orderedItems.filter(t => t.id !== id);
            if(itemAmount > 1){
                existing = {...existing, amount: itemAmount - 1};
                orderedItems.push(existing);
            }

            return {
                orderedItems: orderedItems,
                totalPrice: prev.totalPrice - existing.price,
                totalAmount: prev.totalAmount - 1
            }
        })
    }

    return <CartContext.Provider value = {{cartData, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);