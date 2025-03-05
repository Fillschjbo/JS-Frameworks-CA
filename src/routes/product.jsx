import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { getSpecificProduct } from "../api/getSpecificProduct.jsx";


export function RenderProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getSpecificProduct(id);
                setProduct(data);
                console.log(product)
            } catch (error) {
                console.error("Error fetching product:", error);
            }

        };
        fetchProduct();
    }, [id]);


    return (
        <>
           
        </>
    );
}