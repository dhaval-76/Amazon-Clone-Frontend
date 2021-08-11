import React from "react";
import "../css/Product.css";
import StarRateRoundedIcon from "@material-ui/icons/StarRateRounded";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarRateRoundedIcon
                                key={i}
                                className="product_ratingStar"
                            />
                        ))}
                </div>
            </div>
            <img src={image} alt={title} />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    );
}

export default Product;
