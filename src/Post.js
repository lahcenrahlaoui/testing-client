import styled from "styled-components";

const Post = ({ post }) => {
    return (
        <Card>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            <div> {post.tags} </div>
        </Card>
    );
};

const Card = styled.div`
    background-color: #f77373;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    width: 300px;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Content = styled.div`
    font-size: 14px;
    color: #0a0707;
`;

export default Post;
