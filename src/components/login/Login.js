import React from "react";
import "./Login.module.css";

const Login = function (props) {
    return (
        <React.Fragment>
            <form>
                <div class="forma-control">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        onChange={props.onNameChange}
                    />
                </div>
                <div class="forma-control">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={props.onChangePassword}
                    />
                </div>
            </form>
        </React.Fragment>
    );
};

export default Login;
