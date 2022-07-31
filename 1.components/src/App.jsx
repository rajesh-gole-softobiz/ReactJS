import React from 'react';
import Heading from './Heading';
import Para from './Para';
import {add,sub,mul,div} from './Calc';


function App() {
    return (
        <>
        <Heading/>
        <Para/>
        <p>Addition of 40 + 10 = {add(40,10)}</p>
        <p>Subtraction of 40 - 10 = {sub(40,10)}</p>
        <p>Multiplication of 40 * 10 = {mul(40,10)}</p>
        <p>Division of 37 / 3 = {div(37,3)}</p>
        </>
    )
}

export default App;