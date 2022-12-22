import "./Login.css";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from "./StateProvider";

function Login() {
    const [{ user }, dispatch] = useStateValue();
    var email, password;

    if (user.length > 0) {
        console.log("Successful Login!");
    }

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                dispatch({
                    type: "SIGN_IN_USER",
                    item: userCredentials.user,
                });
            })
            .catch((errors) => {
                console.log(errors);
            });
    };

    return (
        <div className="login">
            <div className="login__section">
                <div>
                    <img
                        className="logo"
                        src="../amazon_black.png"
                        alt="amazon"
                    />
                </div>
                <form className="login__section__main">
                    <label style={{ fontSize: "32px", fontWeight: "500" }}>
                        Sign-in
                    </label>
                    <div>
                        <label className="login__section__main__input-label">
                            E-mail
                        </label>
                        <input
                            className="login__section__main__input"
                            type="email"
                            onChange={(e) => {
                                email = e.target.value;
                            }}
                        />
                    </div>
                    <div>
                        <label className="login__section__main__input-label">
                            Password
                        </label>
                        <input
                            className="login__section__main__input"
                            type="password"
                            onChange={(e) => {
                                password = e.target.value;
                            }}
                        />
                    </div>
                    <label className="login__section__submit" onClick={login}>
                        Sign In
                    </label>
                </form>
                <br />
                <p>
                    By siging-in you agree to the amazon's Condition's of Use
                    and Sale. Please see <br /> our Privacy Notice,out Cookies
                    Notice and our Interest-Based Ads Notice
                </p>
            </div>
        </div>
    );
}

export default Login;
