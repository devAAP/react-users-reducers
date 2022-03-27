import React from 'react';
// import {Container, Row } from 'react-bootstrap';
import User from './User';
import { useSelector } from 'react-redux'




const Users = () => {
  
  const users = useSelector((state) => {
    return state.users;
  });

  
  return (
    <>
            {users.map((user, index) => {
        return (
          <User user={user} key={user.id}/>
          // <div key={`${user.id}-${index}`}>
          //   <h1>{user.name}</h1>
          //   <h3>{user.email}</h3>
          //   <h3>{user.gen}</h3>
          //   <Button variant="primary" size="lg" type="edit">
          //     Edit
          //   </Button>
          //   <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
            
          //   <hr/>
          // </div>
        );
        
      })}
    </>
  );

// export default function Users(props) {
//   return <Container>
//       <Row>
//           {props.usersData.map((user) => {
//                 return (
//                     <User userInfo={user} key={user.id}
//                     deleteUser= {props.deleteUser}
//                      editUser={props.editUser} />
//                 ); 
//               })   
//           }
          
//       </Row>
//   </Container>;
// }
};

export default Users;
