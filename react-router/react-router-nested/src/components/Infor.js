import React from "react";
import { Link } from "react-router-dom";
import userApi from "../userApi";

class Infor extends React.Component {
  render() {
    const id = +this.props.match.params.id;

    const user = userApi.get(id);

    return (
      <div>
        <h1>
          {user.name} (#{user.id})
        </h1>
        <h2>Genre: {user.genre}</h2>
        <Link to="/user">Back</Link>
      </div>
    );
  }
}

export default Infor;
