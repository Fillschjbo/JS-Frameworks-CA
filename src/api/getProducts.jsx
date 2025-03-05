import { API_BASE } from "../utility/constants.jsx";

export async function getProducts() {
    try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.error("Error in getProducts:", error);
        throw error;
    }
}