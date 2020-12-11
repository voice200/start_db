import React, {Component} from 'react';
import Row from "../row";
import {PlanetList} from "../sw-component";
import PlanetDetails from "../sw-component/planet-details";

export default class PlanetsPage extends Component{
    state = {
        selectedItem: null
    };

    onItemSelected = (id) =>{
        this.setState({
            selectedItem: id
        })
    }

    render() {
        const {selectedItem} = this.state;
        return (
            <Row
                leftItem={<PlanetList onItemSelected={this.onItemSelected}/>}
                rightItem={<PlanetDetails itemId ={selectedItem}/>}
            />
        );
    }
}