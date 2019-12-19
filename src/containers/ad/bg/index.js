import React, { useState, useEffect } from "react";

import axios from 'axios'
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import Bgg from '../bgg';
const Bg = ({ id, onNextQuestion, onAdding }) => {
  const [cd, setCD] = useState([]);
  useEffect(() => {
    const getQusetions = async () => {
      const response = await axios.get(`http://localhost:8080/question`)
      setCD(response.data.data)
    }
    getQusetions()
    console.log(cd)
  },[])
  const getCD = (cd) => {
    return cd.map(cd =>
      <Bgg cd={cd} onNextQuestion={onNextQuestion} onAdding={onAdding} />

    )
  }
  const [starHover, setStarHover] = useState(false);
  return (
    <div>
      {
        getCD(cd.filter(cd => { return cd.id === id }))
      }
    </div>
  )
}

export default Bg