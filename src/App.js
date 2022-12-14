import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./checkout";

function App() {
    return (
        <div className="app">
            <div style={{ marginTop: "64px" }}></div>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    ></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    ></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
