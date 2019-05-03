import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseArrowIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            volume: 30,
            isPlaying: false,
            pause: true
        };

        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.setPlay = this.setPlay.bind(this);
        this.setPause = this.setPause.bind(this);
        this.handleRemovePlayingTrack = this.handleRemovePlayingTrack.bind(this);
    }

    onProgress(state) {

        this.setState({
           played: state.played
        });

    };

    onChangeVolume(event, value) {

        this.setState({
            volume: value
        });

    }

    setPlay() {

        this.setState({
           isPlaying: true
        });

    }

    setPause() {

        this.setState({
            isPlaying: false
        });

    }

    onError(error) {

        console.log(error)

    }

    handleRemovePlayingTrack() {

        this.props.removePlayingTrack();

    }

    render() {

        const { playingTrack } = this.props;
        const { volume, played, isPlaying } = this.state;

        return(
            <div className="player-container-wrap">
                <Card className="player-container-wrap-body">
                    <div className="player-body">
                        <div className="player-body-video">
                            {  }
                            <ReactPlayer
                                className='react-player'
                                url={playingTrack.trackUrl || ''}
                                width='100%'
                                height='100%'
                                volume={volume / 100}
                                onProgress={this.onProgress}
                                onReady={this.setPlay}
                                onBuffer={this.setPlay}
                                onError={this.onError}
                                playing={isPlaying}
                            />
                        </div>
                        <div className="player-body-control">
                            <CardContent className="player-body-control-text">
                                <Typography component="h5" variant="h5" className="song-title">{playingTrack.songTitle}</Typography>
                                <Typography variant="subtitle1" color="textSecondary" className="author-title">{playingTrack.authorTitle}</Typography>
                            </CardContent>
                            <div className="player-body-control-btns">
                                <IconButton aria-label="Previous"><SkipPreviousIcon /></IconButton>
                                { isPlaying
                                    ?   <IconButton aria-label="Pause" onClick={this.setPause}>
                                            <PauseArrowIcon />
                                        </IconButton>
                                    :   <IconButton aria-label="Play" onClick={this.setPlay}>
                                            <PlayArrowIcon />
                                        </IconButton>
                                }
                                <IconButton aria-label="Next"><SkipNextIcon /></IconButton>
                            </div>
                            <div className="player-body-control-volume">
                                <Slider
                                    value={volume}
                                    aria-labelledby="Volume"
                                    vertical
                                    onChange={this.onChangeVolume}
                                />
                            </div>
                            <div className="player-body-control-progress-wrap">
                                <Slider
                                    value={played * 100}
                                    aria-labelledby="label"
                                />
                            </div>
                            <Button color="secondary" className="close-player" onClick={this.handleRemovePlayingTrack}>
                                Close player
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        )

    }

}

export default Player;