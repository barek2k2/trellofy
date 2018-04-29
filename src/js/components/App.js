import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

class ConnectedApp extends Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>{this.props.tasks.length} Tasks</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new task</h2>
          <Form />
        </div>
      </div>
    )
  }
}

const App = connect(
  mapStateToProps
)(ConnectedApp)

export default App;