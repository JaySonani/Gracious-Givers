import { React, Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class CreateFundraiser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formField: {
                title: '',
                description: '',
                goalAmount: 0,
                image: null
            },
            formErrors: {
                title: '',
                description: '',
                goalAmount: '',
                image: ''
            },
            validated: false
        }
    }

    handleValueChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const fields = { ...this.state.formField };
        fields[field] = value;
        this.setState({ formField: fields })

        // Remove error on the field
        if ( !!this.state.formErrors[field] ) {
            this.setState({
                formErrors : {
                    ...this.state.formErrors,
                    [field]: null
                }
            })
        } 
    }

    findFormErrors = () => {
        console.log("Validating the form");
        const form = this.state.formField;
        let errors = { ...this.state.formErrors };

        if ( !form.title || form.title === '' ) {
            errors['title'] = 'Title cannot be blank';
        }

        if ( !form.description || form.description === '' ) {
            errors['description'] = 'Description cannot be blank';
        }

        if ( form.goalAmount <= 0 ) {
            errors['goalAmount'] = 'Please set the amount to raise for this fundraiser';
        }

        if ( form.image === null) {
            errors['image'] = 'Please upload an image for this fundraiser';
        }

        this.setState({
            formErrors : errors,
        });

        return errors;
    }

    handleSubmit = (event) => {
        // console.log("Inside submit function");
        event.preventDefault();
        const numberOfErrors = Object.values(this.state.formErrors)
                                    .filter(value => value != null || value !== '').length;
        if (numberOfErrors > 0 ) {
            // window.alert("Rectify form errors")
        }
        else {
            // window.alert("Make a POST API request");
        }
    }

    render() {
        const defaultCurrency = 'CAD';
        const maxGoalAmount = 1000000;
        const maxDescriptionLength = 1000;
        const formField = this.state.formField;
        const formError = this.state.formErrors;
        const errorLabelStyle = {
            width: '100%',
            marginTop: '0.25rem',
            fontSize: '0.875em',
            color: '#dc3545'
        }
        return (
            <>
                <Header />
                <Container className='mb-5' id="create-update-form">
                    <Row>
                        <Col xs={0} md={3}></Col>
                        <Col xs={12} md={6}>
                            <Row className='mb-3'>
                                <Col>
                                    <h4 id='create-update-form-label'>
                                        Create Fundraiser
                                    </h4>
                                </Col>
                            </Row>
                            <Form noValidate
                            // validated={this.state.validated}
                            onSubmit={this.handleSubmit}>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom01">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            required
                                            name="title"
                                            type="text"
                                            placeholder="Title for the fundraiser"
                                            value={formField.title}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!formError.title }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formError.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom02">
                                        <Form.Label>
                                            Description (Describe the purpose, beneficiaries, and other information about the fundraiser)
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            name="description"
                                            placeholder="Describe the purpose, beneficiaries, and other information about the fundraiser"
                                            rows="7"
                                            value={formField.description}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!formError.description }
                                        />
                                        
                                        <Form.Label>
                                                {maxDescriptionLength - this.state.formField.description.length} characters remaining
                                        </Form.Label>
                                        
                                        <Form.Control.Feedback type="invalid">
                                            {formError.description}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom03">
                                        <Form.Label>Amount to raise: {defaultCurrency} {this.state.formField.goalAmount}</Form.Label>
                                        
                                        <input
                                            required
                                            type="range"
                                            name="goalAmount"
                                            max={maxGoalAmount}
                                            step="1000"
                                            value={formField.goalAmount}
                                            onChange={this.handleValueChange}
                                            style={{width:'100%'}}
                                        />
                                           
                                        <Row>
                                            <Col>
                                                <Form.Label>
                                                    0 {defaultCurrency}
                                                </Form.Label>  
                                            </Col>
                                            <Col style={{textAlign:'right'}}>
                                                <Form.Label>
                                                    {maxGoalAmount} {defaultCurrency}
                                                </Form.Label>
                                            </Col>
                                        </Row>

                                        {formError.goalAmount && 
                                            <div style={errorLabelStyle}>
                                                {formError.goalAmount}
                                            </div>
                                        }
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group className="position-relative mb-3">
                                        <Form.Label>File</Form.Label>
                                        <Form.Control
                                            type="file"
                                            required
                                            name="image"
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!formError.image }
                                            />
                                        <Form.Control.Feedback type="invalid" tooltip>
                                            {formError.image}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3 text-center'>
                                    <Col as={Col} md="6" xs="6">
                                        <Button type="submit">Create</Button>
                                    </Col>
                                    <Col as={Col} md="6" xs="6">
                                        <Button type="button">Cancel</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col xs={0} md={3}></Col>
                    </Row>
                </Container>
                <Footer />
            </>


// https://react-bootstrap.netlify.app/forms/validation/#tooltips
        );
    }
}