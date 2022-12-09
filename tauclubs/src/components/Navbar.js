import React from "react";
import {PropTypes2} from "@mui/material";
import PropTypes from "prop-types";


//Functional Component
const Navbar = (props) => {

    return (

        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
    //string olan bir Title göndermemiz gerekiyor isRequired sebebiyle Navbar objesi oluştururken
}
//Eğer istenen props gönderilmezse default ayarlanır

Navbar.defaultProps = {
    title: "Default App"
}
export default Navbar;
