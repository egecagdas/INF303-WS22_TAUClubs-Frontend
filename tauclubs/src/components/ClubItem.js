import React, { Component } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// class ClubItem extends Component {
function ClubItem(props) {
  // static defaultProps = {
  //   club: "Bilgi Yok",
  // };

  let navigate = useNavigate();
  const goToClub = (club) => {
    // this.props.history.push("/Clubs/" + club.id + "/");
    // <Navigate to={`/Clubs/${club.id}`} />;
    // this.props.navigation.navigate('/Clubs', paramsIfAny})

    let path = `/Clubs/${club.id}`;
    navigate(path);
  };

  const { club } = props;
  return (
    <div class="my-3">
      <div class="card w-auto" onClick={() => goToClub(club)}>
        <div class="card__body">
          <h4>{club.name}</h4>
          <p>CONTENT</p>
        </div>
      </div>
    </div>
  );
}

ClubItem.propTypes = {
  club: PropTypes.object.isRequired,
};

ClubItem.defaultProps = {
  club: "Bilgi Yok",
};

export default ClubItem;
