import meunItemModule from './MenuItem.module.css';

const MenuItem = () => {
    return <div className={meunItemModule.menuItem}>
        <div className={meunItemModule.imgContainer}>
            <img src='/imgs/burgers/giantCheeseBurger.jpg'></img>
        </div>
        <div>
            <h2 className={meunItemModule.title}>Giant Cheese Burger</h2>
            <p className={meunItemModule.description}>Our famous cheeseburger is a legendary combo of 100% Aussie beef, classic cheese, onions, a pickle, tangy ketchup and mustard. Enjoy at Macca's® today!</p>
            <div className={meunItemModule.disclaimer}>
                <span className={meunItemModule.price}>$12</span>
                <div>count</div>
            </div>
        </div>
    </div>
}

export default MenuItem;