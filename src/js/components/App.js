import React, {Component} from "react";
import List from "./List";
import NewTaskModal from "./NewTaskModal";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {tasks: state.tasks, statuses: state.statuses};
};

class ConnectedApp extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2>{this.props.tasks.length} Tasks</h2>
        </div>
        <div className="row">
          <ul className="lists">
            {this.props.statuses.map(status => (
              <li className="list">
                <div className="list-header">{status}</div>
                <List status={status}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const App = connect(
  mapStateToProps
)(ConnectedApp)

export default App;