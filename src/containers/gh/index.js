import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
export const Gh = () => {
    const [txtName, setTxtName] = useState("");
    return (
        <header className="test"> <div >
            <Form.Control type="text" placeholder="enter pin...." value={txtName} onChange={event => setTxtName(event.target.value)}></Form.Control>
            <Link to={`${txtName}`}>
            <Button>Submit</Button>
            </Link>
        </div></header>
       
    )
}
export default Gh;  