import { createPortal } from "react-dom";
import { useCart } from "../../../store/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CheckoutModule from './Checkout.module.css';
import CartDetailsItem from "../CartDetails/CartDetailsItem/CartDetailsItem";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Checkout = ({ onCloseBtnClicked }) => {
    const checkoutRoot = document.getElementById('checkoutRoot');
    const {cartData} = useCart();

    const portalContent = <Backdrop>
        <div className={CheckoutModule.checkoutContainer}>
            <div className={CheckoutModule.checkoutHeaderContainer}>
                <FontAwesomeIcon icon={faClose} onClick={onCloseBtnClicked}/>
            </div>
            {
                <div className={CheckoutModule.checkoutListContainer}>
                    {
                        cartData.orderedItems.map(data => (
                            <CartDetailsItem 
                                data = {data}
                                key={data.id}
                            />
                        ))
                    }
                </div>
            }
        </div>
    </Backdrop>
    

    return createPortal(portalContent, checkoutRoot);
}

export default Checkout;