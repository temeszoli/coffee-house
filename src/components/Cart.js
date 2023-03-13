import { Link } from "react-router-dom";

export default function Cart({ cart, setCart }){

    const increase = (name) => {
        const cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        item.quantity += 1
        setCart(cartCopy)
      }
    
      const decrease = (name) => {
        let cartCopy = [...cart]
        const item = cartCopy.find(i => i.name === name)
        if (item.quantity > 1) {
          item.quantity -= 1
        } else {
          cartCopy = cartCopy.filter(i => i.name !== name)
        }
        setCart(cartCopy)
      }

    return(
        <div className='cart-container'>
            <h1>Shopping Cart</h1>
            {cart.length > 0
            ? cart.map(item => (
              <div className='cart-item' key={item.name}>
                <h3>{item.name}</h3>
                <p>
                  <button onClick={() => decrease(item.name)}>-</button>
                  {item.quantity}
                  <button onClick={() => increase(item.name)}>+</button>
                </p>
                <p>Subtotal: <span className="money">${(item.quantity * item.price).toFixed(2)}</span> </p>
              </div>
              ))
            : <p>Add an item to your cart</p>}
            <div className='total'>
                <h2>Total: <span className="money">${cart.reduce((acc, i) => acc + (i.quantity * i.price), 0).toFixed(2)}</span></h2>
                <Link to='/payment'><button className="btn">Proceed to checkout</button></Link>
            </div>
        </div>
    );
}