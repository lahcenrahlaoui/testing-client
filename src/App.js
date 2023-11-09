import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Cookies from "js-cookie";

 
function App() {
    const [state, setState] = useState({ user: Cookies.get("session") });
    const proxy = "https://server-2nfv.onrender.com/api/current_user";
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://server-2nfv.onrender.com/api/current_user`
            );
            console.log(response);
            console.log("/||||||||||\\\\\\\\\\\\\\\|||///");
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
            <a href={`${proxy}/api/logout`}>logout</a>
        </div>
    );
}

export default App;
