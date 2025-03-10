import {Link} from "react-router-dom";

export function Footer(){
    return (
        <>
            <footer className={"flex w-screen font-bold p-4 justify-between items-center bg-[#60492C] text-[#FFEDBD]"}>
                <Link to="/contact" className={"hover:text-[#EA9A36]"}>Contact</Link>
                <p>Copyright &copy; 2025 Fillip</p>
            </footer>
        </>
    )
}