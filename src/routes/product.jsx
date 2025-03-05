import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpecificProduct } from "../api/getSpecificProduct.jsx";

export function RenderProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.url} alt=""/>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to="/">Back to Products</Link>
        </div>
    );
}
