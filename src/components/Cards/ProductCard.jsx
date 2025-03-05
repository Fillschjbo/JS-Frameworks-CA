export function ProductCard({title, image, price, discountedPrice, rating}){
    return (
        <div>
            <img src={image} alt="no image available"/>
            <h2>{title}</h2>
            <div>
                {discountedPrice !== price ? (
                    <>
                        <p className={"line-through"}>{price}</p>
                        <p>{discountedPrice}</p>
                    </>
                ) : (
                    <p>{price}</p>
                )}
            </div>
            <p>{rating}</p>
        </div>
    )
}