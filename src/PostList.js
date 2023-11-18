import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import getPosts from "./actions/getPosts";

const PostList = ({ user }) => {
    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    let renderPosts;

    if (typeof posts !== "string") {
        renderPosts = posts.map((post) => {
            return <Post key={post._id} post={post} />;
        });
    }

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {renderPosts}
        </div>
    );
};

export default PostList;
