import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

class PlayerListItem extends Component {

    constructor(props) {
        super(props);

        this.handleRemoveTrack = this.handleRemoveTrack.bind(this);
        this.handleSelectTrack = this.handleSelectTrack.bind(this);
    }

    handleRemoveTrack() {

        this.props.removeTrack(this.props.track.id);

    }

    handleSelectTrack() {

        this.props.selectTrack(this.props.track);

    }

    render() {

        const { id, songTitle, authorTitle, songPreview } = this.props.track;
        const playingTrackId = this.props.playingTrack.id;

        return(
            <div className="player-container-list-item">
                <Card className={`${ playingTrackId === id ? 'active' : ''} track-item`} onClick={this.handleSelectTrack}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={songTitle}
                            height="140"
                            src={songPreview}
                            title={songTitle}
                            className="track-item-preview"
                        />
                        <CardContent className="track-item-content">
                            <Typography
                                gutterBottom
                                className="track-item-content-title"
                            >{songTitle}</Typography>
                            <Typography
                                gutterBottom
                                variant="caption"
                                className="track-item-content-title"
                            >{authorTitle}</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="track-item-actions">
                        <Button size="small" color="primary" onClick={this.handleSelectTrack}>
                            Play
                        </Button>
                        <Button size="small" color="primary" onClick={this.handleRemoveTrack}>
                            Remove
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )

    }

}

export default PlayerListItem;