import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TodoForm } from './TodoForm';
import { TodoListItem } from './TodoListItem';
import { addTodoItem, removeTodoItem, toggleCompletedTodoItem } from "../store/Todo/actions";

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class TodoContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { todoList } = this.props;

        return(
            <div>
                <Paper className="defaultFormWrap">
                    <Typography variant="h2" gutterBottom>
                        Todo app
                    </Typography>
                    <TodoForm addTodoItem={this.props.addTodoItem} />
                    <List component="nav">
                        {
                            todoList.map((todoItem, key) => {

                                return <TodoListItem
                                    key={key}
                                    todoItem={todoItem}
                                    removeTodoItem={this.props.removeTodoItem}
                                    toggleCompletedTodoItem={this.props.toggleCompletedTodoItem}
                                />

                            })
                        }

                    </List>
                </Paper>
            </div>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        todoList: state.todoReducer
    }

};

const mapDispatchToProps = {

    addTodoItem: addTodoItem,
    removeTodoItem: removeTodoItem,
    toggleCompletedTodoItem: toggleCompletedTodoItem

};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);