import CounterModule from "./Counter.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../store/CartContext";

const Counter = ({menuItemData, amount}) => {
    const {addItem, removeItem} = useCart();

    const onAddBtnClicked = () => {
        addItem(menuItemData);
    }

    const onRemoveBtnClicked = () => {
        removeItem(menuItemData.id);
    }
    
    return <div className= {CounterModule.counterContainer}>
        <button className ={CounterModule.subButton} 
            style= {{visibility: amount > 0 ? 'visible' : 'hidden'}}
            onClick={onRemoveBtnClicked}
         >
            <FontAwesomeIcon icon={faMinus}/>
        </button>
        <span className= {CounterModule.counterText} style= {{visibility: amount > 0 ? 'visible' : 'hidden'}}>{amount}</span>
        <button className ={CounterModule.addButton} onClick={onAddBtnClicked}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
}
export default Counter;