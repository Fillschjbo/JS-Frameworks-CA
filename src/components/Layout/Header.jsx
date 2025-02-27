import {Link} from "react-router-dom";
import {RenderHome} from "../../routes/index.jsx";

export function Header(){
    return (
        <>
            <header>
                <h2>header goes here</h2>
                <Link to={""}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/cart"}>Cart</Link>
                <Link to={"/checkoutSuccess"}>Checkout</Link>
                <Link to={"/contact"}>contact</Link>
            </header>
        </>
    )
}