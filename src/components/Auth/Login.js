import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { postLogin } from "../../services/apiService";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async () => {
        // validate

        // submit api
        let data = await postLogin(email, password);
        console.log(">>check data: ", data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/");
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <div className="login-container">
            <div className="header">Don't have an account yet?</div>
            <div className="title">Typeform</div>
            <div className="welcome">Hello, who’s this?</div>
            <div className="content-form mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >
                        Login to Typeform
                    </button>
                </div>
                <div className="text-center">
                    <span
                        className="back"
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        {" "}
                        &#60;&#60;Go to homepage
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Login;
