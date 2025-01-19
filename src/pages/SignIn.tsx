import './SignIn.css'
import {Link, useNavigate} from "react-router";

export const SignIn = () => {

    const navigate = useNavigate();

    return (
        <section className="login" id="login">
            <div id="boxlogin" className="login-column">
                <div id="section-left">
                    <img src="src/assets/icons/login-image.png" alt="login-image"/>
                    <h3 id="image-text">Green Shadow (pvt) Ltd.</h3>
                </div>
                <div id="section-right">
                    <h2 id="head-text">User Login</h2>
                    <form className="login-form">
                        <div className="mb-3">
                            <label htmlFor="login-email" className="form-label labels">User Name</label>
                            <input
                                type="email"
                                className="form-control"
                                id="login-email"
                                aria-describedby="userNameHelp"
                                placeholder="Enter Your User Name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="login-password" className="form-label labels">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="login-password"
                                placeholder="Enter Your Password"
                            />
                        </div>
                        <button
                            id="login-button"
                            className="btn btn-primary"
                            type="button"
                            onClick={() => navigate('/home')}
                        >
                            Sign In
                        </button>
                    </form>
                    <hr/>
                    <div id="signup-text">
                        Don't have an account?
                        <span id="sign-up-button">
                <Link to={'/signup'}>Sign Up here</Link>
            </span>
                    </div>
                </div>
            </div>
        </section>


    );
};