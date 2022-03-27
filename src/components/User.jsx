import React from 'react';
import { Button, Modal} from 'react-bootstrap'
// import EditUserForm from './EditUserForm'
import {useDispatch} from "react-redux"
import {deleteUserAction, editUserAction} from "../actions/actions"



const User = (props) => {
  const user = props.user



  const dispatch = useDispatch()

  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] =React.useState(user.email);
  const [gen, setGen] = React.useState(user.gen);
  
  const handleClose = () => setShow(false);
  // const handleDelete =(e)=> {
  //   e.preventDefault();
  //   // console.log("item Deleted");
  //   props.deleteUser(props.userInfo.id);
  
  const handleSubmit = ()=> {
    let updatedUser = {
      id: user.id,
      name: name,
      email: email,
      gen: gen,
    }
    dispatch(editUserAction(user.id, updatedUser));
    
    handleClose();
  };

 return(
    <>
    <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <h3>{user.gen}</h3>
    <Button variant="primary" class="btn btn-primary"  onClick={()=>setShow(true)} type="edit">Edit</Button>
    <Button variant="danger" class="btn btn-primary" onClick={()=>dispatch(deleteUserAction(user.id))}>Delete</Button>
      <hr/>
      </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={name} onChange={(e)=> setName(e.target.value)}
          placeholder="Name"/>
          <input value={email} onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email"/>
          <input value={gen} onChange={(e)=> setGen(e.target.value)}
          placeholder="Gen"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );


}


// {/* <Col md='4' style={{marginBottom:'1rem'}}>
//      <Card>
//   <Card.Body>
//   <Card.Subtitle className="mb-2 text-muted">Codetrain User</Card.Subtitle>
//     <Card.Title>{props.userInfo.name}</Card.Title>
//     <Card.Text>
//       <p>Email: {props.userInfo.email}</p>
//       <p>Gen:{props.userInfo.gen}</p>
//     </Card.Text>
//     <Card.Link href="#" onClick={handleShow}><Button variant="primary" size="sm">Edit</Button></Card.Link>
//     <Card.Link href="#">
//     <Button variant="danger" size="sm" onClick={}>Delete</Button>
//     </Card.Link>
//   </Card.Body>  
// </Card>
//   </Col>
//   <hr/> */}

    
  

export default  User;
