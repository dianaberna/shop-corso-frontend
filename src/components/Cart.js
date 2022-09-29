import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0);

    const getTotal = () => {
        console.log(cart);
        let sum = 0;
        cart.forEach((element) => {
            sum = sum + element.price * element.quantity;
        });
        setTotal(sum.toFixed(2));
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    };

    const updateQuantity = (id, operation) => {
        let alreadyInCartPosition = cart.findIndex((el) => el.id === id);

        operation === "+"
            ? cart[alreadyInCartPosition].quantity++
            : cart[alreadyInCartPosition].quantity--;

        // se la quantità è zero eliminare l'elemento dall'array
        if (cart[alreadyInCartPosition].quantity === 0) {
            cart.splice(alreadyInCartPosition, 1);
        }

        setCart([...cart]);
    };

    const removeItemFromCart = (id) => {
        let alreadyInCartPosition = cart.findIndex((el) => el.id === id);
        cart.splice(alreadyInCartPosition, 1);
        setCart([...cart]);
    };

    useEffect(() => {
        getTotal();
    }, [cart]);

    return (
        <div className="cart">
            <h2>
                Cart [
                {cart.reduce(
                    (partialSum, cartProduct) =>
                        partialSum + cartProduct.quantity,
                    0
                )}
                ]
            </h2>
            <ul>
                <li>
                    <span>Name</span>
                    <span>Price</span>
                    <span>Quantity</span>
                </li>
                {cart.map((e, index) => (
                    <CartItem
                        key={index}
                        item={e}
                        updateQuantity={updateQuantity}
                        removeItemFromCart={removeItemFromCart}
                    />
                ))}
            </ul>
            <div className="total">
                <strong>Total: {total} €</strong>
            </div>
            <div className="clear">
                <button onClick={clearCart}>Empty the cart</button>
            </div>
        </div>
    );
};

export default Cart;
