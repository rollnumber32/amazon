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
                        price="92900.00"
                        stars="5"
                        src="./p1.jpg"
                        alt="macbookair"
                        route="./ma"
                    />
                    <Product
                        title="Logitech Mechanical Keyboard"
                        price="5999.00"
                        stars="5"
                        src="./p2.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                </div>
                <div className="product-row">
                    <Product
                        title="Rubber Plant for Decoration"
                        price="739.00"
                        stars="3"
                        src="./p3.jpg"
                        alt="macbookair"
                        route="./ma"
                    />
                    <Product
                        title="Shure MV7 USB Mic"
                        price="25600.00"
                        stars="4"
                        src="./p4.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                    <Product
                        title="ARCTIC COSMOS Acoustic Drum Kit"
                        price="20890.00"
                        stars="4"
                        src="./p5.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
