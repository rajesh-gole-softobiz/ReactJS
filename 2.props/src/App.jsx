import React from "react";
import Card from "./Card";

//Mapping data to components
import Data from './data.json';

function App(){
    //Method-3: Print JSON data with Map
    let items = [];
    items = Data.map((i,index) => <Card key={index} myTitle={i.title} myDesc={i.desc}/>)
    // All Data will store to i 

    //Method-2: Print JSON data with for loop
    // let items = [];
    // for(let x=0;x<Data.length; x++){
    //     items.push( <Card myTitle={Data[x].title} myDesc={Data[x].desc}/> )
    // }

    return <>

        {items}
        {Data.map((i) => <Card myTitle={i.title} myDesc={i.desc}/>)}

    {/* Method-1 */}
    {/* <Card myTitle={Data[0].title} myDesc={Data[0].desc}/>
    <Card myTitle={Data[1].title} myDesc={Data[1].desc}/>
    <Card myTitle={Data[2].title} myDesc={Data[2].desc}/> */}
    </>
}

export default App;