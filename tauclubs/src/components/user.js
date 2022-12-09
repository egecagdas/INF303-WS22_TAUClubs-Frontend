import React, { Component} from "react";
import Button from '@mui/material/Button';
import {PropTypes2} from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

class User extends Component{
   //User.defaultProps u static olarakta tanımlayabiliriz
    static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
}
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
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired
}


/*User.defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok"
}*/
export default User;
