import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://testing-mauve-five.vercel.app/api/current_user`
            );
            console.log(response);
            console.log("/|||||||||||||||||||///");
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
