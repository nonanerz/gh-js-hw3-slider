import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


class Image extends Component {
    constructor(props) {
        super(props);
        this.request();
        this.state = {
            teams: [],
        }
    }

    request(){
        const FETCH_URL = `http://api.football-data.org/v1/competitions/445/teams`;

        fetch('https://cors-anywhere.herokuapp.com/'+ FETCH_URL, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(json => {
                const teams = json.teams;
                this.setState({ teams });
            });
    }


    render() {
        return (
            <Carousel>
                { this.state.teams.map((team, key) => {
                    const img = team.crestUrl;
                    const name = team.name;
                    return (
                            <img className="image" key={key} src={img}/>
                    )
                })}
            </Carousel>
        )
    }
}

export default Image;