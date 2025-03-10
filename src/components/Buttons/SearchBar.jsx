import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
    const { register, watch, setValue } = useForm({
        defaultValues: { query: "" }
    });

    const [suggestions, setSuggestions] = useState([]);
    const searchQuery = watch("query");
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchQuery) {
            setSuggestions([]);
            return;
        }

        const fetchSuggestions = async () => {
            try {
                const response = await fetch("https://v2.api.noroff.dev/online-shop/");
                const data = await response.json();

                const filtered = data.data.filter(item =>
                    item.title.toLowerCase().includes(searchQuery.toLowerCase())
                );

                setSuggestions(filtered);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 50);
        return () => clearTimeout(timeoutId);

    }, [searchQuery]);

    const handleItemClick = () => {
        setValue("query", "");
        setSuggestions([]);
    };

    return (
        <div className="relative w-64">
            <input
                {...register("query")}
                type="text"
                placeholder="Search..."
                className="border p-2 rounded w-full"
            />

            {suggestions.length > 0 && (
                <ul className="absolute bg-white border w-full mt-1 shadow-md max-h-60 overflow-y-auto">
                    {suggestions.map(item => (
                        <li key={item.id} className="p-2 hover:bg-gray-100 cursor-pointer">
                            <Link to={`/product/${item.id}`} onClick={(e) => {
                                e.preventDefault();
                                navigate(`/product/${item.id}`);
                                handleItemClick();
                            }}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
