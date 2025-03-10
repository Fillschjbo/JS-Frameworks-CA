export function ProductCard({title, image, price, discountedPrice, rating}){
    return (
        <div className={"drop-shadow-md rounded-sm p-16px bg-gray-100 h-120 w-100 flex items-center justify-center flex-col"}>
            <img src={image} alt="no image available" className={"h-80 w-80 object-cover hover:h-90 hover:h-90"}/>
            <h2 className={"text-xl font-bold"}>{title}</h2>
            <div>
                {discountedPrice !== price ? (
                    <div className={"flex gap-8"}>
                        <p className={"line-through text-gray-500"}>{price}</p>
                        <p>{discountedPrice}</p>
                        <p className={"text-white bg-red-500 p-2 rounded-md font-bold absolute top-2 right-2"}>{Math.floor(100 - (discountedPrice / price * 100))}% off</p>
                    </div>
                ) : (
                    <p>{price}</p>
                )}
            </div>
            <p>Rating: {rating}/5</p>
        </div>
    )
}