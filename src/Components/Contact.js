import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
      <h1>Contact Us!</h1>
      <Form className="contact-form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="text" id="text" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="subject">Subject</Label>
          <Input type="text" name="subject" id="subject" placeholder="Subject" />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input type="textarea" name="text" id="text" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check here to recieve email updates
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      </div>
    );
  }
}

export default Contact;