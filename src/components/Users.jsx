import React from 'react';
import {Container, Row } from 'react-bootstrap';
import User from './User';

export default function Users(props) {
  return <Container>
      <Row>
          {
              props.usersData.map((user, index) => {
                return <User userInfo={user} key={index} />
              })   
          }
          
      </Row>
  </Container>;
}

