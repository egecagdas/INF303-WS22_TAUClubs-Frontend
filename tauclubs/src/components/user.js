import React, { Component} from "react";
import Button from '@mui/material/Button';

class User extends Component{
    render() {

        return (
            <div>
                <form>
                    <input type = 'text'/>
                    <button>Gönder</button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </form>

            </div>
        )
    }
}

export default User;
