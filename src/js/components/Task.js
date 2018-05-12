import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: task => dispatch(deleteTask(task))
  };
};

class ConnectedTask extends Component{
  constructor(){
    super();
    this.handleDeleted = this.handleDeleted.bind(this);
  }

  handleDeleted(task){
    this.props.deleteTask(task);
  }

  render(){
    let element = this.props.element;
    return(
      <li className="task" key={element.id}>
        {element.title} <a className="delete" onClick={this.handleDeleted.bind(this,element)}>x</a>
      </li>
    )
  }

}

const Task = connect(null, mapDispatchToProps)(ConnectedTask);


export default Task;

