import React from 'react';
import { Card } from "react-bootstrap";

function PostCard(props) {
	return (
		<Card className="mb-4">
			<Card.Header as="h5">{props.post.id}</Card.Header>
			<Card.Body>
				<Card.Title>{props.post.title}</Card.Title>
				<Card.Text style={{textAlign:"justify", textJustify:"innter-word"}}>{props.post.body}</Card.Text>
			</Card.Body>
		</Card>
	)
};

export default PostCard;
