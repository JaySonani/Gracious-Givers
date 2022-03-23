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
                activeDays: 0,
                cause: '',
            },
            formErrors: {
                title: '',
                description: '',
                goalAmount: '',
                image: '',
                activeDays: '',
                cause: '',
            },
            defaultCurrency: 'CAD'
        }
    }

    componentDidMount() {
       
        const action = this.props.action;
        const fundraiserId = this.props.fundraiserId;

        if ( action === 'update' ) {

            const getFundraiserDetailsURI = `http://localhost:5000/fundraiser/${fundraiserId}`;
            console.log("The getFundraiserDetailsURI is " + getFundraiserDetailsURI);
            Axios.get(getFundraiserDetailsURI)
            .then((response) => {
                // if (response.status === 200 && response.data.status === true) {
                if (response.status === 200) {
                    const fundraiser = response.data;
                    console.log("The fetched fundraiser is :" + fundraiser);
                    console.log(fundraiser.activeDays)
                    console.log(fundraiser.cause)
                    console.log(fundraiser.image)
                    this.setState({formField: fundraiser});
                }
            })
            .catch((error) => {
                console.log('Error in getting details of the fundraiser :' + error);           
            });
        }
        
    }

    handleValueChange = (event) => {
        console.log("The event is :" + event);
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
                    [field]: ""
                }
            })
        } 
    }

    handleFileUpload = (event) => {
        const uploadedImage = event.target.files[0];
        this.setState({ formField: { ...this.state.formField, image: uploadedImage } });

        this.setState({
            formErrors: {
                ...this.state.formErrors,
                image: ""
            }
        })
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
        else if ( form.image.size > 5000000 ) {
            errors['image'] = 'Fundraiser image size should be of maximum 5 MB';
        }

        if ( form.activeDays <= 0) {
            errors['activeDays'] = 'Please set the number of days for which this fundraiser should be active';
        } 
        else if ( form.activeDays > 180) {
            errors['activeDays'] = 'Fundraiser can be created for a maximum period of 180 days';
        }
        if ( !form.cause || form.cause === '' ) {
            errors['cause'] = 'Please select a cause for this fundraiser';
        }

        this.setState({
            formErrors : errors,
        });
        return errors;
    }

    handleSubmit = (event) => {
        const createFundraiserUrl = "http://localhost:5000/fundraiser/create";
        event.preventDefault();
        const errors = this.validateForm();
        const numberOfErrors = Object.values(errors)
                                    .filter(value => value.length > 0)
                                    .length;
        
        if (numberOfErrors === 0 && this.props.action === 'update') {
            const formField = this.state.formField;
            console.log("The form is valid, submitting request to backend");
            
            const formData = new FormData();
            formData.append("title", formField.title);
            formData.append("description", formField.description); 
            formData.append("goalAmount", formField.goalAmount);
            formData.append("currency", this.state.defaultCurrency);
            formData.append("image", formField.image);
            formData.append("status", formField.status);
            formData.append("cause", formField.cause);
            formData.append("activeDays", formField.activeDays);
            // This created by should be the NGO id and should come from local storage
            formData.append("ngoId", "1001");
            // formData.append("createdBy", "1001");

            Axios
                .post(createFundraiserUrl, formData)
                .then((response) => { 
                    if (response.status === 201) {
                        const fundraiser = response.data.data;
                        console.log("The created fundraiser is :", fundraiser);
                        this.props.onCreateSuccess(fundraiser);
                    }
                })
                .catch((error) => alert("Error in creating fundraiser"));
        }
        else 
        {
            console.log("Errors are present in the form")
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
                                            
                                            {(action === 'update' && this.state.formField.status !== 'Pending Admin Approval') &&
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
                                            value={this.state.formField.activeDays}
                                            readOnly={this.state.formField.status === 'Active'}
                                            onChange={this.handleValueChange}
                                            isInvalid={ !!this.state.formErrors.activeDays }
                                            />
                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.activeDays}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className='mb-3'>
                                    <Form.Group as={Col} xs="12" md="12" controlId="validationCustom03">
                                        { this.state.formField.status !== 'Active' && 
                                            <>
                                                <Form.Label>
                                                    <strong>Cause:</strong> 
                                                </Form.Label> 
                                                <Form.Select
                                                    name="cause"
                                                    isInvalid={ !!this.state.formErrors.cause }
                                                    onChange={this.handleValueChange}
                                                    value={this.state.formField.cause}
                                                >
                                                    <option value="">Please select a cause</option>
                                                    <option value="Education">Education</option>
                                                    <option value="Animal Welfare">Animal Welfare</option>
                                                    <option value="Environment">Environment</option>
                                                </Form.Select>
                                            </>
                                        }

                                        { 
                                            this.state.formField.status === 'Active' && 
                                            <Form.Label>
                                                <strong>Cause:</strong> <span>{this.state.formField.cause }</span> 
                                            </Form.Label> 
                                        }

                                        <Form.Control.Feedback type="invalid">
                                            {this.state.formErrors.cause}
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
                                            id="image"
                                            onChange={this.handleFileUpload}
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
        );
    }
}
