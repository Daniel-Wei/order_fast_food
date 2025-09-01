import { createPortal } from "react-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartDetailsModule from './CartDetails.module.css';
import CartDetailsItem from "./CartDetailsItem/CartDetailsItem";
import { useCart } from "../../../store/CartContext";

const CartDetails = () => {
    const modelRoot = document.getElementById('modelRoot');
    const { cartData } = useCart();
    
    const portalContent = <Backdrop>
        <div className={CartDetailsModule.cartDetailsContainer}>
            <div className={CartDetailsModule.cartDetailsHeaderContainer}>
                <header>Order Details</header>
                <div className={CartDetailsModule.emptyCartContainer}>
                    <FontAwesomeIcon icon={faTrash}/>
                    <div className={CartDetailsModule.emptyCartText}>
                        Empty Cart
                    </div>
                </div>
            </div>

            <div className={CartDetailsModule.cartDetailsListContainer}>
                {
                    cartData.orderedItems.map(data => (
                        <CartDetailsItem data = {data}/>
                    ))
                }
            </div>
        </div>
    </Backdrop>

    return createPortal(portalContent, modelRoot);
}

export default CartDetails;