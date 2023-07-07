import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './LoginRegister/LoginRegister.css';
import { baseUrl } from '../shared/baseUrl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ComplaintForm () {
  const navigate=useNavigate()
  let location = useLocation();
  // console.log(location.state.id.id);
  useEffect(()=>{
    if(location.state===null){
    navigate("/")
     }
    }
  )
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [year, setYear] = useState('');
  const [department, setDepartment] = useState('');
  const [complaintType, setComplaintType] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here
    setSubmitted(true);

    const newComplaint = {
      userid: location.state.id.id,
      Name:name,
      Email:email,
      block:location.state.block.block,
      floor:location.state.floor.floor,
      room:location.state.room.room,
      type: complaintType,
      description: description,
      status:"pending",
      statusdesc:"Will be solved soon"
    };
    newComplaint.date = new Date().toISOString();

    fetch(baseUrl + 'complaints', {
      method: "POST",
      body: JSON.stringify(newComplaint),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          alert("Complaint Posted");
          // navigate('/login'); // Navigate to the login page
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          alert(error);
        }
      })
      .catch(error => {
        alert(error);
      });


    // const alertMessage = `Name: ${name}\nEmail: ${email}\nClass: ${studentClass}\nYear: ${year}\nDepartment: ${department}\nComplaint Type: ${complaintType}\nDescription: ${description}`;
    // alert(alertMessage);
    

  };
  
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pb-5 ">
      <div className="complaint-form p-5 pt-4 border rounded">
        <div className='text-center pb-2'>
          <img src='/rgukt-logo.png' width="50" height="50"/>
          <span>IT Department RGUKT-NUZVID</span>
        </div>
        <div className="text-center mb-4 heading heading">
          <h4>Complaint Form</h4>
          <p>Please fill out this form with your complaint.We will review your request and follow up with you as soon as possible</p>
        </div>
        
      <div className="cline"></div>

      {submitted && (
        <div className="alert alert-success mt-4" role="alert">
          Details submitted successfully!
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group controlId="class">
          <Form.Label>Class:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your class"
            value={studentClass}
            onChange={(event) => setStudentClass(event.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group controlId="year">
          <Form.Label>Year:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group controlId="department">
          <Form.Label>Department:</Form.Label>
          <Form.Control
            as="select"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option value="">Select department</option>
            <option value="PUC">PUC</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="EEE">EEE</option>
            <option value="CHEM">CHEM</option>
            <option value="MME">MME</option>
          </Form.Control>
        </Form.Group>

        <br />

        <Form.Group controlId="complaintType">
          <Form.Label>Type of Complaint:</Form.Label>
          <Form.Control
            as="select"
            value={complaintType}
            onChange={(event) => setComplaintType(event.target.value)}
          >
            <option value="">Select complaint type</option>
            <option value="LAN">LAN</option>
            <option value="Projector">Projector</option>
            <option value="Charging Port">Charging Port</option>
          </Form.Control>
        </Form.Group>

        <br />

        <Form.Group controlId="description">
          <Form.Label>Description of Complaint:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default ComplaintForm;
