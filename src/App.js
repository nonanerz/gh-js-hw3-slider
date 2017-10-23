import React, { Component } from 'react';
import './App.css';
import Carousel from 'nuka-carousel';


class App extends Component {

    constructor(props) {
        super(props);
        this.request(456);
        this.state = {
            value: 456,
            teams: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    request(id){
        const FETCH_URL = 'http://api.football-data.org/v1/competitions/' + id +'/teams';

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

    handleChange(event) {
        this.setState({value: event.target.value});
        this.request(this.state.value);
    }

    render() {
        return (
            <div>
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
                <form>
                    <label>
                        Pick a League:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="456">Serie A 2017/18</option>
                            <option value="464">Champions League</option>
                            <option value="457">Primeira Liga</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

export default App;