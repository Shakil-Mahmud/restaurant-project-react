import React,{Component} from 'react'
import {Form, FormGroup, Button, Input, Label, Col} from 'reactstrap';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            tel_num: '',
            agree: false,
            contact_type: 'Telno.',
            message: ''
        }
    }

    handleInput = event =>{
        const name = event.target.name;
        const value = event.target.type === 'checkbox'? event.target.checked : event.target.value;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event =>{
        console.log(this.state)
        event.preventDefault();
    }

    render(){
        document.title = 'Contact';
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Contact with us</h1>
                    </div>
                    <div className='col-12'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name:</Label>
                                <Col md={10}>
                                    <Input type="text" name='firstname'
                                    onChange={this.handleInput} value={this.state.firstname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2} >Last Name:</Label>
                                <Col md={10}>
                                    <Input type='text' name='lastname' 
                                    onChange={this.handleInput} value={this.state.lastname} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='tel_num' md={2} >Telephone no. :</Label>
                                <Col md={10}>
                                    <Input type='text' name='tel_num' 
                                    onChange={this.handleInput} value={this.state.tel_num} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email:</Label>
                                <Col md={10}>
                                    <Input type="text" name='email' 
                                    onChange={this.handleInput} value={this.state.email} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 1 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" 
                                            onChange={this.handleInput}checked={this.state.agree} /> 
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 4, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        onChange={this.handleInput} value={this.state.contactType}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2} htmlFor='message'>Message:</Label>
                                <Col md={10}>
                                    <Input type='textarea' name='message' 
                                    onChange={this.handleInput} value={this.state.message} rows="6" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset:2}}>
                                    <Button type='submit' color='primary'>Send your feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;