import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function App() {
    const [cookie, setCookie] = useCookies(['session' ])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://testing-mauve-five.vercel.app/api/current_user`
            );
            console.log(cookie);
            console.log("/-------------------------///");
            console.log(response);
            console.log("/|||----------|||///");
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
