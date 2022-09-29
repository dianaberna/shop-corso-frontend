import { useEffect, useState } from "react";
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
        if(cart[alreadyInCartPosition].quantity === 0) {
            cart.splice(alreadyInCartPosition, 1);
        }

        setCart([...cart]);
    };

    const removeItemFromCart = (id) => {
        let alreadyInCartPosition = cart.findIndex((el) => el.id === id);
        cart.splice(alreadyInCartPosition, 1);
        setCart([...cart]);
    }

    useEffect(() => {
        getTotal();
    }, [cart]);

    return (
        <>
            <h2>
                Carrello (
                {cart.reduce(
                    (partialSum, cartProduct) =>
                        partialSum + cartProduct.quantity,
                    0
                )}
                )
            </h2>
            <ul>
                <li>
                    <span>Titolo</span>
                    <span>Prezzo</span>
                    <span>Quantità</span>
                </li>
                {cart.map((e, index) => (
                    <li key={index}>
                        <span>{e.title}</span>
                        <span>{e.price}</span>
                        <div className="quantity">
                            {
                                <button
                                    onClick={() => updateQuantity(e.id, "-")}
                                >
                                    -
                                </button>
                            }
                            <span>{e.quantity}</span>
                            <button onClick={() => updateQuantity(e.id, "+")}>
                                +
                            </button>
                            
                        </div>
                        <span>{<button className="delete" onClick={() => removeItemFromCart(e.id)}>Rimuovi</button>}</span>
                    </li>
                ))}
            </ul>
            <div className="total">
                <strong>Totale: {total} €</strong>
            </div>
            <div className="clear">
                <button onClick={clearCart}>Svuota carrello</button>
            </div>
        </>
    );
};

export default Cart;
