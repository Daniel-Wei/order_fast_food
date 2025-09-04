import { createPortal } from "react-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartDetailsModule from './CartDetails.module.css';
import CartDetailsItem from "./CartDetailsItem/CartDetailsItem";
import { useCart } from "../../../store/CartContext";
import { useState } from "react";
import ConfirmModal from "../../UI/ConfirmModel/ConfirmModel";

const CartDetails = () => {
    const cartDetailsRoot = document.getElementById('cartDetailsRoot');
    const { cartData, emptyCart } = useCart();
    const shoppingCartNotEmpty = cartData.totalAmount > 0;

    const [showEmptyConfirmation, setShowEmptyCartConfirmation] = useState();
    const onConfirmEmptyCart = () => {
        if(shoppingCartNotEmpty) {
            setShowEmptyCartConfirmation(_ => false);
            emptyCart();
        }
    }

    const onCancelEmptyCart = () => {
        setShowEmptyCartConfirmation(_ => false);
    }

    const onEmptyCartButtonClicked = () => {
        setShowEmptyCartConfirmation(_ => true);
    }
    
    const portalContent = <Backdrop>
        {
            showEmptyConfirmation ? <ConfirmModal 
                confirmText="Are you sure to empty cart?"
                onConfirmDelete={onConfirmEmptyCart}
                onCancelDelete={onCancelEmptyCart}/> 
            : ''
        }

        <div className={CartDetailsModule.cartDetailsContainer}>
            <div className={CartDetailsModule.cartDetailsHeaderContainer}>
                <header>Order Details</header>
                <div className={CartDetailsModule.emptyCartContainer} onClick={onEmptyCartButtonClicked}>
                    <FontAwesomeIcon icon={faTrash}/>
                    <div className={CartDetailsModule.emptyCartText}>
                        Empty
                    </div>
                </div>
            </div>
            {
                shoppingCartNotEmpty ? 
                    <div className={CartDetailsModule.cartDetailsListContainer}>
                        {
                            cartData.orderedItems.map(data => (
                                <CartDetailsItem 
                                    data = {data}
                                    key={data.id}
                                />
                            ))
                        }
                    </div>
                : ""
            }

            
        </div>
    </Backdrop>

    return createPortal(portalContent, cartDetailsRoot);
}

export default CartDetails;