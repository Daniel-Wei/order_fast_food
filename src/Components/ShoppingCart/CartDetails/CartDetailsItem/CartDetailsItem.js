import Counter from '../../../UI/Counter/Counter';
import CartDetailsItemModule from '../CartDetailsItem/CartDetailsItem.module.css';

const CartDetailsItem = ({data}) => {
    return <div className={CartDetailsItemModule.cartItem}>
        <div className={CartDetailsItemModule.imgContainer}>
            <img src={data.imageSource}></img>
        </div>
        <div className={CartDetailsItemModule.orderDetailsContainer}>
            <h2 className={CartDetailsItemModule.title}>
                {data.name}
            </h2>
            <div className={CartDetailsItemModule.disclaimer}>
                <span className={CartDetailsItemModule.price}>
                    ${data.price}
                </span>
                <Counter 
                    menuItemData={data} 
                    amount = {data.amount}
                />
            </div>
        </div>
    </div>
}

export default CartDetailsItem;