import { useCart } from "../store.js";
import {CartItem} from "../components/Cards/CartItem.jsx";

export function RenderCart() {
    const { cart, updateQuantity } = useCart();

    const getEffectivePrice = (product) => {
        return product.discountedPrice && product.discountedPrice < product.price
            ? product.discountedPrice
            : product.price;
    };

    return (
        <>
            <h1>Cart Page</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cart.map((item) => (
                        <CartItem
                            key={item.product.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            getEffectivePrice={getEffectivePrice}
                        />
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="mt-4">
                    <p className="text-xl font-bold">
                        Cart Total: $
                        {cart
                            .reduce(
                                (total, item) =>
                                    total + getEffectivePrice(item.product) * item.quantity,
                                0
                            )
                            .toFixed(2)}
                    </p>
                </div>
            )}
        </>
    );
}