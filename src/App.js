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
                `https://localhost:5000/api/current_user`,
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
            <Header user={user} />
        </div>
    );
}

export default App;
