import React, {Component} from "react";
import {connect} from "react-redux";
import Task from "./Task"
import NewTaskModal from "./NewTaskModal"

const mapStateToProps = state => {
  return {tasks: state.tasks};
};

class ConnectedList extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const status = this.props.status;
    return (
      <div>
        <ul className="list-group list-group-flush">
          {this.props.tasks.filter(task => task.status == status).map(el => (
            <Task key={el.id} element={el}/>
          ))}
        </ul>
        <NewTaskModal />
      </div>
    )
  }
}

const List = connect(
  mapStateToProps
)(ConnectedList)

export default List;

