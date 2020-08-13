import React, {useState} from 'react'
import { Form } from "react-bootstrap";

function SearchType(props) {
    const [isChecked, setIsChecked] = useState(false)

    const onChange = (e) => {
        setIsChecked(!isChecked)
        props.onChangeTypeSearch(isChecked)
    }
    
    return (
        <Form className="text-center">
            <Form.Group >
                <Form.Label >Search By</Form.Label>
                <Form.Row className="justify-content-center">
                        <Form.Check 
                            className = "ml-2 mr-2"
                            name="radioBtn" 
                            type="radio" 
                            label="By Title" 
                            onChange={(e)=>onChange(e)}
                            checked={!isChecked}
                        />
                        <Form.Check 
                            name="radioBtn" 
                            className = "ml-2 mr-2"
                            type="radio" 
                            label="By Details" 
                            onChange={(e)=>onChange(e)}
                            checked={isChecked}
                        />
                </Form.Row>
            </Form.Group>
        </Form>
    )
}

export default SearchType
