import React from "react";
import { Route } from "react-router-dom";
import Initial from "./components/Initial";

import "./App.css";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Route
          exact
          path="/"
          render={(props) => (
            <Initial
              {...props}
              setUser={this.setUser}
              user={this.state.user}
              history={props.history}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
