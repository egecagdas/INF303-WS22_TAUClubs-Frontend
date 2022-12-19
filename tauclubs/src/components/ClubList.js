import React from "react";
import axios from "axios";
import ClubItem from "./ClubItem";

class ClubList extends React.Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/clubs/")
      .then((res) => {
        data = res.data;
        console.log(data);
        this.setState({
          clubs: data,
        });
      })
      .catch((err) => {});
  }
  render() {
    return (
      <div className="clubList">
        {this.state.clubs.map((club) => (
          <div>
            <ClubItem
              club={club}
              //   id={club.id}
              //   name={club.name}
              //   manager={club.manager}
              //   members={club.members}
              //   pending_members={club.pending_members}
              //   responsibleLecturer={club.responsibleLecturer}
              //   clubMail={club.clubMail}
              //   followers={club.followers}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default ClubList;
