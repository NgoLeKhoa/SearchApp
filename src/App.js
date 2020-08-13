import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import DisplayNumberOfPosts from "./components/DisplayedNumberOfPosts";
import SearchType from "./components/SearchType";
import SearchBar from "./components/SearchBar";
import PaginationCustom from "./components/PaginationCustom";
import PostCardsList from "./components/PostCardsList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	const [type, setType] = useState(true)
	const [keyword, setKeyword] = useState("");
	const [filterDisplay, setFilterDisplay] = useState([])
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(12);

	useEffect(() => {
		setIsLoading(true);
		const url = "https://jsonplaceholder.typicode.com/posts";
		axios.get(url).then(res => {
			setPosts(res.data)
			setIsLoading(false)
		})
		
	},[setPosts]);


	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	const onChangeDisplayedNumberOfPosts = (displayedNumber) => {
		setCurrentPage(1)
		setPostsPerPage(displayedNumber)
	}

	const onSearch = (value, type) => {
		let oldList = posts.map(post => {
			return ({...post})
		})
		let result = []
		if (value.toLowerCase() === keyword) {
			result = oldList
		} else {
			result = type
			? oldList.filter( post =>
				post.title.includes(value.toLowerCase())
			)
			: oldList.filter( post =>
				post.body.includes(value.toLowerCase())
			)
		}
		setType(type)
		setKeyword(value)
		setFilterDisplay(result)
	}

	const onChangeTypeSearch = (value) => {
		setType(value)
	}

	return (
		<Container className='mt-5'>
			<h1 className='text-primary mb-3 text-center'>GET POSTS FROM JSONPlaceholder</h1>
			<Row key={1}>
				<Col md={4}>
					<DisplayNumberOfPosts 
						onChangeDisplayedNumberOfPosts={onChangeDisplayedNumberOfPosts}
					/>
				</Col>
				<Col md={4}>
					<SearchType onChangeTypeSearch={onChangeTypeSearch}/>
				</Col>
				<Col md={4}>
					<SearchBar 
						onSearch={onSearch} 
						filterDisplay={keyword === "" ? [] : filterDisplay}
						keyword={keyword}
						type={type}
					/>
				</Col>
			</Row >
			<Row key={2}>
				<PostCardsList
					posts={keyword === "" ? currentPosts : filterDisplay} 
					isLoading={isLoading} 
				/>
			</Row>
			{keyword === "" 
				? <PaginationCustom
					currentPage={currentPage}
					postsPerPage={postsPerPage}
					totalPosts={posts.length}
					paginate={paginate}
				/>
				: ""
			}
		</Container>
	);
};

export default App;
