import React, { Component } from "react";
import { connect } from "react-redux";
import Article from "./Article"

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <Article key={el.id} element={el} />
        ))}
      </ul>
      )
  }
}

const List = connect(
  mapStateToProps
)(ConnectedList)

export default List;

