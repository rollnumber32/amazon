import "./Home.css";
import Product from "./Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const p = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((product) => {
            const data = product.data();
            p.push(
                <Product
                    id={data.id}
                    title={data.title}
                    price={data.price}
                    rating={data.rating}
                    image={data.image}
                    alt={data.alt}
                    route={data.route}
                />
            );
        });

        return p;
    };

    useEffect(() => {
        fetchData().then((data) => setProducts(data));
    }, []);

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
                    {products[0]}
                    {products[1]}
                </div>
                <div className="product-row">
                    {products[2]}
                    {products[3]}
                    {products[4]}
                </div>
            </div>
        </div>
    );
}

export default Home;
