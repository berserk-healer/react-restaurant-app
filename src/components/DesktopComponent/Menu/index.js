import './index.scss'

const Menu = ({productItems, handleAddProduct}) => {
    

    return (
        <section className='wrapper'>
        <h3 className="sub-heading"> our menu </h3>
        <h1 className="heading"> today's speciality </h1>

        <div className="box-container">

            {productItems.map( (product) => {
                return (
                <div className="box" key={product.id}>
                <div className="image">
                    <img src={require(`../../../assets/img/${product.imageURL}`)} alt={product.name} />
                </div>
                <div className="content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className="btn" onClick={() => handleAddProduct(product)}>add to cart</button>
                    <span className="price">${product.price}</span>
                </div>
            </div>)
            })}
        </div>
    </section>
    )
}


export default Menu