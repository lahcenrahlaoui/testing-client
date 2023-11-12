import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    const local = "https://localhost:5000";

    const server = process.env.NODE_ENV === "production" ? proxy : local;

    console.log(process.env.NODE_ENV);
    const [user, setUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            let response;
            if (process.env.NODE_ENV === "development") {
                response = await axios.get(`/api/current_user`, {
                    withCredentials: true,
                });
            } else {
                response = await axios.get(
                    `https://testing-mauve-five.vercel.app/api/current_user`,
                    {
                        withCredentials: true,
                    }
                );
            }

            setUser(response.data);
        };

        fetchUser();
    }, []);

    return (
        <div className="App">
            <Header user={user} server={server} />
        </div>
    );
}

export default App;
