
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Contact from './Components/Contact';
import Men from './Components/Men';
import Women from './Components/Women';
import Ourstory from './Components/Ourstory'
import Login from './Components/Login';
import Cart from './Components/Cart';
import Collection from './Components/Collection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Components/Registration';

import { productdata } from './Components/productdata';
import { mycontext } from './Components/Context';
import Showproduct from './Components/Showproduct';
import { useState } from 'react';
import Admin_home from './Admin/Admin_home';
import {value} from "./Admin/Userdata";
import Lookbook from './Components/Lookbook';

function App() {
const [qty,setQty]=useState(1)
const [cart,setCart]=useState([]);

const[signup,setSignup]=useState([])
const[login,setLogin]=useState(false)
const[username,setUsername]=useState()
const[logout,setLogout]=useState()
const[searchquery,setSearchquery]=useState('')
const[searchresults,setSearchresults]=useState([])
const[products,setProducts]=useState(productdata)
// const[producctts,setProducctts]=useState([])
  return (

    <div className="App">



<mycontext.Provider
        value={{
          products,
          qty,
          setQty,
          cart,
          setCart,
          signup,
          setSignup,
          login,
          setLogin,
          username,
          setUsername,
          logout,
          setLogout,
          searchquery,
          setSearchquery,
          searchresults,
          setSearchresults,
          value,
          // producctts,
          // setProducctts,
          setProducts,
        }}
      >

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Men" element={<Men />} />
  <Route path="/Women" element={<Women />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Ourstory" element={<Ourstory />} />
  <Route path="/Contact" element={<Contact />} />
<Route path="/Cart" element={<Cart />} />
<Route path="/Collection" element={<Collection />} />
<Route path="/Registration" element={<Registration />} />
<Route path='/Lookbook' element={<Lookbook />} />
<Route path="/Showproduct/:id" element={<Showproduct />} />
<Route path='/Admin' element={<Admin_home />} />
<Route path='/Admin/Productupate' element={<Admin_home />} />
<Route path='/Admin/User' element={<Admin_home />} />
<Route path='/Admin/Addproduct' element={<Admin_home />} />
<Route path='Admin/Admin_men' element={<Admin_home />} />
<Route path='Admin/Admin_women' element={<Admin_home />} />
<Route path='/Admin/Editproduct' element={<Admin_home />} />
<Route path='/Editproduct/:id' element={<Admin_home />} />
</Routes>
</mycontext.Provider>
    </div>
    
  );
}

export default App;
