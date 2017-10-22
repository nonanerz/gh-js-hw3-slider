import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


class Slider extends Component {
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
            headers: {
                'X-Auth-Token': '002e418477ba4374816b4b06fbef1b48'
            }
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
                        <div key={key} className="content">
                            <p className="team-name">{name}</p>
                            <img alt={name} className="image" src={img}/>
                        </div>
                    )
                })}
            </Carousel>
        )
    }
}

export default Slider;