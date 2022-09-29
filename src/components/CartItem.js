const CartItem = ({ item, updateQuantity, removeItemFromCart }) => {
    return (
        <li>
            <span>{item.title}</span>
            <span>{item.price} €</span>
            <div className="quantity">
                {
                    <button onClick={() => updateQuantity(item.id, "-")}>
                        -
                    </button>
                }
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, "+")}>+</button>
            </div>
            <span>
                {
                    <button
                        className="delete"
                        onClick={() => removeItemFromCart(item.id)}
                    >
                        Remove
                    </button>
                }
            </span>
        </li>
    );
};

export default CartItem;
