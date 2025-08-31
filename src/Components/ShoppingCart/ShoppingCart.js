import { useState } from "react";
import { useCart } from "../../store/CartContext";
import Backdrop from "../UI/Backdrop/Backdrop";

import shoppingCartModule from './ShoppingCart.module.css';

const ShoppingCart = () => {
    const { cartData } = useCart();
    const shoppingCartNotEmpty = cartData.totalAmount > 0;
    const [ orderDetails, setOrderDetails ]= useState("");

    const onDetailsClicked = () => {
        if(shoppingCartNotEmpty){
            setOrderDetails(<Backdrop/>)
        }else{
            setOrderDetails("");
        }
    }


    return <>
        <div className={shoppingCartModule.shoppingCartContainer}>
            <>
                {orderDetails}
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