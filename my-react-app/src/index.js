import React from 'react';
import ReactDOM from 'react-dom';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'William',
//     lastName: 'Carvalho',
// };


// const element = <h1>Hello, {formatName(user)}!</h1>;

function NameLength(props) {
    return <h1>The name {props.name} contains {props.name.length} characters!</h1>;
}

function App(){
    return (
        <div>
        <NameLength name = "William"/>
        <NameLength name = "Saionara"/>
        <NameLength name = "Erika"/>
        </div>
    );
}

ReactDOM.render(
   <App/>,
  document.getElementById('root')
  
);

// function ModuleTitle(props) {
//     return <h1>Welcome to the <br/>{props.name} module.</h1>;
// }

// const element = <ModuleTitle name = "Back-end Web Development" />

// ReactDOM.render(
//    element,
//   document.getElementById('root')
  
// );

// ReactDOM.render(
//    element,
//   document.getElementById('root')
  
// );

// ReactDOM.render(
//    <h1>Goodbye</h1>,
//   document.getElementById('goodBye')
  
// );

