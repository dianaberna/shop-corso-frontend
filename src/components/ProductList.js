import ProductListItem from './ProductListItem';
import "./ProductList.css";

const ProductList = ({products, addProductToCart}) => {
    
    return(
        <div className='productList'>
            {products.map(product => <ProductListItem key={product.id} product={product} addProductToCart={addProductToCart} />)}
        </div>
    )
}

export default ProductList;