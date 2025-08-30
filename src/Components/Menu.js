import MenuItem from "./MenuItem/MenuItem";
import MenuModule from "./Menu.module.css";

const Menu = () => {
    return <div className={MenuModule.menuContainer}>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
    </div>
}

export default Menu;