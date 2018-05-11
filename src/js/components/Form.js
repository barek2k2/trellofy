import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTask } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      status: 'todo'
    };
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleStatusChanged = this.handleStatusChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChanged(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleStatusChanged(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { status } = this.state;
    const id = uuidv1();
    this.props.addTask({ title, id, status });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleTitleChanged}
          />
          <select id="status" onChange={this.handleStatusChanged}>
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;