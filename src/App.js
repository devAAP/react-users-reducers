import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import './App.css';
import AddUserForm from './components/AddUserForm';


class App extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      users: [
        { 
          name: 'Ahmed zaky',
          email: 'ahmedzaky@gmail.com',
          gen: 12,
          id: "skiell9376",
        },
        {
          name: 'Ricardo Brandt',
          email: 'ricardo@gmail.com',
          gen: 1,
          id: "uis023ksq" , 
        },
        { 
          name: 'Adwoa Comfort',
          email: 'adwoa@gmail.com',
          gen: 15,
          id: "23789dkaiw",
        }
      ],
    }
  }

addNewUser=(user) => {
  user.id = Math.random().toString()
  this.setState({
    users: [...this.state.users, user]
  })
}

editUser = (id, updatedUser) => {
  this.setState({
    users: this.state.users.map(user =>user.id===id ? updatedUser : user)
    })
}

deleteUser=(id) => {
  let undeletedUsers = this.state.users.filter(user => user.id !== id)
  this.setState({
    users: undeletedUsers
  })
}
  render(){
   
    return (
      <>
      <Container fluid style={{marginTop: '2rem'}}>
        <Row>
      <Col md='4'>
        <h4>Add User</h4>
        <AddUserForm addUser = {this.addNewUser}/>
      </Col>
      <Col>
      <h4>All Codetrain Users</h4>
      <br/>
      <Users usersData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/>
      </Col>
        </Row>
      </Container>
        
      </>
    );
  }
  }
  

export default App;
