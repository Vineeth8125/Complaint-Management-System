import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './Navbar/Navbar.css';

const ForgotPage = () => {
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here
    setSubmitted(true);

    const alertMessage = `User ID: ${userId}\nNew Password: ${newPassword}`;
    alert(alertMessage);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pb-5 login-bar">
    <div className="login-form p-4 border rounded">
      <h2 className="text-center heading">Reset your Password</h2>
      <div className="cline"></div>

      {submitted && (
        <div className="alert alert-success mt-4" role="alert">
          Password Changed Successfully!
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userId">
          <Form.Label>User ID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user ID"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group controlId="newPassword">
          <Form.Label>New Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100 d-flex justify-content-center">
          Change Password
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default ForgotPage;
