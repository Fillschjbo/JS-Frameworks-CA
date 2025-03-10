import { useCart } from "../store.js";
import { Link } from "react-router-dom";

export function RenderCheckoutSuccess() {
    const { cart, clearCart } = useCart();

    const handleReturnHome = () => {
        clearCart();
    };

    const getEffectivePrice = (product) =>
        product.discountedPrice && product.discountedPrice < product.price
            ? product.discountedPrice
            : product.price;

    const totalPrice = cart.reduce(
        (total, item) => total + getEffectivePrice(item.product) * item.quantity,
        0
    ).toFixed(2);

    return (
        <div className="max-w-lg mx-auto p-6 border rounded shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h2>
            <p>Your order has been successfully placed.</p>

            <h3 className="text-xl font-semibold mt-4">Receipt</h3>
            <ul className="text-left border-t mt-2 pt-2 space-y-2">
                {cart.map((item) => (
                    <li key={item.product.id} className="flex justify-between">
                        <span>{item.product.title} (x{item.quantity})</span>
                        <span>${(getEffectivePrice(item.product) * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>

            <p className="text-lg font-bold mt-4">Total: ${totalPrice}</p>

            <Link
                to="/"
                onClick={handleReturnHome}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-6"
            >
                Return to Home
            </Link>
        </div>
    );
}
