import React, { useState } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Bg from './bg';
export const Ad = () => {
    const [isAdding, setAdding] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    return (
        <header className="test1 d-flex"><div>
            {
                isAdding ? (
                    <Bg id={currentQuestion}  onNextQuestion={value => setCurrentQuestion(value)}  onAdding={value => setAdding(false)} />
                ) : (
                        <Button className="btn btn-secondary test3"  onClick={() => setAdding(true)}>Start Game</Button>
                    )}
        </div></header>
        
    )
}
export default Ad;