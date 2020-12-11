import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from "../../servises/swapi-services";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider} from '../swapi-service-context';
import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage} from "../pages";
import DummySwapiService from '../../servises/dummy-swapi-service';
import StarshipDetails from "../sw-component/starship-details";

export default class App extends Component {
    state = {
        selectedPerson: null,
        hasErrors: false,
        swapiService: new SwapiService(),
        isLoggedIn: false

    }
    componentDidCatch() {
        this.setState({hasError: true})
    }
    onLogin = () =>{
        this.setState({
            isLoggedIn: true
        });
    }
    onServiceChange= () =>{
        this.setState(({swapiService}) =>{
            const Service = swapiService instanceof SwapiService
                ? DummySwapiService
                : SwapiService;
            console.log(Service.name);

            return{
                swapiService: new Service()
            }
        } )
    }

    render() {
        const { isLoggedIn } = this.state

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                            <Switch>
                            <Route path="/" exact render={()=><h2>Welcome to star-DB</h2>}/>
                            <Route path="/people:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetsPage}/>
                            <Route path="/starships" exact component={StarshipsPage}/>
                            <Route path="/starships/:id"
                                   exact
                                   render={(match)=> {
                                       const {id} = match.match.params
                                      return <StarshipDetails itemId={id}/>
                                   }}/>
                            <Route
                                path="/login"
                                render={()=>(
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}
                                    />)}
                            />
                            <Route
                                path="/secret"
                                render={()=>(
                                    <SecretPage
                                        isLoggedIn={isLoggedIn}
                                    />)}
                            />
                                <Route render={() =><h2>Page not found</h2>}/>
                        </Switch>
                        </div>

                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }

};
