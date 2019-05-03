import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export class TodoListItem extends Component {

    constructor(props) {
        super(props);

        this.onRemoveTodoItem = this.onRemoveTodoItem.bind(this);
        this.onToggleCompletedTodoItem = this.onToggleCompletedTodoItem.bind(this);
    }

    onRemoveTodoItem() {

        this.props.removeTodoItem(this.props.todoItem.id);

    }

    onToggleCompletedTodoItem() {

        this.props.toggleCompletedTodoItem(this.props.todoItem.id);

    }

    render() {

        const { todoItem } = this.props;

        return(
            <div>
                <ListItem className="task-item">
                    <Checkbox
                        className="checkbox-item"
                        checked={todoItem.completed}
                        onChange={this.onToggleCompletedTodoItem}
                        color="primary"
                    />
                    <ListItemText className="todo-title" primary={todoItem.title} />
                    <div className="form-action-btn">
                        <IconButton aria-label="Delete" onClick={this.onRemoveTodoItem}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </div>
                </ListItem>
                <Divider />
            </div>
        )

    }

}

TodoListItem.propTypes = {
    todoItem: PropTypes.object,
    removeTodoItem: PropTypes.func
};