import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
import { Link } from "react-router-dom";

import userApi from "../userApi";

const Infor = React.lazy(() => import('./Infor'));

class User extends React.Component {

  render() {
    const listUser = userApi.all();
    const { path, url } = this.props.match;

    return (
      <div className="User">
        <Suspense>
          <Switch fallback={<p>Loading ..</p>}>
            <Route exact path="/user">
              <ul>
                {listUser.map((user, index) => (
                  <li key={index}>
                    <Link to={`${url}/${user.id}`}>{user.name}</Link>
                  </li>
                ))}
              </ul>
            </Route>
            <Route path={`${path}/:id`} component={Infor} />
          </Switch>
        </Suspense>
      </div>

    );
  }
}

export default User;
