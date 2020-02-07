import React from "react";
import SignupForm from "./SignupForm";
const Route = require("react-router-dom").Route;

class App extends React.Component {
    render() {
        return(<div>
        <div>nodemon is working with app {this.props.data}</div>
            <SignupForm />
        </div>);
    }
};

export default App;