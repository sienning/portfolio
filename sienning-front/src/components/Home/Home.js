import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';
import '../../App.css';
import HomeCreation from './HomeCreations';
import HomeWhoAmI from './HomeWhoAmI';
import HomeWork from './HomeWork';


class Home extends Component {
    componentDidMount() {
        document.getElementById("myNav").style.display = "none";
    }

    render() {
        return (
            <div className="home-page">
                <div className="home" >
                    <Header textAlign="center" className="header-general header-name" as="h1" > Léna ENG </Header>
                    <Header textAlign="center" className="header-general header-job" as="h1" > Web Developper </Header>

                    <div className="more">
                        <a href="#home-work" className="more-link header-general header-job" >
                            <Header textAlign="center" as='h1' >MORE</Header>
                            <p className="downbtn" ><Icon name="angle down"></Icon></p>
                        </a>
                    </div>
                </div>
                <HomeWork />
                <HomeCreation />
                <HomeWhoAmI />
            </div>
        );
    }
}

export default Home;