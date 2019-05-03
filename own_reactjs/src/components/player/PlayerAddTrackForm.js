import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class PlayerAddTrackForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songTitle: '',
            authorTitle: '',
            trackUrl: '',
            songPreview: ''
        };

        this.handleAddTrack = this.handleAddTrack.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    handleAddTrack(event) {

        event.preventDefault();

        let newTrack = {};

        newTrack.id = Date.now().toString();
        newTrack.songTitle = this.state.songTitle;
        newTrack.authorTitle = this.state.authorTitle;
        newTrack.trackUrl = this.state.trackUrl;
        newTrack.songPreview = this.state.songPreview;

        this.props.addTrack(newTrack);

        this.setState({
            songTitle: '',
            authorTitle: '',
            trackUrl: '',
            songPreview: ''
        });

    };

    handleChangeValue(e) {

        this.setState({
           [e.target.name]: e.target.value
        });

    }

    render() {

        return(
            <div className="player-container-form">
                <Card>
                    <CardContent>
                        <form className="add-new-track-form" onSubmit={this.handleAddTrack}>
                            <FormControl className="add-new-track-form-item">
                                <InputLabel>Track title</InputLabel>
                                <Input
                                    name="songTitle"
                                    value={this.state.songTitle}
                                    onChange={this.handleChangeValue}
                                />
                            </FormControl>
                            <FormControl className="add-new-track-form-item">
                                <InputLabel>Author title</InputLabel>
                                <Input
                                    name="authorTitle"
                                    value={this.state.authorTitle}
                                    onChange={this.handleChangeValue}
                                />
                            </FormControl>
                            <FormControl className="add-new-track-form-item">
                                <InputLabel>Track url</InputLabel>
                                <Input
                                    name="trackUrl"
                                    value={this.state.trackUrl}
                                    onChange={this.handleChangeValue}
                                />
                            </FormControl>
                            <FormControl className="add-new-track-form-item">
                                <InputLabel>Track preview url</InputLabel>
                                <Input
                                    name="songPreview"
                                    value={this.state.songPreview}
                                    onChange={this.handleChangeValue}
                                />
                            </FormControl>
                            <div className="add-new-track-form-item __add-track-theme">
                                <Button variant="contained" color="primary" type="submit">
                                    Add track
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )

    }

}

PlayerAddTrackForm.propTypes = {
  addTrack: PropTypes.func
};

export default PlayerAddTrackForm;