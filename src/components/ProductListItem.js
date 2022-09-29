const ProductListItem = ({product, addProductToCart}) => {
    return(
        <div key={product.id} className='productListItem'>
            <img src={product.image} alt={product.title}  />
            <span>{product.title}</span>  
            <span>{product.price} €</span>
            <button onClick={() => addProductToCart(product)} id={product.id}>
                Aggiungi
            </button>
        </div>
    )
}

export default ProductListItem;
