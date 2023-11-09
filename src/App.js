import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `/api/current_user`
            );
            console.log(response);
            console.log("/||||||||||\\\\\\\\\\\\\\|||///");
        };
        fetchData();
    });

    return (
        <div className="App">
            <a href={`/auth/google`}>login</a>

            <div>---------------</div>
            <a href={`/api/logout`}>logout</a>
            {/* <a href={`${proxy}/auth/google`}>login</a>

            <div>---------------</div>
            <a href={`${proxy}/api/logout`}>logout</a> */}
        </div>
    );
}

export default App;
