import React from 'react'
import Navigation from './Navigation'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { mycontext } from './Context'
import { Card } from 'react-bootstrap'

const Showproduct = () => {

<Navigation /> 
  
  
    const {id}=useParams()
    // console.log(id);
    const product_id=id
    const {products,qty,setQty,cart,login,setCart}=useContext(mycontext)
      const nav1 = useNavigate();
      // const tocart=()=>{
      //   nav1('/Cart')


   const clickProduct = products.filter(
     (product) => product.id === product_id
    );
  
// const passid =(e)=>{
//     const id=e.target.id
    
//     const filterdata=products.filter((product)=>product.id==id)

    
 

    // setCart([...cart,...filterdata])

    // console.log(id);

    // nav1('/Cart')
    
// }

const passid = (e) => {
  const id = e.target.id;
  const filterdata = products.filter((product) => product.id === id);

  if (login === true) {
    if (cart.some(item => item.id === filterdata[0].id)) {
      alert('Product is already added');
    } else {
      setCart([...cart, filterdata[0]]);
      setQty(qty + 1);
      alert('Successfully Added to cart');
      nav1('/Cart')
    }
  } else {
    alert("Please log in");
   
  }
};



  return (

<div className='show_product'>

    <div className="card-container">
    {clickProduct.map((product) => (
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
                  <p>{product.desc}</p>
                </Card.Text>
                <Card.Text>
                  <h3>MRP: {product.price}</h3>
                </Card.Text>
                <div>
                  <br />
                 <button id={product.id} onClick={passid}>Add to Cart</button>
                  {/* <button onClick={tocart}>View Cart</button> */}
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

export default Showproduct