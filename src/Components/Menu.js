import MenuItem from "./MenuItem/MenuItem";
import MenuModule from "./Menu.module.css";
import { useCart } from "../store/CartContext";

const Menu = ({menuData}) => {
    const { cart } = useCart();
    menuData = menuData.map(data => (
        <MenuItem 
            key={data.id}
            menuItemData={data}
            amount={cart.orderedItems.find(t => t.id === data.id)?.amount ?? 0}
        />
    ));

    return <div className={MenuModule.menuContainer}>
        {menuData}
    </div>
};

export default Menu;