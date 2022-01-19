import React from 'react';
import {Component} from 'react';
import {Button, FormGroup, Label, Input, Col } from 'reactstrap';
import { Row } from "reactstrap";
import { Control, LocalForm, Errors, Form } from 'react-redux-form';
import Select from 'react-select';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export const animalOptions = [
    { value: "1", label: "Bear" },
    { value: "2", label: "Tiger" },
    { value: "3", label: "Snake" },
    { value: "4", label: "Donkey" }
];

//changed to component to have states
class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showTiger:false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnimal = this.handleAnimal.bind(this);
    }

    //handle the tiger
    handleAnimal(values)
    {
        // console.log(values);
        if (values.find(x => x.label ==='Tiger'))
        {
            this.setState({ showTiger: true });
        }
        else
        {
            this.setState({ showTiger: false });
        }
    }

    //tell user
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));   //pop-up
        // event.preventDefault();
    }


    render(){
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Contact Form</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>
                                    Email
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                                  placeholder="Enter your email address"
                                                  className="form-control"
                                                  validators={{
                                                      required,validEmail
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group ">
                                <Label htmlFor="password" md={2}>
                                    Password
                                </Label>
                                <Col md={10}>
                                    <Control.text model=".password"
                                                  id="email"
                                                  name="email"
                                                  type={'password'}
                                                  placeholder="Enter your password"
                                                  className="form-control"
                                                  validators={{
                                                      required, minLength: minLength(8)
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 8 characters',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="colour" md={2}>
                                    Colour
                                </Label>
                                <Col md={10}>
                                    <Control.select
                                        model=".colour"
                                        id="colour"
                                        name="colour"
                                        className="form-control"
                                    >
                                        <option value="1" selected="selected">Blue</option>
                                        <option value="2">Green</option>
                                        <option value="3">Red</option>
                                        <option value="4">Black</option>
                                        <option value="5">Brown</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="animal" md={2}>
                                    Animal
                                </Label>
                                <Col md={10}>
                                    <Select
                                        defaultValue={[animalOptions[2], animalOptions[3]]}
                                        isMulti
                                        name="animal"
                                        options={animalOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={(value) => this.handleAnimal(value)}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group" style={{display: (this.state.showTiger? "" :"none")}}>
                                <Label htmlFor="tiger" md={2}>Type of tiger</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".tiger"
                                        id="tiger"
                                        name="tiger"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            // still to have work out conditional
                                            // required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".tiger"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }


}

export default Contact;