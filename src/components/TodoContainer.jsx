import React from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from "react-bootstrap";

import './TodoContainer.css'
import { clearTodos, fetchTodos } from '../actions/actions';
import TodoTable from "./TodoTable"

class Home extends React.Component {
  render() {
    // destructuring
    const { data: todos, pending: isLoading, error } = this.props.todos;
    const renderTodos = todos && todos.length > 0;
    return (
      <div className="container">
        {error &&
         <Alert id="todos_alert" bsStyle="danger">
           <strong>Holy guacamole!</strong> Request failed.
         </Alert>
        }
        <Button id="fetch_todos"
                bsStyle="primary"
                disabled={isLoading}
                onClick={!isLoading ? this.props.fetchTodos : null}>
          {isLoading ? 'Fetching TODOs...' : 'Fetch TODOs'}
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
