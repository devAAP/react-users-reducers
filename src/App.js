import React, { Component} from 'react';
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
          gen: 12
        },
        {
          name: 'Ricardo Brandt',
          email: 'ricardo@gmail.com',
          gen: 1 
        },
        { 
          name: 'Adwoa Comfort',
          email: 'adwoa@gmail.com',
          gen: 15
        }
      ],
    }
  }

addNewUser=(user) => {
  this.setState({
    users: [...this.state.users, user]
  })
}
  render(){
   
    return (
      <>
      <Container fluid style={{marginTop: '2rem'}}>
        <Row>
      <Col md='4'>
        <AddUserForm addUser = {this.addNewUser}/>
      </Col>
      <Col>
      <Users usersData={this.state.users} />
      </Col>
        </Row>
      </Container>
        
      </>
    );
  }
  }
  

export default App;
