import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

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

    return (
        <div className="App">
            <a href={`${proxy}/auth/google`}>login</a>
            <div>---------------</div>
            <a href={`${proxy}/api/logout`}>logout</a>
        </div>
    );
}

export default App;
