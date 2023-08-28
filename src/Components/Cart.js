import React from 'react'
// import Navigation from './Navigation'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { mycontext } from './Context'


const Cart = () => {

  
const {products,qty,setQty,cart}=useContext(mycontext)


  const increment=(()=>setQty(qty+1))
 const decrement=(()=> setQty(qty- 1 > 0?qty - 1:1))
  const totalPrice =cart[0].price * qty;

  return (
    <div>
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
                  <h1>{qty}</h1>
                 <button className='incrementbtn'  onClick={increment}>+</button> 
                 <button className='decrementbtn' onClick={decrement}>-</button>  
                  <p>Total Price: {totalPrice}</p>  
                </div>
              </Card.Body> 
             </div>
          </div>
        </Card> 
       </div>
    ))}
  </div>
  </div>
  )
}

export default Cart