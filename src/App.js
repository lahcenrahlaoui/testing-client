import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch("https://testing-mauve-five.vercel.app/api/current_user ", {
    //             method: "GET",
    //             mode: "cors",
    //             cache: "no-cache",
    //             credentials: "same-origin",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });

    //         console.log(response);
    //         console.log("/*******************//");
    //         console.log("/*******************//");
    //         console.log(await response.json());
    //         console.log("/*******************//");
    //     };
    //     fetchData();
    // });

    const proxy = "https://testing-mauve-five.vercel.app";
    const host = "https://localhost:5000";

    const [user, setUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`https://testing-mauve-five.vercel.app/api/current_user`, {
                withCredentials: true,
            });

            setUser(response.data);
        };
        fetchUser();
    }, []);

    return (
        <div className="App">
            {user ? (
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
