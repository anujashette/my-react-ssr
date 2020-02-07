import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            lastname:''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChange () {

    }

    handleSubmit () {

    }
    render() {
        return (<div>
            Login Form
            <form>
                First name:
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleOnChange}/>
                Last name:
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleOnChange}/>
                <input type="submit" value="Submit" onClick={this.handleSubmit}/>
            </form>
        </div>)
    }
}

export default SignupForm;