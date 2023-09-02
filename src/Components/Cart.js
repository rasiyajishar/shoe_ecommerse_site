import React from 'react';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { mycontext } from './Context';

const Cart = () => {
  const { products,setCart, cart,qty } = useContext(mycontext);

  const increment = (productId) => {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      // Assuming you have a price property in your product objects
      updatedCart[productIndex].totalPrice = updatedCart[productIndex].price * updatedCart[productIndex].quantity;

      // Update the cart in the context
      // Assuming you have a setCart function in your context
      setCart(updatedCart);
    }
  };

  const decrement = (productId) => {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1 && cart[productIndex].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity -= 1;
      // Assuming you have a price property in your product objects
      updatedCart[productIndex].totalPrice = updatedCart[productIndex].price * updatedCart[productIndex].quantity;

      // Update the cart in the context
      // Assuming you have a setCart function in your context
      setCart(updatedCart);
    }
  };

  return (
    <div>
      {cart.map((product) => (
        <div key={product.id} className='div-m-2'>
         <Card>
          <div className="d-flex">
            <div style={{ width: "60vh" }}>
              <Card.Img src={product.image} className="card-image1" alt={product.name} />
            </div>
            <div className="w-50 p-3" style={{ textAlign: "left" }}>
              <Card.Title>
                <h2>{product.name}</h2>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  <h4>{product.type}</h4>
                </Card.Text>
                
                <Card.Text>
               <h3>MRP: {product.price}</h3> 
                </Card.Text>
                <div>
                  <br />
                  <h1>Quantity:{product.quantity}</h1>
                 <button className='incrementbtn'  onClick={()=>increment(product.id)}>+</button> 
                 <button className='decrementbtn' onClick={()=>decrement(product.id)}>-</button>  
                  <p>Total Price:{product.totalPrice}</p>  
                  
                </div>
              </Card.Body> 
             </div>
          </div>
        </Card> 
       </div>
    ))}
  </div>

  );
};

export default Cart;
