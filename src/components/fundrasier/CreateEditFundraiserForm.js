import { React, Component } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Axios from "axios";
import FundraiserStatus from "./FundraiserStatus";

export default class CreateEditFundraiserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formField: {
                title: '',
                description: '',
                goalAmount: 0,
                image: null,
                status: 'Draft', 
                activeDays: 0
            },
            formErrors: {
                title: '',
                description: '',
                goalAmount: '',
                image: '',
                activeDays: 0
            },
        }
    }

    componentDidMount() {
       
        const action = this.props.action;
        const fundraiserId = this.props.fundraiserId;
        console.log("This is from component did mount, action is :" + action);

        if ( action === 'update' ) {

            const getFundraiserDetailsURI = `https://tutorial4-api.herokuapp.com/api/fundraiser/${fundraiserId}`;
            // Axios.get(getFundraiserDetailsURI)
            // .then((response) => {
            //     if (response.status === 200 && response.data.status === true) {
                    // const fundraiser = response.data.data;
                    const fundraiser = {
                        eventId: 1001,
                        title: 'Donation drive for ABC School children',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Amet est placerat in egestas erat imperdiet sed euismod nisi. \nQuisque id diam vel quam elementum pulvinar. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Pulvinar pellentesque habitant morbi tristique. Habitant morbi tristique senectus et netus et malesuada fames. Odio ut sem nulla pharetra diam sit amet. Vestibulum sed arcu non odio euismod lacinia at. Nec ullamcorper sit amet risus nullam eget. Non curabitur gravida arcu ac tortor dignissim convallis. Mauris vitae ultricies leo integer malesuada nunc vel. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames ac. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Quisque id diam vel quam elementum.',
                        createdBy: 'Smile Foundation',
                        daysRemaining: 20,
                        image: '',
                        goalAmount: 10000,
                        amountRaised: '2510',
                        currency: 'CAD',
                        donors: '36',
                        status: 'Active'
                    }
                    this.setState({formField: {
                        title: fundraiser.title,
                        description: fundraiser.description,
                        goalAmount: fundraiser.goalAmount,
                        image: fundraiser.image,
                        status: fundraiser.status,
                    }});
            //     }
            // })
            // .catch((error) => {
            //     console.log('Error in getting details of the fundraiser :' + error);           
            // });
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

    validateForm = () => {
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

        if ( !form.image || form.image === '') {
            errors['image'] = 'Please upload an image for this fundraiser';
        }

        if ( form.activeDays <= 0) {
            errors['activeDays'] = 'Please set the number of days for which this fundraiser should be active';
        } 
        else if ( form.activeDays > 180) {
            errors['activeDays'] = 'Fundraiser can be created for a maximum period of 180 days';
        }

        this.setState({
            formErrors : errors,
        });

        return errors;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.validateForm();
        const numberOfErrors = Object.values(this.state.formErrors)
                                    .filter(value => value != null || value !== '').length;
        if (numberOfErrors === 0 ) {
            console.log("The form is valid")
            window.alert("Make a POST API request");
        }
    }

    render() {
        const defaultCurrency = 'CAD';
        const maxGoalAmount = 1000000;
        const maxDescriptionLength = 1000;
        // const formField = this.state.formField;
        // const formError = this.state.formErrors;
        const action = this.props.action;
        
        const errorLabelStyle = {
            width: '100%',
            marginTop: '0.25rem',
            fontSize: '0.875em',
            color: '#dc3545'
        }
        // console.log("The action from class form component is " + this.props.action);

        return (
            <>
                <Container className='mb-5' id="create-update-form">
                    <Row>
                        <Col xs={0} md={3}></Col>
                        <Col xs={12} md={6}>
                            <Row className='mb-3'>
                                <Col style={{marginTop:'1rem'}}>
                                    <h4 id='create-update-form-label' >
                                        <strong>
                                            {action === 'create' && "Create Fundraiser"}
                                            {action === 'update' && "Update Fundraiser"}
                                        </strong>
                                    </h4>
                                </Col>
                                <Col style={{textAlign:"right", marginTop:'1rem', fontStyle: 'italic'}}>
                                    <FundraiserStatus statusValue={this.state.formField.status} />
                                </Col>
                            </Row>
                            <Form noValidate
                                onSubmit={this.handleSubmit}>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom01">
                                        <Form.Label><strong>Title</strong></Form.Label>
                                        <Form.Control
                                            required
                                            name="title"
                                            type="text"
                                            placeholder="Title for the fundraiser"
                                            value={this.state.formField.title}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!this.state.formErrors.title }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom02">
                                        <Form.Label>
                                            <strong>Description</strong>&nbsp; 
                                            <small>(Describe the purpose, beneficiaries, and other information about the fundraiser)</small>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            name="description"
                                            placeholder="Describe the purpose, beneficiaries, and other information about the fundraiser"
                                            rows="7"
                                            value={this.state.formField.description}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!this.state.formErrors.description }
                                        />
                                        
                                        <div style={{textAlign:'right'}}>
                                            <span>
                                                <small>
                                                    <strong>
                                                        {maxDescriptionLength - this.state.formField.description.length} 
                                                    </strong>
                                                    &nbsp;characters remaining
                                                </small>
                                            </span>
                                        </div>
                                        
                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.description}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom03">
                                        <Form.Label>
                                            <strong>Amount to raise:</strong> {defaultCurrency} {this.state.formField.goalAmount}
                                        </Form.Label>
                                        
                                        {(action === 'create' 
                                            || (action === 'update' && this.state.formField.status === 'Pending Admin Approval')) &&
                                            <>
                                                <input
                                                    required
                                                    type="range"
                                                    name="goalAmount"
                                                    max={maxGoalAmount}
                                                    step="1000"
                                                    value={this.state.formField.goalAmount}
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
                                            </>
                                        }  

                                        {this.state.formErrors.goalAmount && 
                                            <div style={errorLabelStyle}>
                                                {this.state.formErrors.goalAmount}
                                            </div>
                                        }
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group className="position-relative mb-3">
                                        <Form.Label>
                                            {(action === 'create' 
                                            || (action === 'update' && this.state.formField.status === 'Pending Admin Approval')) &&
                                            <strong>For how many days do you want this fundraiser to be active?</strong>}
                                            
                                            {(action === 'update' && this.state.formField.status === 'Pending Admin Approval') &&
                                            <strong>Duration of the fundraiser</strong>}
                                            
                                            {(action === 'update' && this.state.formField.status === 'Active') &&
                                            <strong>End Date</strong>}
                                        </Form.Label>
                                        {console.log(this.state.formField.status === 'Active')}
                                        <Form.Control
                                            type="number"
                                            required
                                            name="activeDays"
                                            step="1" 
                                            min="0" 
                                            max="180"
                                            readOnly={this.state.formField.status === 'Active'}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!this.state.formErrors.activeDays }
                                            />
                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.activeDays}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Form.Group className="position-relative mb-3">
                                        <Form.Label>
                                            <strong>Upload an image that relates to this fundraiser</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="file"
                                            required
                                            name="image"
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!this.state.formErrors.image }
                                            />
                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.image}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3 text-center'>
                                    <Col as={Col} md="6" xs="6">
                                        <Button type="submit">
                                            {action === 'create' && "Create"}
                                            {action === 'update' && "Update"}
                                        </Button>
                                    </Col>
                                    <Col as={Col} md="6" xs="6">
                                        <Button type="button" href="/ngo/fundraiser">Cancel</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col xs={0} md={3}></Col>
                    </Row>
                </Container>
            </>


// https://react-bootstrap.netlify.app/forms/validation/#tooltips
        );
    }
}
