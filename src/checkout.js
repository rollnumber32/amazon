import "./checkout.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { StarRate } from "@mui/icons-material";

function CartProduct(props) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        const newBasket = [];
        basket.forEach((product) => {
            if (product.id !== props.id) {
                newBasket.push(product);
            }
        });
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: newBasket,
        });
        console.log(newBasket);
    };

    //STARS
    const stars = [];
    for (let i = 0; i < parseInt(props.rating); i++) {
        stars.push(<StarRate style={{ color: "#fbd432" }} />);
    }
    //STARS

    return (
        <div className="cart-product">
            <img
                className="cart-product__image"
                src={props.image}
                alt={props.alt}
            />
            <div>
                <div style={{ fontWeight: "700" }}>{props.title}</div>
                <div>
                    ₹<span style={{ fontWeight: "700" }}>{props.price}</span>
                </div>
                <div>{stars}</div>
                <button className="product__btn" onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    );
}

function Checkout() {
    const [{ basket, user }] = useStateValue();
    const navigate = useNavigate();
    const cartProducts = [];

    useEffect(() => {
        if (!user.length > 0) {
            navigate("/login");
        }
    });

    basket.forEach((product) => {
        cartProducts.push(
            <CartProduct
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                alt={product.alt}
                route={product.route}
            />
        );
    });

    return (
        <div className="checkout">
            <div style={{ fontWeight: "700", fontSize: "medium" }}>
                Hello, {user[0].email}
            </div>
            <div style={{ fontWeight: "700", fontSize: "larger" }}>
                Your Shopping Basket
            </div>
            <div className="checkout-bar"></div>
            <div className="product-list">{cartProducts}</div>
        </div>
    );
}

export default Checkout;
