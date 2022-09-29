import './index.scss'

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, totalPrice}) => {

    
    return (
        <section className='wrapper'>
        <div className='cart-container'>
            <h1 className='heading'>Cart</h1>

            {cartItems.length === 0 && 
            <div className='item-empty'> No items added to the cart</div>}
            <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="list">
                            <img 
                            src={require(`../../../assets/img/${item.imageURL}`)} 
                            alt={item.name} />
                            <h3 className='name'>{item.name}</h3>
                            <div className='function'>
                                <button className='add' onClick={() => handleAddProduct(item)}>+</button>
                                <button className='remove' onClick={() => handleRemoveProduct(item)}>-</button>
                            </div>   
                            <div className='price'>
                                Quality: {item.quantity} * {item.price}$
                            </div>
                        </div>                        
                    ))}
                    
                    <div className='total-price'>
                         Total Price: ${totalPrice}
                    </div>
            </div>
            {cartItems.length !== 0 && <div className='order-button'><a href='#/order' className='btn'>Order now</a></div>}
        </div>
        </section>
    )
}
    


export default Cart