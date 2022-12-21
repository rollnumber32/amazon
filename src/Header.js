import "./Header.css";
import { AppBar, Toolbar } from "@material-ui/core";
import { Search, ShoppingBasket } from "@material-ui/icons";

function Header() {
    return (
        <header>
            <AppBar style={{ background: "#131921" }}>
                <Toolbar>
                    <img className="logo" src="./amazon.png" alt="amazon" />
                    <form className="search-bar ml-4">
                        <input className="search-input" type="text"></input>
                        <label className="search-btn">
                            <Search style={{ color: "black" }} />
                        </label>
                    </form>
                    <div className="ml-4">
                        <div className="small-text">
                            Hello <span>lakshaymittal@gmail.com</span>
                        </div>
                        <div className="large-text">Sign Out</div>
                    </div>
                    <div className="ml-4">
                        <div className="small-text">Returns</div>
                        <div className="large-text">& Orders</div>
                    </div>
                    <div className="ml-4">
                        <div className="small-text">Your</div>
                        <div className="large-text">Prime</div>
                    </div>
                    <div className="ml-4">
                        <ShoppingBasket />
                    </div>
                    <div className="basket-count">0</div>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;
