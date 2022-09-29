import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const Shop = ({addProductToCart}) => {
    const [products, setProducts] = useState([]);

    // facoltativo - potevo usare data direttamente
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch(e => console.log(e));
    }, []);

    return (
        <>
            <ProductList products={products} addProductToCart={addProductToCart} />
        </>
    );
};

export default Shop;
