import './index.scss' 
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Menu from '../Menu'
import Cart from '../Cart'
import Order from '../Order'
import HandleOrderForm from '../HandleOrderForm'


const Layout = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, totalPrice}) => {

    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home />} />

                <Route path='menu' exact element={<Menu productItems={productItems} handleAddProduct={handleAddProduct} />} />
                
                <Route path='about' exact element={<About />} />

                <Route path='cart' exact element={<Cart 
                cartItems={cartItems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct} 
                totalPrice={totalPrice} />} />
                <Route path='order' element={<Order />} />
                <Route path='order-success' element={<HandleOrderForm />} />
            </Routes>
        </>
    )
}
export default Layout