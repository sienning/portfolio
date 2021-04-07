import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Work from './Work';
import Creations from './Creations';
import About from './About';
import Contact from './Contact';

class RouterPage extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/work"><Work/></Route>
                    <Route path="/creations"><Creations/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/contact"><Contact/></Route>
                </Switch>
            </Router>
        )
    }
}

export default RouterPage;