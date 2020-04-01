import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <NameLength name = "William"/>
                <NameLength name = "Kamila"/>
                <NameLength name = "Erika"/>
            </div>
        );
    }
}

function nameLength(props) {
    return <h1>The name {props.name} contains {props.name.length} characters!</h1>;
}

export default App;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);