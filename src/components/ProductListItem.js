import { Link } from "react-router-dom";

const ProductListItem = ({ product, addProductToCart }) => {
    

    return (
        <div key={product.id} className="productListItem">
            <img src={product.image} alt={product.title} />
            <Link  to={{pathname: `/shop/${product.id}`}} >
                <span>{product.title}</span>
            </Link>
            <span>{product.price} €</span>
            <button onClick={() => addProductToCart(product)} id={product.id}>
                Add
            </button>
        </div>
    );
};

export default ProductListItem;
