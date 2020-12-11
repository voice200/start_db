import React, {Component} from 'react';
import {PersonDetails, PersonList} from "../sw-component";
import Row from "../row";
import {withRouter} from 'react-router-dom';

const PeoplePage = ({history, match}) =>{

   const {id} = match.params;
    console.log('match', match)

    return (
        <Row
            leftItem={<PersonList onItemSelected={(id) => history.push(id)}/>}
            rightItem={<PersonDetails itemId ={id} />}
        />
    );
}
export default withRouter(PeoplePage);