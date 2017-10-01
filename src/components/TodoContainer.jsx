import React from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";

import './TodoContainer.css'
import { clearTodos, fetchTodos } from '../actions/actions';
import TodoTable from "./TodoTable"

class Home extends React.Component {
  render() {
    const todos = this.props.todos.data;
    const renderTodos = todos && todos.length > 0;
    return (
      <div className="container">
        <Button id="fetch_todos" bsStyle="primary" onClick={this.props.fetchTodos} >
          Fetch TODOs
        </Button>
        <Button id="clear_todos" onClick={this.props.clearTodos}>
          Clear
        </Button>
        {renderTodos &&
         <TodoTable todos={todos} />
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    clearTodos: () => dispatch(clearTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
