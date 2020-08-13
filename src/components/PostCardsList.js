import React from "react";
import { Col } from "react-bootstrap";
import PostCard from "./PostCard";

function PostCardsList(props) {

    if (props.isLoading) {
        return <h2 className="App">Loading ...</h2>
    }
    const elmPost = props.posts.map(
        post => {
            return (
                <Col md={4} key={post.id}>
                    <PostCard post={post} />
                </Col>
            ) 
        }
    )
    return (
        <>
            {elmPost}
        </>
    )
}

export default PostCardsList
