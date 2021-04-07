import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import '../App.css';

class Home extends Component {
    componentDidMount() {
        document.getElementById("myNav").style.display = "none";
    }
    render() {
        return (
            <div style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute" }} >
                <Header textAlign="center" className="header-general header-name" as="h1" > Léna ENG </Header>
                <Header textAlign="center" className="header-general header-job" as="h1" > Web Developper </Header>
                <a href="#">
                    <Header as='h5' >MORE</Header>
                </a>
            </div>
        );
    }
}

export default Home;