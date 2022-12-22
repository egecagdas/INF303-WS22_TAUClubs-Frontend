import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

class PostListFollowed extends React.Component {
  //   state = {
  //     posts: [],
  //     clubs: [],
  //   };

  //   componentDidMount() {
  //     let data;
  //     let club_data;

  //     axios
  //       .get("http://localhost:8000/posts/get_followed_clubs_posts/")

  //       .then((res) => {
  //         data = res.data;
  //         console.log(data);
  //         this.setState({
  //           posts: data,
  //         });
  //       })
  //       .catch((err) => {});

  //     axios
  //       .get("http://localhost:8000/clubs/")

  //       .then((res) => {
  //         club_data = res.data;
  //         console.log(club_data);
  //         this.setState({
  //           clubs: club_data,
  //         });
  //       })
  //       .catch((err) => {});
  //   }

  //   getClubName(clubs, club_id) {
  //     for (let i = 0; i < clubs.length; i++) {
  //       if (clubs[i].id == club_id) {
  //         return clubs[i].name;
  //       }
  //     }
  //   }

  //   render() {
  //     const clubs = this.state.clubs;
  //     return (
  //       <div className="postList">
  //         {this.state.posts.map((post) => (
  //           <div className="mb-2">
  //             <Post
  //               category={post.type}
  //               title={post.name}
  //               content={post.description}
  //               club={this.getClubName(clubs, post.clubname)}
  //               time={post.postdate}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     );
  //   }
  // }

  state = {
    posts: [],
    clubs: [],
  };

  componentDidMount() {
    let data;
    let club_data;

    axios
      .get("http://localhost:8000/posts/get_followed_clubs_posts/")

      .then((res) => {
        data = res.data;
        console.log(data);
        this.setState({
          posts: data,
        });
      })
      .catch((err) => {});

    axios
      .get("http://localhost:8000/clubs/")

      .then((res) => {
        club_data = res.data;
        console.log(club_data);
        this.setState({
          clubs: club_data,
        });
      })
      .catch((err) => {});
  }

  getClubName(clubs, club_id) {
    for (let i = 0; i < clubs.length; i++) {
      if (clubs[i].id == club_id) {
        return clubs[i].name;
      }
    }
  }

  render() {
    const clubs = this.state.clubs;
    return (
      <div className="postList">
        {this.state.posts.map((post) => (
          <div className="mb-2">
            <Post
              category={post.type}
              title={post.name}
              content={post.description}
              club={this.getClubName(clubs, post.clubname)}
              time={post.postdate}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default PostListFollowed;
