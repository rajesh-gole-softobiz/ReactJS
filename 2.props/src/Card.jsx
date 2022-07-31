import React from 'react';
const myDesc = 'JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.';
const date = new Date();
const myDate = date.toLocaleDateString();
function Card(props) {
    return <div className='card'>
    <h3 className='cardTitle'>{props.myTitle}</h3>
    <p className='cardDesc'>{myDesc}</p>
    <p className='cardDate'>{myDate}</p>
  </div>
}
export default Card;