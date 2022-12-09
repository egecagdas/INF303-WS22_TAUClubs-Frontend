import React, { Component} from "react";
import Button from '@mui/material/Button';

class User extends Component{
    render() {

        return (
            <div>
                <ul>
                    <li>İsim: Mustafa Murat Coşkun</li>
                    <li>Departman: Bilişim</li>
                    <li>Maaş: 5000</li>
                </ul>
            </div>
        )
    }
}

export default User;
