 
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            city : "",
            spot : "",
            date : "",
            swimmingStart : "",
            swimmingEnd : "",
            swimmingDuration : "",
            swimmers : "",
            watermen : "",
            fishingBoats : "",
            leisureBoats : "",
            sailBoats : ""
        };

        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        alert('Merci de votre reponse')
        event.preventDefault();
    }
    hangleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]:value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Ville:
                    <input
                        name="city"
                        type="text"
                        value={this.state.city}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Spot:
                    <input
                        name="spot"
                        type="text"
                        value={this.state.spot}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        name="date"
                        type="date"
                        value={this.state.date}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br />
                <label>
                    Heure de debut de beignade:
                    <input
                        name="swimmingStart"
                        type="time"
                        value={this.state.swimmingStart}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br />
                <label>
                    Heure de fin de beignade:
                    <input
                        name="swimmingEnd"
                        type="time"
                        value={this.state.swimmingEnd}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Durée de beignade:
                    <input
                        name="swimmingDuration"
                        type="time"
                        value={this.state.swimmingDuration}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Nombre de baigneurs:
                    <input
                        name="swimmers"
                        type="number"
                        value={this.state.swimmers}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Nombre de pratiquants d'activité nautiques:
                    <input
                        name="watermen"
                        type="number"
                        value={this.state.watermen}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Nombre de bateaux de pêche:
                    <input
                        name="fishingBoats"
                        type="number"
                        value={this.state.fishingBoats}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Nombre de bateaux de loisir:
                    <input
                        name="leisureBoats"
                        type="number"
                        value={this.state.leisureBoats}
                        onChange={() => this.handleInputChange()} />
                </label>
                <br/>
                <label>
                    Nombre de bateaux à voile:
                    <input
                        name="sailBoats"
                        type="number"
                        value={this.state.sailBoats}
                        onChange={() => this.handleInputChange()} />
                </label>

                <input type="submit" value="Send"/>
            </form>
        )
    }
}

export default Form
