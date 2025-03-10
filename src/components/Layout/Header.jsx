import { Link } from "react-router-dom";
import { useCart } from "../../store.js";
import {SearchBar} from "../Buttons/SearchBar.jsx";
import logo from "../../assets/logo/Logo.svg";

export function Header() {
    const { cart } = useCart();
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="flex w-screen font-bold p-4 justify-between items-center bg-[#60492C] text-[#FFEDBD]">
            <Link to=""><img src={logo} alt="Logo" className={"h-28 w-28px hover:text-[#EA9A36]"} /></Link>
            <Link to="/contact" className={"hover:text-[#EA9A36]"}>Contact</Link>
            <SearchBar />
            <Link to="/cart" className={"hover:text-[#EA9A36]"}>
                Cart {itemCount > 0 ? `(${itemCount})` : ""}
            </Link>
        </header>
    );
}
