import { useState } from "react";
import { getWebshopDrinks } from "../data/drinkList";
import cartPic from '../assets/cart.png';

export default function WebshopPage(){
    const webshopDrinks = getWebshopDrinks();
    const [cart, setCart] = useState([]);
    const cartItems = cart.length;

    const addToCart = (drink) => {
        const counter = document.querySelector('.webshop-page .cart-counter');
        counter.classList.add('counter-background');
        const cartCopy = [...cart];
        const itemInCart = cartCopy.find(item => drink.name === item.name);
        if(itemInCart){
            itemInCart.quantity += 1;
            setCart(cartCopy);
        }else{
            setCart(prevCart => [...prevCart, { ...drink, quantity: 1}])
        }
    }

    return(
        <div className='webshop-page'>
            <div className="welcome welcome-webshop">
                <div className="square">
                    <h2>Webshop</h2>
                    <p>Countless ( 5 ) packed coffee in one place </p>
                </div>
            </div>
            <div className="webshop-grid-container">
                {webshopDrinks.map(drink => (
                    <div key={drink.id} className="webshop-grid-container">
                        <div className="left-webshop-grid-item grid-item">
                            <img src={drink.packedImg} alt="" />
                        </div>
                        <div className="right-webshop-grid-item grid-item">
                            <h2>{drink.name}</h2>
                            <h3>Ingredients:</h3>
                            {drink.ingredients.map(item => (
                                <p>{item}</p>
                            ))}
                            <p>Prize: ${drink.price}</p>
                            <button onClick={() => addToCart(drink)} className="btn">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <a href='#shopping-cart'><img className='cart-img' src={cartPic} alt="" /></a>
            <p className='cart-counter'>{cartItems}</p>
            <div id="shopping-cart"></div>
        </div>
    );
}