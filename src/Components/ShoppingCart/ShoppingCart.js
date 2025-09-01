import { useState } from "react";
import { useCart } from "../../store/CartContext";
import shoppingCartModule from './ShoppingCart.module.css';
import CartDetails from "./CartDetails/CartDetails";

const ShoppingCart = () => {
    const { cartData } = useCart();
    const shoppingCartNotEmpty = cartData.totalAmount > 0;
    const [ showCartDetails, setShowCartDetails ]= useState(false);


    const onDetailsClicked = () => {
        setShowCartDetails(prev => !prev);
    }

    return <>
        <div className={shoppingCartModule.shoppingCartContainer}>
            <>
                {shoppingCartNotEmpty && showCartDetails ? 
                    <CartDetails/> : ""}

                {/* <CartDetails/> */}
            </>
            <div className={shoppingCartModule.mcdCart} onClick={onDetailsClicked}>
                <div className={shoppingCartModule.bag}>
                    <div className={shoppingCartModule.stripe}></div>
                    <div className={shoppingCartModule.stripe}></div>

                    <div className={shoppingCartModule.handle}></div>
                </div>
            </div>

            {
                shoppingCartNotEmpty ? 
                <>
                    <div className={shoppingCartModule.counter}>
                        { cartData.totalAmount }
                    </div> 
                    <div className={shoppingCartModule.totalPrice}>
                        $ { cartData.totalPrice.toFixed(2) }
                    </div>
                </>: ""
            }

            <div className={`
                    ${shoppingCartModule.checkOutContainer} 
                    ${shoppingCartNotEmpty ? "" : shoppingCartModule.checkOutContainerNotAvailable}`}>
                check out
           </div>
        
            
        </div>
    </>
}

export default ShoppingCart;