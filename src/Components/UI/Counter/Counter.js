import CounterModule from "./Counter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../store/CartContext";
import CartActionTypeEnums from "../../../store/CartActionTypeEnums";

const Counter = ({menuItemData, amount}) => {
    const { cartDataDispatch } = useCart();

    const onAddBtnClicked = () => {
        cartDataDispatch( { type: CartActionTypeEnums.add, payload: menuItemData} );
    }

    const onRemoveBtnClicked = () => {
        cartDataDispatch( { type: CartActionTypeEnums.remove, payload: menuItemData.id });
    }

    const selected = amount > 0;
    
    return <div className= {CounterModule.counterContainer}>

        {
            selected ? <>
                            <button className ={CounterModule.subButton} onClick={onRemoveBtnClicked}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </button> 
                            <span className= {CounterModule.counterText}>
                                {amount}
                            </span>
                        </> : ""
        }
       
        <button className ={CounterModule.addButton} onClick={onAddBtnClicked}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
}
export default Counter;