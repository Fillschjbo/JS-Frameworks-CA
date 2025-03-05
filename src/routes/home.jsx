import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts.jsx";

export function RenderHome() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <>
            <div>
                {products.length ? (
                    products.map((product) => (
                        <>
                            <h2 key={product.id}>{product.title}</h2>
                            <img src={product.image.url} alt=""/>
                        </>
                    ))
                ) : (
                    "loading..."
                )}
            </div>
        </>
    );
}