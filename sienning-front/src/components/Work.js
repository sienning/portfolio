import React, { Component } from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';
import '../App.css';

class Work extends Component {
    render() {
        return (
            <Container style={{ height: "100%", paddingTop: "50px" }} >
                <Header className="header-general header-job" >Work</Header>
                <div className="work-body">
                    <Grid columns={2} stackable>
                        <Grid.Row stretched>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' />
                            </Grid.Column>
                            <Grid.Column>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus id facilisis fermentum, lacus nunc fermentum quam, in vulputate sem est eget sapien. Integer tempus congue lorem, pharetra egestas dui faucibus at. Nam eleifend lacinia tincidunt. Donec vehicula quam eu ligula fringilla consequat. Ut lobortis, mauris nec aliquam varius, ante lacus hendrerit lorem, at tristique risus nisi quis urna. Phasellus hendrerit vehicula tincidunt. In ultrices sem vitae hendrerit eleifend. Etiam pretium elit lectus, sed posuere nibh dapibus nec. Fusce malesuada lectus at volutpat pellentesque. Donec ut massa a neque mattis rutrum. Cras malesuada nisl quis sapien lobortis, maximus finibus ante rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique blandit nisi. In cursus odio quis eros vestibulum viverra. Donec vel turpis elit. Aenean non nulla feugiat, laoreet risus at, laoreet neque.</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus id facilisis fermentum, lacus nunc fermentum quam, in vulputate sem est eget sapien. Integer tempus congue lorem, pharetra egestas dui faucibus at. Nam eleifend lacinia tincidunt. Donec vehicula quam eu ligula fringilla consequat. Ut lobortis, mauris nec aliquam varius, ante lacus hendrerit lorem, at tristique risus nisi quis urna. Phasellus hendrerit vehicula tincidunt. In ultrices sem vitae hendrerit eleifend. Etiam pretium elit lectus, sed posuere nibh dapibus nec. Fusce malesuada lectus at volutpat pellentesque. Donec ut massa a neque mattis rutrum. Cras malesuada nisl quis sapien lobortis, maximus finibus ante rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique blandit nisi. In cursus odio quis eros vestibulum viverra. Donec vel turpis elit. Aenean non nulla feugiat, laoreet risus at, laoreet neque.</p>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                </div>
            </Container>
        );
    }
}

export default Work;