import {useParams} from "react-router-dom";
import {useEffect, useState} from "react"
import {API_BASE} from "../utility/constants.jsx";

export function RenderProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(false);

    console.log(API_BASE + id)

    useEffect(() => {
        async function getProduct() {
            const res = await fetch(API_BASE + id);
            const data = await res.json();
            console.log(data);
            setProduct(data.data);
        }
        getProduct();
    }, []);

    return (
        <>
            <h1>Specific</h1>
            {product ? (
                <div>
                    <img
                        src={product.image.url}
                        alt={product.image.alt}
                        className="h-64"
                    />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
            ) : (
                <p>loading</p>
            )}
        </>
    )
}