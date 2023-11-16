import { Suspense, lazy } from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import getUser from "./actions/getUser";
const Header = lazy(() => import("./Header"));

function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    const local = "http://localhost:5000";

    const server = process.env.NODE_ENV === "production" ? proxy : local;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    const user = useSelector((state) => state.user);

    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Header user={user} server={server} />
            </Suspense>
        </div>
    );
}

export default App;
