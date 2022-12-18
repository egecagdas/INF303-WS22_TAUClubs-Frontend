import React, { Component } from "react";
import Button from "@mui/material/Button";
import { PropTypes2 } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import "../page/post.css";

class Post extends Component {
  //User.defaultProps u static olarakta tanımlayabiliriz
  static defaultProps = {
    category: "Bilgi Yok",
    title: "Bilgi Yok",
    content: "Bilgi Yok",
    club: "Bilgi yok",
    time: "Bilgi yok",
  };
  render() {
    // Destructing
    const { category, title, content, club, time } = this.props;
    return (
      <div class="">
        <div class="card w-auto">
          <div class="card__body">
            <span class="tag tag-blue">{category}</span>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
          <div class="card__footer">
            <div class="user">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                class="user__image"
              />
              <div class="user__info">
                <h5>{club}</h5>
                <small>{time}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Post.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

/*User.defaultProps = {
name: "Bilgi Yok",
salary: "Bilgi Yok",
department: "Bilgi Yok"
}*/
export default Post;
