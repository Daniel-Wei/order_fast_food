import CounterModule from "./Counter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../store/CartContext";

const Counter = ({menuItemData, amount}) => {
    const {addItem, removeItem} = useCart();

    const onAddBtnClicked = () => {
        addItem(menuItemData);
    }

    const onRemoveBtnClicked = () => {
        removeItem(menuItemData.id);
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
                            </span>:
                        </> : ""
        }
       
        <button className ={CounterModule.addButton} onClick={onAddBtnClicked}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
}
export default Counter;