const { Fragment } = require('react');
const React = require('react');
const ReactDOM = require('react-dom');

//##################################### 2. JSX Challenge-1
ReactDOM.render(
    <>
    <h1>Top Companies</h1>
    <p>List of 5 Best Companies</p>
    <ol>
        <li>Facebook</li>
        <li>Amazon</li>
        <li>Apple</li>
        <li>Netflix</li>
        <li>Goole</li>
    </ol>
    </>,
    document.getElementById('root')
)

//##################################### 1. Multiple JSX element inside render()
// ReactDOM.render(
//             <Fragment>
//             <h1>Hello World!!!</h1>
//             <p>This is paragraph</p>
//             </Fragment>,
//             document.getElementById('root')
// );