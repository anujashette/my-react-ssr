import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../style/hearderStyle';

class Header extends React.Component {
    constructor(props) {
        super(props);
    this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin () {
        console.log('login');
        alert('login ');
    }
    render() {
        return (<div className='header-div'>
            <div className='bookeventz-icon'>
                <img src='https://media.bookeventz.com/html/bookeventz.com/images/New_BE_Favicon_2.ico'/>
                <span>BookEventz</span>
            </div>
            <div className='header-content'>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <div>
                    <div onClick={this.handleLogin}>
                        Login
                    </div>
                </div>
            </div>
        </div>);
    }
};

export default withStyles(styles)(Header);