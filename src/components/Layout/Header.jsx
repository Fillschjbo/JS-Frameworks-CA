import { Link } from "react-router-dom";
import { useCart } from "../../store.js";
import {SearchBar} from "../Buttons/SearchBar.jsx";

export function Header() {
    const { cart } = useCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="flex gap-10 font-bold items-center">
            <Link to="">Home</Link>
            <Link to="/contact">Contact</Link>
            <SearchBar />
            <Link to="/cart">
                Cart {itemCount > 0 ? `(${itemCount})` : ""}
            </Link>
        </header>
    );
}
