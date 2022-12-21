import "./Product.css";

function Product(props) {
    return (
        <div className="product">
            <div>{props.title}</div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "middle",
                }}
            >
                <img className="product__img" src={props.src} alt={props.alt} />
                <a href={props.route}>Add to Basket</a>
            </div>
        </div>
    );
}

export default Product;
