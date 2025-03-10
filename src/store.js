import { create } from "zustand";

export const useCart = create((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            console.log("Adding to cart:", product);
            const existingProductIndex = state.cart.findIndex(
                (item) => item.product.id === product.product.id
            );
            if (existingProductIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity =
                    (updatedCart[existingProductIndex].quantity || 0) + product.quantity;
                console.log("Updated cart (existing):", updatedCart);
                return { cart: updatedCart };
            }
            const newItem = { ...product, quantity: product.quantity };
            console.log("New item added:", newItem);
            return { cart: [...state.cart, newItem] };
        }),
    updateQuantity: (productId, newQuantity) =>
        set((state) => {
            if (newQuantity === 0) {
                const updatedCart = state.cart.filter(
                    (item) => item.product.id !== productId
                );
                console.log("Item removed, new cart:", updatedCart);
                return { cart: updatedCart };
            }
            const updatedCart = state.cart.map((item) =>
                item.product.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            );
            console.log("Updated cart with new quantity:", updatedCart);
            return { cart: updatedCart };
        }),
}));