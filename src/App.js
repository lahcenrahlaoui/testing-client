import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
    // const local = "http://locahsot:5000";
    const proxy = "https://testing-mauve-five.vercel.app";
    useEffect(() => {
        const fetchData = async () => {
            // const ares = await axios.get("/api/current_user");
            const response = await fetch("/api/current_user");
            console.log(response);
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
