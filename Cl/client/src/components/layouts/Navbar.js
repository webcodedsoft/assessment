import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <header id="header-container" className="fullwidth">
                <div id="header">
                    <div className="container">
                        <div className="left-side">
                            <div className="clearfix" />
                        </div>

                        <div className="right-side">
                            <Link to="/" className="margin-right-20"><b>Home</b></Link>
                            <Link to="/documentation"><b>Documentation</b></Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
