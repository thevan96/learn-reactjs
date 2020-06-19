import React, { Suspense } from "react";
import { Switch, Route } from "react-router";

const Home = React.lazy(() => import("./Home"))
const About = React.lazy(() => import("./About"))
const User = React.lazy(() => import("./User"))

class Main extends React.Component {
  render() {
    return (
      <div>
        <Suspense fallback={<p>Loading ..</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
          </Switch>
        </Suspense>

      </div>

    );
  }
}

export default Main;
