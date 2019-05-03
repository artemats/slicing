import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

export class TodoForm extends Component {

    constructor(props) {
        super(props);

        this.onAddTodoItem = this.onAddTodoItem.bind(this);
    }

    onAddTodoItem(event) {

        event.preventDefault();

        this.inputText.value.length > 0 ? this.props.addTodoItem(this.inputText.value) : null;

        this.inputText.value = '';

    }

    render() {

        return(
            <form autoComplete="off" onSubmit={this.onAddTodoItem}>
                <div className="form-container">
                    <input
                        type="text"
                        className="input-item"
                        ref={(input) => {this.inputText = input}}
                    />
                    <div className="action-btn">
                        <IconButton aria-label="Send" type="submit">
                            <SendIcon fontSize="small" />
                        </IconButton>
                    </div>
                </div>
            </form>
        )

    }

}

TodoForm.propTypes = {
    addTodoItem: PropTypes.func
};