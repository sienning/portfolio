import React, { Component } from 'react';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <Container className="footer" textAlign="center" >
                <Header className="logo-site header-name">Léna ENG</Header>
                <br />
                <List bulleted horizontal link>
                    <List.Item as='a' href="https://www.instagram.com/sienning/" target="_blank"><Icon name="instagram" /></List.Item>
                    <List.Item as='a' href="https://www.facebook.com/lena.englena.10" target="_blank"><Icon name="facebook f" /></List.Item>
                    <List.Item as='a' href="https://www.linkedin.com/in/lena-eng/" target="_blank"><Icon name="linkedin" /></List.Item>
                    <List.Item as='a' href="https://github.com/sienning/" target="_blank"><Icon name="github" /></List.Item>
                </List>
                <br />
                <br />
                <Header.Subheader>© 2021 • LÉNA ENG • ALL RIGHTS RESERVED</Header.Subheader>
            </Container>
        );
    }
}

export default Footer;