import { useState } from "react";
import { Link } from "react-router-dom";
import { getWebshopDrinks } from "../data/drinkList";
import cartPic from '../assets/cart.png';
import linkPic from '../assets/external-link.png';
import Cart from '../components/Cart';
import AccountLogo from "./AccountLogo";

export default function WebshopPage(){
    const webshopDrinks = getWebshopDrinks();
    const [cart, setCart] = useState([]);

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
        console.log(cart);
    }

    return(
        <div className='webshop-page'>
            <AccountLogo />
            <div className="welcome welcome-webshop">
                <div className="square">
                    <h2>Webshop</h2>
                    <p>Countless ( 5 ) packed coffee in one place </p>
                </div>
            </div>
            <h3 className='discount-message'>Our registered customers will get 10% discount from their orders, celebrating the launch of this website. 
                    The promotion lasts until the end of this year. <span><Link to='/register'><img src={linkPic} alt="" /></Link></span>
            </h3>
            <div className="webshop-grid-container resp-container">
                {webshopDrinks.map(drink => (
                    <div key={drink.id} className="webshop-grid-container">
                        <div className="left-webshop-grid-item grid-item">
                            <img src={drink.packedImg} alt="" />
                        </div>
                        <div className="right-webshop-grid-item grid-item">
                            <h2 className="drink-name">{drink.name}</h2>
                            <h3>Ingredients:</h3>
                            {drink.ingredients.map(item => (
                                <p key={item}>{item}</p>
                            ))}
                            <p>Prize: ${drink.price}</p>
                            <button onClick={() => addToCart(drink)} className="btn">Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <a href='#shopping-cart'><img className='cart-img' src={cartPic} alt="" /></a>
            <p className='cart-counter'>{cart.reduce((acc, i) => acc + (i.quantity), 0)}</p>
            <br />
            <div className="line"></div>
            <div id="shopping-cart">
                <Cart cart={cart} setCart={setCart}/>
            </div>
        </div>
    );
}