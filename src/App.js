import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <div className="app">
            <Header />
            <div style={{ marginTop: "64px" }}></div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
