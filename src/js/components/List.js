import React, { Component } from "react";
import { connect } from "react-redux";
import Task from "./Task"

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

class ConnectedList extends Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <ul className="list-group list-group-flush">
        {this.props.tasks.map(el => (
          <Task key={el.id} element={el} />
        ))}
      </ul>
      )
  }
}

const List = connect(
  mapStateToProps
)(ConnectedList)

export default List;

