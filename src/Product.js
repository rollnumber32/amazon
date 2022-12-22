import "./Product.css";
import { StarRate } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Product(props) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        });
    };

    //STARS
    const stars = [];
    for (let i = 0; i < parseInt(props.rating); i++) {
        stars.push(<StarRate style={{ color: "#fbd432" }} />);
    }
    //STARS

    return (
        <div className="product">
            <div className="product__title">{props.title}</div>
            <div>
                ₹<span className="product__price">{props.price}</span>
            </div>
            <div>{stars}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "32px",
                }}
            >
                <img
                    className="product__img"
                    src={props.image}
                    alt={props.alt}
                />
                <button className="product__btn" onClick={addToBasket}>
                    Add to Basket
                </button>
            </div>
        </div>
    );
}

export default Product;
