import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import '../App.css';

class Work extends Component {
    render() {
        return (
            <Container style={{ paddingTop: "50px" }} >
                <Header className="header-general header-job" >Work</Header>
            </Container>
        );
    }
}

export default Work;