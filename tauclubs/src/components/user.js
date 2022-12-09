import React, { Component} from "react";
import Button from '@mui/material/Button';

class User extends Component{
    render() {

        // Destructing
        const {name,department,salary} = this.props;
        return (
            <div>
                <ul>
                    <li>İsim: {name}</li>
                    <li>Departman: {this.props.department}</li>
                    <li>Maaş: {this.props.salary}</li>
                </ul>
            </div>
        )
    }
}

export default User;
