import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Shop from "./Shop";
import Cart from "./components/Cart";
import { getCookie, setCookie } from './hooks/cookie';
import "./App.css"

export default function App() {

    const [cart, setCart] = useState(getCookie('cart') ? JSON.parse(getCookie('cart')) : [])

    const addProductToCart = (product) => {
      let alreadyInCartPosition = cart.findIndex(el => el.id === product.id);

      if(alreadyInCartPosition === -1) {
        setCart([...cart, {...product, quantity: 1}])
      }else{
        cart[alreadyInCartPosition].quantity ++
        setCart([...cart])
      }
    }

    useEffect(() => {
        setCookie('cart', JSON.stringify(cart))
    }, [cart])

  return (
    <BrowserRouter>
      <div>
        <nav>
            <h1><Link to="/">Shop</Link></h1>
            <div className="cart"><Link to="/cart">Carrello ({cart.reduce((partialSum, cartProduct) => partialSum + cartProduct.quantity, 0)})</Link></div>
        </nav>

        <Routes>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path="/" element={<Shop addProductToCart={addProductToCart} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

