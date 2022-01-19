import React, {Component} from 'react';
import { Navbar,NavbarBrand,Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            isNavOpen: true,
            isModalOpen: false  //to control the form open
        };

        //bind the function to "this", no need to use function
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav()
    {
        this.setState({
            isNavOpen: !(this.state.isNavOpen)
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/">
                            <h1>Haowei App</h1>
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navBar>
                            <Nav navbar className="mr-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'>
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Send us your feedback</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;