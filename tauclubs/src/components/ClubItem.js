import React, { Component } from "react";
import PropTypes from "prop-types";

class ClubItem extends Component {
  static defaultProps = {
    club: "Bilgi Yok",
  };
  render() {
    const { club } = this.props;
    return (
      <div class="my-3">
        <div class="card w-auto">
          <div class="card__body">
            <h4>{club.name}</h4>
            <p>CONTENT</p>
          </div>
        </div>
      </div>
    );
  }
}
ClubItem.propTypes = {
  club: PropTypes.object.isRequired,
};

export default ClubItem;
