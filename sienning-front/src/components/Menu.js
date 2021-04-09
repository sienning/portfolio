import React, { Component } from 'react';
import '../App.css';

class Menu extends Component {
    closeNav = () => {
        document.getElementById("myNav").style.display = "none";
    }

    render() {
        return (
            <div id="myNav" className="overlay">
                <a type="button" className="closebtn" onClick={this.closeNav}>&times;</a>
                <div className="overlay-content">
                    <a href="/">HOME</a>
                    <a href="/work">WORK</a>
                    <a href="/creations">CREATIONS</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                </div>
            </div>
        );
    }
}

export default Menu;