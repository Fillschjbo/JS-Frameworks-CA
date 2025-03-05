import { API_BASE } from "../utility/constants.jsx";

export async function getSpecificProduct(id) {
    try {
        const url = (API_BASE + id);
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error("Error in getSpecificProduct:", error);
        throw error;
    }
}