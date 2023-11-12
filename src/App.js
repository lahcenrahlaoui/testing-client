import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    const host = "https://localhost:5000";

    const [user, setUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                `https://testing-mauve-five.vercel.app/api/current_user`,
                {
                    withCredentials: true,
                }
            );

            setUser(response.data);
            console.log(response.data);
        };
        fetchUser();
    }, []);

    return (
        <div className="App">
            <Header />
            {!user ? (
                <a
                    href={`https://testing-mauve-five.vercel.app/auth/google`}
                    className="waves-effect waves-light btn"
                >
                    login
                </a>
            ) : (
                <a
                    href={`https://testing-mauve-five.vercel.app/api/logout`}
                    className="waves-effect waves-light btn"
                >
                    logout
                </a>
            )}
        </div>
    );
}

export default App;
