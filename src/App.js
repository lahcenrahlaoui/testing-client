import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://testing-mauve-five.vercel.app/api/current_user ", {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(response);
            console.log("/*******************//");
            console.log(await response.json());
            console.log("/*******************//");
        };
        fetchData();
    });

    return (
        <div className="App">
            <a href={`https://testing-mauve-five.vercel.app/auth/google`}>
                login
            </a>

            <div>--------- ------</div>
            <a href={`https://testing-mauve-five.vercel.app/api/logout`}>
                logout
            </a>
            {/* <a href={`${proxy}/auth/google`}>login</a>

            <div>---------------</div>
            <a href={`${proxy}/api/logout`}>logout</a> */}
        </div>
    );
}

export default App;
