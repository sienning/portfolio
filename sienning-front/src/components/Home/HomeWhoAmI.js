import React, { Component } from 'react';
import { Header, Container, Image, Grid } from 'semantic-ui-react';
import '../../App.css';

class HomeWhoAmI extends Component {
    render() {
        return (
            <Container className="home-whoami">
                <Header textAlign="center" className="header-general header-job">Who Am I ?</Header>
                <div>
                    <Grid columns={2} stackable>
                        <Grid.Column width={4}>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, lectus id facilisis fermentum, lacus nunc fermentum quam, in vulputate sem est eget sapien. Integer tempus congue lorem, pharetra egestas dui faucibus at. Nam eleifend lacinia tincidunt. Donec vehicula quam eu ligula fringilla consequat. Ut lobortis, mauris nec aliquam varius, ante lacus hendrerit lorem, at tristique risus nisi quis urna. Phasellus hendrerit vehicula tincidunt. In ultrices sem vitae hendrerit eleifend. Etiam pretium elit lectus, sed posuere nibh dapibus nec. Fusce malesuada lectus at volutpat pellentesque. Donec ut massa a neque mattis rutrum. Cras malesuada nisl quis sapien lobortis, maximus finibus ante rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique blandit nisi. In cursus odio quis eros vestibulum viverra. Donec vel turpis elit. Aenean non nulla feugiat, laoreet risus at, laoreet neque.</p>
                        </Grid.Column>

                    </Grid>
                </div>
                <div style={{ float: "right", marginTop: '20px' }}>
                    <a className="see-more" href="/about" >See more </a>
                </div>
            </Container>
        );
    }
}

export default HomeWhoAmI;