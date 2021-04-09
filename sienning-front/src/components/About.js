import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';


class About extends Component {
    render() {
        return (
            <div className="about-page" style={{ paddingTop: "50px", marginBottom: 50 }} >
                <Container>
                    <Header className="header-general header-job" >About</Header>
                </Container>
                <Carousel>
                    <Carousel.Item style={{ height: "100%", paddingTop: "17%" }} interval={30000}>
                        <Container textAlign="center">
                            <Tilt
                                perspective={500}
                                tiltReverse={false}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <Header className="header-general"><span className="header-name">My name is</span> <span className="header-job">Léna ENG</span></Header>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={true}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1">I am a <b>21</b> years old french web developer,</p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-2">currently student in the <a href="https://www.iim.fr/" target="_blank">Institute of the Internet and Multimedia (IIM)</a></p>
                                </div>
                            </Tilt>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: "100%", paddingTop: "17%" }} interval={20000}>
                        <Container textAlign="center">
                            <Tilt
                                perspective={500}
                                tiltReverse={true}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1" >I would describe myself as</p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1"><span>Creative</span>, <span className="header-job">patient</span>, <span>ambitious</span></p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-2">I am passionate about new technologies, art, travels and music</p>
                                </div>
                            </Tilt>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "100%", paddingTop: "10%" }} interval={30000}>
                        <Container textAlign="center">
                            <Tilt
                                perspective={500}
                                tiltReverse={true}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <Header className="header-general" ><span className=" header-name">My</span> <span className="header-job" >skills</span></Header>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-2"><span className="header-job">MERN Stack</span> (MongoDB • MySQL, Express, <b>ReactJS</b>, NodeJS)</p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={400}
                                scale={1.02}
                                tiltReverse={true}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1">Java, Python, C <b>languages</b></p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={300}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1"><b>Adobe</b> Photoshop, Illustrator, XD</p>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={300}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-1">Office <b>365</b> Suite</p>
                                </div>
                            </Tilt>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "100%", paddingTop: "20%" }} interval={30000}>
                        <Container textAlign="center">
                            <Tilt
                                perspective={500}
                                tiltReverse={true}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <Header className="header-general" ><span className=" header-name">I can </span> <span className="header-job" >speak</span></Header>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <p className="about-content-2"><span className="header-job">French</span>, <b>English</b> and <span style={{ fontSize: "20px" }} >(have some notions of)</span> German</p>
                                </div>
                            </Tilt>
                        </Container>
                    </Carousel.Item>

                    <Carousel.Item style={{ height: "100%", paddingTop: "17%" }} interval={30000}>
                        <Container textAlign="center">
                            <Tilt
                                perspective={500}
                                tiltReverse={true}
                                scale={1.02}
                            >
                                <div className="inner-element">
                                    <Header className=" header-job" style={{ fontSize: "40px" }} >Want to know more about me ?</Header>
                                </div>
                            </Tilt>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={false}
                            >
                                <div className="inner-element">
                                    <Header className="header-general header-name">My social medias</Header>
                                </div>
                            </Tilt>
                            <Grid className="social" columns={4} centered stackable textAlign="center">
                                <Grid.Column width={3} >
                                    <a href="https://www.instagram.com/sienning/" target="_blank"><Icon name="instagram" /></a>
                                </Grid.Column>
                                <Grid.Column>
                                    <a href="https://www.facebook.com/lena.englena.10" target="_blank"><Icon name="facebook f" /></a>
                                </Grid.Column>
                                <Grid.Column>
                                    <a href="https://www.linkedin.com/in/lena-eng/" target="_blank"><Icon name="linkedin" /></a>
                                </Grid.Column>
                                <Grid.Column>
                                    <a href="https://github.com/sienning/" target="_blank"><Icon name="github" /></a>
                                </Grid.Column>
                            </Grid>
                            <Tilt
                                perspective={500}
                                scale={1.02}
                                tiltReverse={true}
                            >
                                <div className="inner-element">
                                    <Header className="header-general header-name">My <a href="./CV-LENA-ENG.pdf" target="_blank" >resume</a></Header>
                                </div>
                            </Tilt>
                        </Container>
                    </Carousel.Item>
                </Carousel>
                <br />
                <br />
                <br />
                <br />
            </div >
        );
    }
}

export default About;