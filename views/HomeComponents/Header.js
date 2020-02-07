import React from "react";
import { withStyles } from '@material-ui/core/styles';
import styles from '../../style/hearderStyle';

class Header extends React.Component {

    render() {

        return(<div className='header-div'>
            <div>
                <div className= 'bookeventz-icon'>
                    <img src='https://media.bookeventz.com/html/bookeventz.com/images/New_BE_Favicon_2.ico' />
                    <span>BookEventz</span>
                </div>

            </div>
        </div>);
    }
};

export default withStyles(styles)(Header);