import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({
        orderedItems: [],
        totalPrice: 0,
        totalAmount: 0,
    });

    const addItem = (newItem) => {
        setCart((prev) => {
            const orderedItems = [...prev.orderedItems];
            const existing = orderedItems.find(t => t.id === newItem.id);

            if (!existing) {
                orderedItems.push({ ...newItem, amount: 1 });
            } else {
                const updated = { ...existing, amount: existing.amount + 1 };
                const index = orderedItems.findIndex(t => t.id === newItem.id);
                orderedItems[index] = updated;
            }

            return {
                orderedItems,
                totalPrice: prev.totalPrice + newItem.price,
                totalAmount: prev.totalAmount + 1,
            };
        });
    };

    const removeItem = (id) => {
        setCart((prev) => {
            let orderedItems = [...prev.orderedItems];
            const existing = orderedItems.find(t => t.id === id);

            if (!existing) {
                return prev;
            }else{
                const index = orderedItems.findIndex(t => t.id === id);
                const updated = {...existing, amount: existing.amount - 1};
                
                if(updated.amount == 0){
                    orderedItems = orderedItems.filter(t => t.id !== id);
                }else{
                    orderedItems[index] = updated;
                }

                return {
                    orderedItems: orderedItems,
                    totalPrice: prev.totalPrice - existing.price,
                    totalAmount: prev.totalAmount - 1,
                };
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
