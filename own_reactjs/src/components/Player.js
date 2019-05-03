import React, { Component } from 'react';

import ReactPlayer from 'react-player';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseArrowIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/lab/Slider';

export class Player extends Component{

    constructor(props) {
        super(props);
        this.state = {
            url: 'https://www.youtube.com/watch?v=TJ3Ci4yeQpA',
            playing: false,
            volume: 10,
            played: 0,
            progress: 0
        };
        this.onPlay = this.onPlay.bind(this);
        this.onPause = this.onPause.bind(this);
        this.onEnded = this.onEnded.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.changeAudioVolume = this.changeAudioVolume.bind(this);
    }

    onPlay() {

        this.setState({
            playing: true
        });

    }

    onPause() {

        this.setState({
            playing: false
        });

    }

    onEnded() {

        console.log('ended');
        this.setState({
           playing: false
        });

    }

    changeAudioVolume(event, value) {

        this.setState({
           volume: value
        });

    }

    onProgress(playedSeconds) {

        this.setState({
            played: playedSeconds.played * 100
        });

    }

    onDuration(duration) {

        console.log(duration);

    }

    nextAudio() {

        console.log('next audio');

    }

    previousAudio() {

        console.log('prev audio');

    }

    render() {

        return(
            <div>
                <Card className="card-player">
                    <CardMedia
                        className="card-media"
                        image="https://yt3.ggpht.com/a-/AAuE7mCpsyeSYSze43LKTwa3mU0cV_xOkidKgtHm=s288-mo-c-c0xffffffff-rj-k-no"
                        title="Без неї ніяк (Прем'єра 2016) Український хіт 2016"
                    />
                    <div className="card-player-content">
                        <div className="card-player-header">
                            <CardContent>
                                <Typography component="h5" variant="h5" className="player-song-title">
                                    Без неї ніяк (Прем'єра 2016) Український хіт 2016
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    БЕZ ОБМЕЖЕНЬ
                                </Typography>
                            </CardContent>
                            <div className="slider-wrap">
                                <Slider
                                    className="slider"
                                    value={this.state.volume}
                                    onChange={this.changeAudioVolume}
                                    vertical
                                />
                            </div>
                        </div>
                        <div>
                            <IconButton aria-label="Previous" onClick={this.previousAudio}>
                                <SkipPreviousIcon />
                            </IconButton>

                            { this.state.playing ?
                                <IconButton aria-label="Play" onClick={this.onPause}>
                                    <PauseArrowIcon />
                                </IconButton> :
                                <IconButton aria-label="Pause" onClick={this.onPlay}>
                                    <PlayArrowIcon />
                                </IconButton>
                            }
                            <IconButton aria-label="Next" onClick={this.nextAudio}>
                                <SkipNextIcon />
                            </IconButton>
                        </div>
                        <div className="slider-wrap __horizontal-theme">
                            <Slider
                                className="slider"
                                value={this.state.played}
                            />
                        </div>
                    </div>
                </Card>
                <div className="card-player-video">
                    <ReactPlayer
                        url={this.state.url}
                        playing={this.state.playing}
                        volume={this.state.volume / 100}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        onEnded={this.onEnded}
                        onProgress={this.onProgress}
                        onDuration={this.onDuration}
                        youtubeConfig={{
                            playerVars: {
                                cc_load_policy: 0,
                                controls: 0,
                                disablekb: 0,
                                modestbranding: 0,
                                rel: 0,
                                showinfo: 0
                            }
                        }}
                    />
                </div>
            </div>
        )

    }

}