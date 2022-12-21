import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div style={{ position: "absolute" }}>
                <img
                    className="landing-img"
                    src="./landing.jpg"
                    alt="physicswallah"
                ></img>
                <div className="landing-img-overlay"></div>
            </div>
            <div className="home-body">
                <div className="product-row">
                    <Product
                        title="MacBook Air"
                        src="./p1.jpg"
                        alt="macbookair"
                        route="./ma"
                    />
                    <Product
                        title="Logitech Mechanical Keyboard"
                        src="./p2.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
