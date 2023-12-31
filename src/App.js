import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Routes, Route, Link } from "react-router-dom";

import getUser from "./actions/getUser";
import Cookies from "js-cookie";

import Header from "./Header";
import PostForm from "./PostForm";
import PostList from "./PostList";

function App() {
    const proxy = "https://testing-mauve-five.vercel.app";
    const local = "http://localhost:5000";

    const server = process.env.NODE_ENV === "production" ? proxy : local;

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        console.log("*************************");
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="App">
            <Header user={user} server={server} />

            <Routes>
                {/* <Route path="/" exact element={<Post />} /> */}

                <Route
                    path="/create"
                    exact
                    element={
                        <div
                            style={{
                                margin: "30px",
                            }}
                        >
                            <PostList user={user} />
                            <PostForm />
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
