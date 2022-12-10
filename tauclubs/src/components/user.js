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
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className= "d-inline">{name}</h4>
                        <i className="fa-regular fa-trash-can" style = {{cursor:"pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Department: {department}</p>
                    </div>
                </div>

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
