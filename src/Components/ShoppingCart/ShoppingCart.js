import { useCart } from "../../store/CartContext";

import shoppingCartModule from './ShoppingCart.module.css';

const ShoppingCart = () => {
    const { cartData } = useCart();
    const shoppingCartNotEmpty = cartData.totalAmount > 0;
    return <>
        <div className={shoppingCartModule.shoppingCartContainer}>
            <div className={shoppingCartModule.mcdCart}>
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