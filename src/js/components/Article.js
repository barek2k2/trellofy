import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: article => dispatch(deleteArticle(article))
  };
};

class ConnectedArticle extends Component{
  constructor(){
    super();
    this.handleDeleted = this.handleDeleted.bind(this);
  }

  handleDeleted(article){
    this.props.deleteArticle(article);
  }

  render(){
    let element = this.props.element;
    return(
      <li className="list-group-item" key={element.id}>
        {element.title} <a onClick={this.handleDeleted.bind(this,element)}>x</a>
      </li>
    )
  }

}

const Article = connect(null, mapDispatchToProps)(ConnectedArticle);


export default Article;

