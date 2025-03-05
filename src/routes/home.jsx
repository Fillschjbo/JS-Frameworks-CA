import { useEffect, useState } from "react";
import { getProducts } from "../api/getProducts.jsx";
import {ProductCard} from "../components/Cards/ProductCard.jsx";
import {Link} from "react-router-dom";

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
                        <Link
                            to={"/product/" + product.id}
                            key={product.id}
                        >
                            <ProductCard
                                image={product.image.url}
                                title={product.title}
                                price={product.price}
                                discountedPrice={product.discountedPrice}
                                rating={product.rating}
                            />
                        </Link>
                    ))
                ) : (
                    "loading..."
                )}
            </div>
        </>
    );
}