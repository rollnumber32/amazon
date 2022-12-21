import "./Product.css";
import { StarRate } from "@material-ui/icons";

function Product(props) {
    const stars = [];
    for (let i = 0; i < parseInt(props.stars); i++) {
        stars.push(<StarRate style={{ color: "#fbd432" }} />);
    }
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
                <img className="product__img" src={props.src} alt={props.alt} />
                <button className="product__btn">Add to Basket</button>
            </div>
        </div>
    );
}

export default Product;
