import {useCart} from "../../store.js";
import { useForm } from "react-hook-form";

export function AddToCartBtn(product) {
    const {cart, addToCart} = useCart();
    console.log(cart)

    const { register, handleSubmit } = useForm({
        defaultValues: {
            quantity: 1,
        }
    });

    const onSubmit = (data) => {
        addToCart({ ...product, quantity: Number(data.quantity) })
    }

    return  (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="quantity" id="quantity"
                {...register("quantity")}
                >
                    {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="border px-4 py-2 rounded"
                >
                    Add To Cart
                </button>
            </form>
        </>
    )
}