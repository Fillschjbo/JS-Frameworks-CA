import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import {getSpecificProduct} from "../api/getSpecificProduct.jsx";
import {AddToCartBtn} from "../components/Buttons/AddToCart.jsx";

export function RenderProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(false);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getSpecificProduct(id);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {product ? (
                <div>
                    <img
                        src={product.image.url}
                        alt={product.image.alt}
                        className="h-64"
                    />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <AddToCartBtn
                    product={product}
                    />
                </div>
            ) : (
                <p>loading</p>
            )}
        </>
    )
}

