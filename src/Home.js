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
                        id="1"
                        title="MacBook Air"
                        price="92900.00"
                        rating="5"
                        image="./p1.jpg"
                        alt="macbookair"
                        route="./ma"
                    />
                    <Product
                        id="2"
                        title="Logitech Mechanical Keyboard"
                        price="5999.00"
                        rating="5"
                        image="./p2.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                </div>
                <div className="product-row">
                    <Product
                        id="3"
                        title="Rubber Plant for Decoration"
                        price="739.00"
                        rating="3"
                        image="./p3.jpg"
                        alt="macbookair"
                        route="./ma"
                    />
                    <Product
                        id="4"
                        title="Shure MV7 USB Mic"
                        price="25600.00"
                        rating="4"
                        image="./p4.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                    <Product
                        id="5"
                        title="ARCTIC COSMOS Acoustic Drum Kit"
                        price="20890.00"
                        rating="4"
                        image="./p5.jpg"
                        alt="logitechmechanicalkeyboard"
                        route="./lma"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
