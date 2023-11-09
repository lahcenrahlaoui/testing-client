import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

import { GoogleLoginButton } from "react-social-login-buttons";

function App() {
    const [state, setState] = useState({ user: Cookies.get("session") });
    const proxy = "https://testing-mauve-five.vercel.app";
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://testing-mauve-five.vercel.app/api/current_user`
            );
            console.log(response);
            console.log("/|||||||||||||||||||///");
            console.log(state);
        };
        fetchData();
    });

    const googleSuccess = (res) => {
        console.log(res);
    };
    const googleFailure = () => {
        console.log("fail");
    };

    return (
        <div className="App">
            <a href={`${proxy}/auth/google`}>login</a>

            <div>---------------</div>
            <GoogleLoginButton
                href={`${proxy}/auth/google`}
                onClick={() => console.log("Hello")}
            />
            <div>---------------</div>
            <a href={`${proxy}/api/logout`}>logout</a>
        </div>
    );
}

export default App;
