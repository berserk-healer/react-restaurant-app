import './App.scss';
import React, { useEffect, useState } from 'react'
import products from './components/data/products';
import { HashRouter } from 'react-router-dom'
import Navbar from './components/DesktopComponent/Navbar'
import Layout from './components/DesktopComponent/Layout';

const App = () => {

  const productItems = products
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  console.log(cartItems)
  
  useEffect(() => {
    total()
  }, [cartItems])
  const total = () => {
    let totalValue = 0
    for (let i = 0; i < cartItems.length; i++) {
      totalValue += cartItems[i].price * cartItems[i].quantity
    }
    setTotalPrice(totalValue)
  }

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)

    if(ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity + 1} : item))
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if ( ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item))
    }
  }


  return (
    <div>
        <HashRouter>
          <Navbar cartItems={cartItems} />
          <Layout 
          productItems={productItems} 
          cartItems={cartItems} 
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          totalPrice={totalPrice} />
        </HashRouter>
    </div>
  );
}

export default App;
