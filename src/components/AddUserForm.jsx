import React, { useState} from 'react';  
import {Form, Button} from 'react-bootstrap';
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import {addUserAction} from "../actions/actions";

// the short way
// const AddUserForm = ()=> {
//   const dispatch = useDispatch();
// }
const AddUserForm = (props)=> {
  const [name, setName] = useState("");
  const [email, setEmail]= useState("");
  const [gen, setGen] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    }
    props.addUser(newUser);
    // dispatch(addUserAction)(newUser);
  }
  return (
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" onChange={(e)=>{
                setName(e.target.value)
              }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>
              
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Gen</Form.Label>
              <Form.Control type="number" placeholder="gen" name="gen" onChange={(e)=>{setGen(e.target.value)}} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
}
  // mapDispatchToProps
const sendActionAsProps = {
  addUser: addUserAction,
}
// export default class AddUserForm extends Component {
//     constructor(props){
//         super(props);
//         this.state= { 
//             name: '',
//             email: '', 
//             gen: ''
//         }
//     }

//     handleChange = (e) => {
//         e.preventDefault();
//         this.setState({
//         [e.target.name]: e.target.value,
//         });
//     };
//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.addUser(this.state);
//         this.setState({
//             name: '',
//             email: '', 
//             gen: '' 
//         });
//         console.log('formSubmitted:', this.state);
//     }
//     addNewUser = (user) => {
//         this.setState({
//             users: [...this.state.users, user]
//         })
//     }
//     render() {
//     return (
//         <Form onSubmit={this.handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
//         </Form.Group>
          
//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Gen</Form.Label>
//           <Form.Control type="number" placeholder="gen" name="gen" value={this.state.gen} onChange={this.handleChange} />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     );
    
//   }
// }

export default connect(null, sendActionAsProps)(AddUserForm);
