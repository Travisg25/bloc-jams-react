import React, { Component } from 'react';
import albumData from './../data/albums';
import { Link } from 'react-router-dom';
import './../styles/library.css'

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: albumData,
        };
    }
    render() {
        return (
            <section className="library">
            {
              this.state.albums.map( (album, index) =>
                <Link className="album-link" to={`/album/${album.slug}`} key={index}>
                  <img src={album.albumCover} alt={album.title} />
                  <div className="album-name">{album.title}</div>
                  <div className="album-artist">{album.artist}</div>
                </Link>
              )
            }
            </section>
        );
    }
}

export default Library;
