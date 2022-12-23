import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "../assets/css/styles.css"
import { CardBody } from 'reactstrap';
import user from "../assets/img/users.png"
const Login = () => {
  return (
 
    <Container>
        <div  class="card-wrapper" >
        <h1 className='login_heading'>Login</h1>
        <div className='logim-button'>
        <img
           src={user}
           className='login_icon'
           alt=''/>
         <Button className='button_facebook' variant="primary">Login Facebook </Button>
         </div>
        </div>
       
    </Container>

  )
}

export default Login