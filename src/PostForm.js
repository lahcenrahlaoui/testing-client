import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "./actions/getPosts";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setCotent] = useState("");
    const [tags, setTags] = useState("");
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(
            addPosts({
                title,
                content,
                tags,
            })
        );
    };

    return user === null ? (
        ""
    ) : !user ? (
        "you need to login "
    ) : (
        <form onSubmit={onSubmit}>
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
