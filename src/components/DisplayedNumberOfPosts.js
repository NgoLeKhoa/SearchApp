import React from 'react';
import {Dropdown, Button } from "react-bootstrap";

const displayedNumbers = [8, 9, 10, 11, 12]

function DisplayNumberOfPosts(props) {
    const elmDisplayedNumbers = displayedNumbers.map( 
        (displayedNumber, idx) => {
            const onClick = () => {
                props.onChangeDisplayedNumberOfPosts(displayedNumber)
            }
            return (
                <Dropdown.Item 
                    key={idx} 
                    className="font-weight-bold"
                    onClick={onClick}
                >
                    {displayedNumber}
                </Dropdown.Item>
            )
        }
    )
    return (
        <Dropdown className="mb-5">
            <Button className="font-weight-bold text-white dislay-number-of-products-title" variant="info"> Display Number of Posts:</Button>
            <Dropdown.Toggle className="dislay-number-of-products" split variant="info" />
            <Dropdown.Menu >
                {elmDisplayedNumbers}
            </Dropdown.Menu>
      </Dropdown>
    )
}

export default DisplayNumberOfPosts;
