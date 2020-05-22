import React from "react";
import { Row, Container } from "reactstrap";

import PageContact from "./components/PageContact";
import PageConversation from "./components/PageConversation";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    // const { user } = this.props;
    // if (user) history.push("/");
    return (
      <Container fluid className="App">
        <Row>
          <Switch>
            <Route path="/" exact>
              <PageContact />
              <PageConversation />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, null)(App);
