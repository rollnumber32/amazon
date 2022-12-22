import "./Header.css";
import { AppBar, Toolbar } from "@mui/material";
import { Search, ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    let flag = user.length > 0;

    const signout = () => {
        dispatch({
            type: "SIGN_OUT_USER",
        });
    };

    return (
        <header>
            <AppBar style={{ background: "#131921" }}>
                <Toolbar>
                    <Link to="/">
                        <img className="logo" src="./amazon.png" alt="amazon" />
                    </Link>
                    <form className="search-bar ml-4">
                        <input className="search-input" type="text"></input>
                        <label className="search-btn">
                            <Search style={{ color: "black" }} />
                        </label>
                    </form>

                    {flag ? (
                        <>
                            <div className="ml-4">
                                <div className="small-text">
                                    Hello <span>{user[0].email}</span>
                                </div>
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={signout}
                                    className="large-text"
                                >
                                    Sign Out
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="small-text">Returns</div>
                                <div className="large-text">& Orders</div>
                            </div>
                            <div className="ml-4">
                                <div className="small-text">Your</div>
                                <div className="large-text">Prime</div>
                            </div>
                            <Link
                                to="/checkout"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                    display: "flex",
                                }}
                            >
                                <div className="ml-4">
                                    <ShoppingBasket />
                                </div>
                                <div className="basket-count">
                                    {basket.length}
                                </div>
                            </Link>
                        </>
                    ) : (
                        <div className="ml-4">
                            <div className="large-text">
                                <Link
                                    to="./login"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    {" "}
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;
