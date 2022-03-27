import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class EditUserForm extends Component {
  constructor(props){
      super(props);
      this.state= { 
          name: props.userInfo.name,
          email: props.userInfo.email, 
          gen: props.userInfo.gen,
          id: props.userInfo.id
          
      }
  }

  handleChange = (e) => {
      e.preventDefault();
      this.setState({
      [e.target.name]: e.target.value,
      });
  };
  handleSubmit = (e) => {
      e.preventDefault();
      // this.props.editUser(this.state.id, this.state)
      this.props.editUser(this.state.id, this.state);
      this.setState({
          name: '',
          email: '', 
          gen: '' 
      });
      
      this.props.closeModal();
  }
  // addNewUser = (user) => {
  //     this.setState({
  //         users: [...this.state.users, user]
  //     })
  // }
  // editUser = (id, updateduser) => {
  //   this.setState({
  //   users: this.state.users.map(user =>user.id===id ? updateduser : user)
  //   })
  // }
  render() {
  return (
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
      </Form.Group>
        
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="gen" name="gen" value={this.state.gen} onChange={this.handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  
}
}
export default EditUserForm;
