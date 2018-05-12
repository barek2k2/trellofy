import React, {Component} from "react";
import {connect} from "react-redux";
import uuidv1 from "uuid";
import {addTask} from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};
class ConnectedNewTask extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      status: 'todo'
    };
    this.handleTitleChanged = this.handleTitleChanged.bind(this);
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this);
    this.handleStatusChanged = this.handleStatusChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChanged(event) {
    this.setState({title: event.target.value});
  }

  handleDescriptionChanged(event) {
    this.setState({description: event.target.value});
  }

  handleStatusChanged(event) {
    this.setState({status: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {title} = this.state;
    const {status} = this.state;
    const {description} = this.state;
    const id = uuidv1();
    this.props.addTask({title, id, status, description});
    this.setState({title: "", description: ""});
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#newTaskModal">
          New Task
        </button>
        <div className="modal fade" id="newTaskModal" tabIndex="-1" role="dialog" aria-labelledby="newTaskModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.handleSubmit}>
                <div className="modal-header">
                  <h5 className="modal-title" id="newTaskModalLabel">New Task</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={this.state.title} id="title" onChange={this.handleTitleChanged} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Description</label>
                    <textarea type="text" className="form-control" value={this.state.description} id="description"  onChange={this.handleDescriptionChanged} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select className="form-control" id="status" onChange={this.handleStatusChanged}>
                      <option value="todo">Todo</option>
                      <option value="doing">Doing</option>
                      <option value="done">Done</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-success btn-lg">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const NewTaskModal = connect(null, mapDispatchToProps)(ConnectedNewTask);
export default NewTaskModal;