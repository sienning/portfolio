import React, { Component } from 'react';
import Menu from './Menu';
import '../App.css';
import RouterPage from './RouterPage';

class Page extends Component {
    openNav = () => {
        document.getElementById("myNav").style.display = "block";
    }
    render() {
        return (
            <div className="page" style={{ backgroundImage: "url('/img/background-1.png')", height: "100%" }}>
                <span style={{ cursor: "pointer", float: "right", margin: "20px" }} onClick={this.openNav}><img alt="hamburger" style={{ width: "40px" }} className="hamburger-svg" src="/img/hamburger-3.svg"></img></span>
                <RouterPage/>
            </div>
        )
    }
}

export default Page;