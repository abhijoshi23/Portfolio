import React, { Component } from 'react'
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
 
class App extends Component {
    render() {
      return (
        <Feedback
          defaultEmailValue={this.props.user.email}
          projectId="63a5d601cc3ceb0004154466"
        />
      );
    }
  }

