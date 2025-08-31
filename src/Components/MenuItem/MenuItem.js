import Counter from '../UI/Counter/Counter';
import meunItemModule from './MenuItem.module.css';

const MenuItem = ({menuItemData, amount}) => {
    return <div className={meunItemModule.menuItem}>
        <div className={meunItemModule.imgContainer}>
            <img src={menuItemData.imageSource}></img>
        </div>
        <div>
            <h2 className={meunItemModule.title}>
                {menuItemData.name}
            </h2>
            <p className={meunItemModule.description}>
                {menuItemData.description}
            </p>
            <div className={meunItemModule.disclaimer}>
                <span className={meunItemModule.price}>
                    ${menuItemData.price}
                </span>
                <Counter 
                    menuItemData={menuItemData} 
                    amount = {amount}
                />
            </div>
        </div>
    </div>
}

export default MenuItem;