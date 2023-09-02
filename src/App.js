
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
import Reset from './Components/Reset';
import { products } from './Components/productdata';
import { mycontext } from './Components/Context';
import Showproduct from './Components/Showproduct';
import { useState } from 'react';
import Admin_home from './Admin/Admin_home';

function App() {
const [qty,setQty]=useState(1)
const [cart,setCart]=useState([]);

const[signup,setSignup]=useState([])
const[login,setLogin]=useState(false)
const[username,setUsername]=useState()
const[logout,setLogout]=useState()
const[searchquery,setSearchquery]=useState('')
const[searchresults,setSearchresults]=useState([])
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
          setSearchresults
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
<Route path="/Reset" element={<Reset />} />
<Route path="/Showproduct/:id" element={<Showproduct />} />
<Route path='/Admin_home' element={<Admin_home />} />
</Routes>
</mycontext.Provider>
    </div>
    
  );
}

export default App;
