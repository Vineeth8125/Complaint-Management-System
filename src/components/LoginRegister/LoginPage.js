import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../shared/baseUrl';
import Admin from '../Home/admin';
import './LoginRegister.css';
import Alert from './Alert';
import axios from 'axios';
import Context from '../Context';
import AdminComplaints from '../Home/AdminComplaints';
const LoginPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [userFound, setUserFound] = useState(false);
  const [block, setBlock] = useState('');
  const [floor, setFloor] = useState('');
  const [room, setRoom] = useState('');
  const [flag, setFlag] = useState(false);
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(baseUrl + 'users')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(users => {
        let foundUser = false;
  
        for (const item of users) {
          if (item.id == userId && item.password == password) {
            foundUser = true;
            setBlock(item.block);
            setRoom(item.room);
            setFloor(item.floor);
            break;
          }
        }
  
        setUserFound(foundUser);
        setFlag(true);
  
        if (!foundUser) {
          setUserId('');
          setPassword('');
          setRememberMe(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const data={
    id:{userId},
    password:{password},
    floor:{floor},
    room:{room},
    block:{block}
  }


  // const returnAlert = ()=>{
  //   alert("Something Went Wrong");
  // }
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pb-5">
      {userFound ? (
        //  <Admin id={userId} password={password} floor={floor} room={room} block={block} />
        // <Link to="/admin"/>
      //  console.log(data)
        navigate('Main_Home',{state:data})
      ) :
      (<>
      {(flag && !userId && !password) ? (<Alert />) : <></>}
      <div className="login-form p-4 border rounded">
        <h1 className="text-center mb-4 heading">Student Login</h1>
        <div className="line"></div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" placeholder="Enter your ID" value={userId} onChange={handleUserIdChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRememberMe">
            <Form.Check type="checkbox" label="Remember Me" checked={rememberMe} onChange={handleRememberMeChange} />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="w-100 login">
            Login
          </Button>
          
          <div className='d-flex justify-content-between'>
            <Link to="/forgot">Forget Password</Link>
            <span className=''>Don't have an account?{' '}
            <Link to="/register">Click here</Link></span>
          </div>

        </Form>
      </div>
      </>
    )}
    </Container>
  );
};

export default LoginPage;
// export default data