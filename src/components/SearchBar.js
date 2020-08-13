import React from "react";
import { Form, FormControl } from "react-bootstrap";

function SearchBar(props) {
    const type = props.type

    const onSearch = (e) => {
        const keyword = e.target.value
        props.onSearch(keyword, type)
    }

    const elmResult = props.filterDisplay.map( 
        item => {
            const resultTitle = item.title
            const resultDetails = item.body
            const index = type ? resultTitle.indexOf(props.keyword) : resultDetails.indexOf(props.keyword)
            return (
                type === true 
                    ? <a key={item.id}>
                        <h6>
                            {resultTitle.substring(0, index)}
                            <span className="highlight-keyword"> 
                                {resultTitle.substring(index, index + props.keyword.length)}
                            </span> 
                            {resultTitle.substring(index + props.keyword.length, resultTitle.length < 30 ? resultTitle.length  : 30) 
                                + (resultTitle.length < 30 ? "" : "...")}
                        </h6>
                        <p style={{marginLeft:"10px"}}>{ resultDetails.length < 100 ? resultTitle : (resultDetails.slice(0, 100) + "...")  }</p>
                    </a>
                    : (<a key={item.id}>
                        <h6>
                            <span >{ resultTitle.length < 30 ? resultTitle : (resultTitle.slice(0, 30) + "...")  }</span> 
                        </h6>
                        <p style={{marginLeft:"10px"}}>
                            {resultDetails.substring(0, index)}
                            <span className="highlight-keyword"> 
                                {resultDetails.substring(index, index + props.keyword.length)}
                            </span> 
                            {resultDetails.substring(index + props.keyword.length, resultDetails.length < 100 ? resultDetails.length  : 100) 
                                + (resultDetails.length < 100 ? "" : "...")}
                        </p>
                    </a>
                    )
            )
        }      
    )

    return (
        <Form >
            <div className="dropdown">
                <FormControl 
                    type="text" 
                    placeholder="Search Title or Details" 
                    className="mr-sm-2" 
                    onChange={(e) => onSearch(e)}
                />
                {props.filterDisplay !== []  ? (
                    <div className="dropdown-content">
                        {elmResult}
                    </div>) : ""
                }
            </div>
        </Form>
    )
}

export default SearchBar;
