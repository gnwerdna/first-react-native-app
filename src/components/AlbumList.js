import React from 'react';
import { ScrollView } from 'react-native'
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
class AlbumList extends React.Component {
    state = {
        albums: []
    }
    
    componentDidMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({
              albums: response.data  
            }));
    }

    render() {
        const {albums} = this.state;
        return(
            <ScrollView>
                {albums.map(album => <AlbumDetail key={album.title} album={album}/>)}
            </ScrollView>
        );
    }
}

export default AlbumList