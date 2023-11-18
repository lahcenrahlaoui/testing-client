import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getPosts from "./actions/getPosts";

const PostForm = ({ user }) => {
    const [title, setTitle] = useState("");
    const [content, setCotent] = useState("");
    const [tags, setTags] = useState("");
    const dispatch = useDispatch();

    const onSubmitf = (e) => {
        e.preventDefault();
        const postData = async () => {
            const res = await axios.post("/api/createPost", {
                title,
                content,
                tags,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            });
            console.log(res);
            dispatch(getPosts());
        };
        postData();
    };

    return user === null ? (
        ""
    ) : !user ? (
        "you need to login "
    ) : (
        <form onSubmit={onSubmitf}>
            <label>title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>content</label>
            <input
                value={content}
                onChange={(e) => setCotent(e.target.value)}
            />

            <label>tags</label>
            <input value={tags} onChange={(e) => setTags(e.target.value)} />

            <button>submit</button>
        </form>
    );
};

export default PostForm;
