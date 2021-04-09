import React, { Component } from 'react';
import { Container, Form, Header, Message } from 'semantic-ui-react';
import '../App.css';
import axios from 'axios';

class Contact extends Component {
    state = {
        isSent: false,
        isLoading: false,
        isError: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT")
        const last_name = e.target.last_name.value;
        const first_name = e.target.first_name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        console.log(last_name + " " + first_name);
        console.log(email + " : " + message);

        this.sendMail(last_name, first_name, email, message);
    }

    sendMail = async (last_name, first_name, email, message) => {
        console.log("SENDMAIL");
        this.setState({ isLoading: true, isSent: false, isError: false });
        await axios.post('http://localhost:5000/contact/email', {
            last_name: last_name,
            first_name: first_name,
            email: email,
            message: message
        })
            .then((response) => {
                console.log(response);
                this.setState({ isLoading: false });
                this.setState({ isSent: true });
                document.getElementById("form-contact").reset();
            }).catch(error => {
                this.setState({ isError: true, isLoading: false, isSent: false });
                console.error(error);
            });
    }

    render() {
        const {
            isSent,
            isLoading,
            isError,
        } = this.state;
        return (
            <Container className="contact-page" >
                <Header className="header-general header-job" >Contact</Header>
                <p >Feel free to contact me anytime.</p>
                {
                    isSent ?
                        <Message
                            success
                            header='Message sent'
                            content="I will reply as soon as possible."
                        /> : null
                }
                {
                    isError ?
                        <Message
                            error
                            header='Error'
                            content='There must be something wrong, somewhere ...'
                        /> : null
                }
                <div className="contact-body" >
                    <Form id="form-contact" onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input name="first_name" fluid label='First name' placeholder='First name' />
                            <Form.Input name="last_name" fluid label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Input name="email" required label='Mail' type='email' />
                        <Form.TextArea name="message" required label='Message' placeholder='Write your message here...' style={{ minHeight: 200 }} />
                        {
                            isLoading ?
                                <Form.Button
                                    loading
                                    floated='right'
                                    disabled
                                >
                                    <a
                                        className="send-button"
                                        floated='right'
                                        type='button'
                                        style={{ color: 'transparent !important' }}
                                    >
                                        SEND
                                    </a>
                                </Form.Button> :
                                <Form.Button 
                                    // data-sitekey="reCAPTCHA_site_key"
                                    // data-callback='onSubmit'
                                    // data-action='submit'
                                    // className="g-recaptcha"
                                    floated="right">
                                    <a
                                        className="send-button"
                                        floated='right'
                                        type='button'
                                    >
                                        SEND
                                    </a>
                                </Form.Button>

                        }
                    </Form>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </Container>
        );
    }
}

export default Contact;