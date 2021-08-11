import React from "react";
import "../css/Checkout.css";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { nanoid } from "nanoid";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
                    alt="checkout_ad"
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your shopping Cart</h2>
                </div>

                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        key={nanoid()}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
