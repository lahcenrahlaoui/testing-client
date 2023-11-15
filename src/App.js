import { useEffect } from "react";

import Header from "./Header";

import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/getUser";

function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    const local = "http://localhost:5000";

    const server = process.env.NODE_ENV === "production" ? proxy : local;

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="App">
            <Header user={user} server={server} />
        </div>
    );
}

export default App;
