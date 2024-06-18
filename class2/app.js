import React from "react";
import ReactDOM from "react-dom/client"
//create heading in React
// {}=>place where we give attributes
//third arugument is children.(means what we need to put inyo this)
const heading=React.createElement("h1",{id:"heading" , xyz:"abc"},"Hello World from React!");
console.log(heading)
//this is react heading but under the hood is javascript object which have a key props whose value is an object of attributes
// props: {id: 'heading', xyz: 'abc', children: 'Hello World from React!'}
//until this point this heading is not h1 tag , its just an javascript object

//tell react what is root where we going to do dom manupulation
const root=ReactDOM.createRoot(document.getElementById("root3"));

//render heading in root
root.render(heading);
//this render method convert above heading object into h1 tag and render it into browser


// *************************************************************************************************************************//



// <div id:"parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//     </div>

// </div>

/*
const parent=React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
            React.createElement("h1",{},"I am H1 tag")
        )
);

//this parent is just an React object under the hood is js object at this stage its not an div tag.
//while rendering it convert to html and get rendered

const root_new=ReactDOM.createRoot(document.getElementById("root4"));

root_new.render(parent)
*/





// <div id:"parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
//         <h1>i am also an h1 tag</h1>
//     </div>

// </div>

// const parent=React.createElement("div",{id:"parent"},
//         React.createElement("div",{id:"child"},
//             //give array of childern if need siblings
//             [React.createElement("h1",{},"I am H1 tag"),React.createElement("h1",{},"I am also an H1 tag")]
//         )
// );

// const root_new=ReactDOM.createRoot(document.getElementById("root4"));

// root_new.render(parent)







// <div id="parent">
//     <div id="child1">
//         <h1>I am h1 tag</h1>
//         <h1>i am also an h1 tag</h1>
//     </div>

//     <div id="child2">
//         <h1>I am h1 tag2</h1>
//         <h1>i am also an h1 tag2</h1>
//     </div>

// </div>

const parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},[
            React.createElement("h1",{},"i am h1 tag"),React.createElement("h1",{},"i am also an h1 tag ")
        
        ])
        ,
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"i am h1 tag2"),React.createElement("h1",{},"i am also an h1 tag2 ")
        
        ])


    ]
)

const root_new=ReactDOM.createRoot(document.getElementById("root4"));

root_new.render(parent)
