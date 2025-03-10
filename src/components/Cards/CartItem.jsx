export function CartItem({ item, updateQuantity, getEffectivePrice }) {
    const effectivePrice = getEffectivePrice(item.product);

    const handleQuantityChange = (e) => {
        const inputValue = e.target.value;
        const newQuantity = Math.floor(Number(inputValue));
        if (Number.isNaN(newQuantity) || newQuantity < 0) return;
        updateQuantity(item.product.id, newQuantity);
    };

    const handleKeyDown = (e) => {
        if (e.key === "." || e.key === ",") {
            e.preventDefault();
        }
    };

    return (
        <li className="flex items-center space-x-4 border p-4 rounded">
            {item.product.image && (
                <img
                    src={item.product.image.url}
                    alt={item.product.image.alt || item.product.title}
                    className="w-16 h-16 object-cover rounded"
                />
            )}
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.product.title}</h2>
                <p>
                    Price: $
                    {effectivePrice.toFixed(2)}
                    {item.product.discountedPrice &&
                        item.product.discountedPrice < item.product.price && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                ${item.product.price.toFixed(2)}
                            </span>
                        )}
                </p>
                <div className="flex items-center space-x-2">
                    <label htmlFor={`quantity-${item.product.id}`} className="sr-only">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id={`quantity-${item.product.id}`}
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        onKeyDown={handleKeyDown}
                        className="border p-1 rounded w-16"
                        step="1"
                        min="0"
                        pattern="[0-9]*"
                    />
                </div>
                <p>Total: ${(effectivePrice * item.quantity).toFixed(2)}</p>
            </div>
        </li>
    );
}