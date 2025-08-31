import MenuItem from "./MenuItem/MenuItem";
import MenuModule from "./Menu.module.css";
import { useCart } from "../store/CartContext";

const Menu = ({menuData}) => {
    const { cartData } = useCart();
    menuData = menuData.map(data => (
        <MenuItem 
            key={data.id}
            menuItemData={data}
            amount={cartData.orderedItems.find(t => t.id === data.id)?.amount ?? 0}
        />
    ));

    return <div className={MenuModule.menuContainer}>
        <div className={MenuModule.menuDetailsContainer}>
            {menuData}
        </div>
    </div>
};

export default Menu;