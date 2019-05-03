import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTrack, removeTrack } from "../../store/PlayList/actions";
import { selectTrack, removePlayingTrack } from '../../store/PlayTrack/actions';
import PlayerListItem from "./PlayerListItem";
import PlayerAddTrackForm from "./PlayerAddTrackForm";
import Player from './Player'

class PlayerContainer extends Component {

    render() {

        const { playlist } = this.props;

        return(
            <div>
                <div className="player-container">
                    <PlayerAddTrackForm addTrack={this.props.addTrack} />
                    <div className="player-container-list">
                        { playlist.map((track, key) => {
                            return <PlayerListItem
                                key={key}
                                track={track}
                                removeTrack={this.props.removeTrack}
                                selectTrack={this.props.selectTrack}
                                playingTrack={this.props.playingTrack}
                            />
                        }) }
                    </div>
                    {Object.keys(this.props.playingTrack).length ? <Player playingTrack={this.props.playingTrack} removePlayingTrack={this.props.removePlayingTrack} /> : null}

                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {

    return {
        playlist: state.playListReducer,
        playingTrack: state.playTrackReducer
    }

};

const mapDispatchToProps = {

    addTrack: addTrack,
    removeTrack: removeTrack,
    selectTrack: selectTrack,
    removePlayingTrack: removePlayingTrack

};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);