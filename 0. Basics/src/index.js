const { Fragment } = require('react');
const React = require('react');
const ReactDOM = require('react-dom');

//##################################### 5. JSX Attributes

const name = 'Rajesh';
const links = 'https://google.com';
ReactDOM.render(
    <>
    <h1 contentEditable='true'>{`Hello, This is ${name}`}</h1>
    <img   src='https://picsum.photos/200/300' alt='img1'/>
    <img   src='https://picsum.photos/250/300' alt='img1'/>
    <img   src='https://picsum.photos/300/300' alt='img1'/>

    <p>
        <a href={links} target='_blank'>Click Here</a>
    </p>

    </>,
    document.getElementById('root')
)


//##################################### 4. JSX Challenge-2
// const curDate =new Date().toLocaleDateString();
// const curTime =new Date().toLocaleTimeString();

// ReactDOM.render(
//     <>
//     <h1>Hello, This is my 2nd Challange</h1>
//     <p>{`Today date : ${curDate}`}</p>
//     <p>{`Today date : ${curTime}`}</p>
//     </>,
//     document.getElementById('root')
// )

//##################################### 3. JSX Expression in React - Template Literale
// const fname= 'RAJESH';
// const lname='GOLE';
// ReactDOM.render(
//     <>
//     <h1>{`My full name is ${fname} ${lname}`}</h1>
//     </>,
//     document.getElementById('root')
// )


//##################################### 2. JSX Challenge-1
// ReactDOM.render(
//     <>
//     <h1>Top Companies</h1>
//     <p>List of 5 Best Companies</p>
//     <ol>
//         <li>Facebook</li>
//         <li>Amazon</li>
//         <li>Apple</li>
//         <li>Netflix</li>
//         <li>Goole</li>
//     </ol>
//     </>,
//     document.getElementById('root')
// )

//##################################### 1. Multiple JSX element inside render()
// ReactDOM.render(
//             <Fragment>
//             <h1>Hello World!!!</h1>
//             <p>This is paragraph</p>
//             </Fragment>,
//             document.getElementById('root')
// );