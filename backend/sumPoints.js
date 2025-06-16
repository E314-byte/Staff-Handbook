import React from 'react';
import axios from 'axios';

function SumPoints() {
    const response = axios.post('http://localhost:8080/api/question/6',{});
    
}

export default SumPoints;