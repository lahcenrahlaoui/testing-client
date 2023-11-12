import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(
                // `https://testing-mauve-five.vercel.app/api/current_user`,
                `/api/current_user`,
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
