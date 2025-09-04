import { useState } from "react";
import { useCart } from "../../store/CartContext";
import shoppingCartModule from './ShoppingCart.module.css';
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
import ConfirmModal from "../UI/ConfirmModel/ConfirmModel";

const ShoppingCart = () => {
    const { cartData, emptyCart } = useCart();
    const shoppingCartNotEmpty = cartData.totalAmount > 0;
    const [ showCartDetails, setShowCartDetails ]= useState(false);
    const [ showCheckoutPage, setShowCheckoutPage ] = useState(false);
    const [ showPaymentConfirmPrompt, setShowPaymentConfirmPrompt ] = useState(false);

    const onDetailsClicked = () => {
        // always hide cart details when at checkout stage
        if(!showCheckoutPage){
            setShowCartDetails(prev => !prev);
        }
    }

    const onCheckoutButtonClicked = () => {
        setShowCheckoutPage(prev => !prev);
        if(!showCheckoutPage) {
            setShowCartDetails(false);
        }
    }

    const onCheckoutCloseButtonClicked = () => {
        setShowCheckoutPage(false);
        setShowCartDetails(false);
    }

    const onPayButtonClicked = () => {
         setShowPaymentConfirmPrompt(_ => true);
    }

    const onPaymentConfirmed = () => {
        onPaymentCancelled();
        emptyCart();
    }

    const onPaymentCancelled = () => {
        setShowPaymentConfirmPrompt(_ => false);
        onCheckoutButtonClicked();
    }

    return <>
        <div className={shoppingCartModule.shoppingCartContainer} onClick={onDetailsClicked}>
            <>
                {
                    showCheckoutPage ? <Checkout onCloseBtnClicked = {onCheckoutCloseButtonClicked}/> : ""
                }
            </>
            <>
                {
                    showCartDetails ? <CartDetails/> : ""
                }
            </>
            <>
                {
                    showPaymentConfirmPrompt ? <ConfirmModal 
                        confirmText="Please confirm your payment"
                        onConfirmDelete={onPaymentConfirmed}
                        onCancelDelete={onPaymentCancelled}
                    /> : ""
                }
            </>
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
                    ${shoppingCartNotEmpty ? "" : shoppingCartModule.checkOutContainerNotAvailable}`}
                onClick={showCheckoutPage ? onPayButtonClicked : onCheckoutButtonClicked}>
                {showCheckoutPage ? "Pay" : "Check out"}
           </div>
        
            
        </div>
    </>
}

export default ShoppingCart;