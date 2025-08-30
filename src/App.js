import Menu from "./Components/Menu";
import appModule from './App.module.css';
import { useState } from "react";
import { CartProvider } from "./store/CartContext";

const menuData = [
        {
            id: 1,
            name: 'Classic Angus',
            price: 12.88,
            imageSource: '/imgs/burgers/classicAngus.jpg',
            description: 'Juicy 100% Aussie Angus beef, cheese, fresh tomato, red onions and tangy pickles, all topped with mustard and creamy McChicken® sauce - served on a perfectly toasted sesame and poppy seed bun.',
        },
        {
            id: 2,
            name: 'Double Big Mac',
            price: 11.98,
            imageSource: '/imgs/burgers/doubleBigMac.jpg',
            description: "It starts with two 100% Aussie beef patties. Then comes the delicious combination of crisp iceberg lettuce, melting signature cheese, onions and pickles, between a toasted sesame seed bun. And don''t forget the McDonald''s special sauce!",
        },
        {
            id: 3,
            name: 'Big Arch',
            price: 15.68,
            imageSource: '/imgs/burgers/giantCheeseBurger.jpg',
            description: 'Two 100% Aussie beef patties, stacked with three layers of white cheddar cheese, crispy onions, slivered onions, pickles, fresh lettuce, and our signature Big Arch sauce. All served on a perfectly toasted sesame and poppy seed bun.',
        },
        {
            id: 4,
            name: 'Green Chile',
            price: 12.88,
            imageSource: '/imgs/burgers/greenChileCheeseBurger.jpg',
            description: 'a New Mexico culinary icon featuring a juicy beef patty topped with fiery, roasted green chiles, often a specific variety like Hatch, and melted cheese. The signature ingredient, the roasted green chile, provides a smoky, spicy flavor that is central to this beloved regional dish, distinguishing it from other burgers by its intense heat and unique, vibrant taste.',
        },

        {
            id: 5,
            name: 'Classic Angus',
            price: 12.88,
            imageSource: '/imgs/burgers/classicAngus.jpg',
            description: 'Juicy 100% Aussie Angus beef, cheese, fresh tomato, red onions and tangy pickles, all topped with mustard and creamy McChicken® sauce - served on a perfectly toasted sesame and poppy seed bun.',
        },
        {
            id: 6,
            name: 'Double Big Mac',
            price: 11.98,
            imageSource: '/imgs/burgers/doubleBigMac.jpg',
            description: "It starts with two 100% Aussie beef patties. Then comes the delicious combination of crisp iceberg lettuce, melting signature cheese, onions and pickles, between a toasted sesame seed bun. And don''t forget the McDonald''s special sauce!",
        },
        {
            id: 7,
            name: 'Big Arch',
            price: 15.68,
            imageSource: '/imgs/burgers/giantCheeseBurger.jpg',
            description: 'Two 100% Aussie beef patties, stacked with three layers of white cheddar cheese, crispy onions, slivered onions, pickles, fresh lettuce, and our signature Big Arch sauce. All served on a perfectly toasted sesame and poppy seed bun.',
        },
        {
            id: 8,
            name: 'Green Chile',
            price: 12.88,
            imageSource: '/imgs/burgers/greenChileCheeseBurger.jpg',
            description: 'a New Mexico culinary icon featuring a juicy beef patty topped with fiery, roasted green chiles, often a specific variety like Hatch, and melted cheese. The signature ingredient, the roasted green chile, provides a smoky, spicy flavor that is central to this beloved regional dish, distinguishing it from other burgers by its intense heat and unique, vibrant taste.',
        }, 
    ]

const App = () => {
    return <div className={appModule.app}>
            <CartProvider>
                <Menu menuData = {menuData}/>
            </CartProvider>
        </div>
}

export default App;