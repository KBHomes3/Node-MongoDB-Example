import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Jumbotron,
        Button, Modal, ModalHeader, ModalBody, Form, FormGroup,
        Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
            hidden: true
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    //Below is a function to handle Login but I am not using a backend yet.
    //So this function will just show an alert to verify that the input
    //is working properly
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    
    //The function below adds security to the password field.
    toggleShow() {
        this.setState({hidden: !this.state.hidden });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Find Food App</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/foodlogo.png" height="30" width="30" alt="FindFood Logo" /> FindFoodApp</NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto">
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" />Login
                            </Button>
                        </span>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type={this.state.hidden ? "password" : "text"} id="username" name="username"
                                    innerRef={input => this.password = input} />
                                    <Button onClick={this.toggleShow}>Show/Hide</Button>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
