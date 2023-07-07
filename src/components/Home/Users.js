import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import EditForm from './EditForm';
import { baseUrl } from '../../shared/baseUrl';
import { useLocation, useNavigate } from 'react-router-dom';

  



function RenderUsers({ item, handleShow }) {
  return (
    <tr key={item.id}>
      <td>{item.id.toString()}</td>
      <td>{(item.block).toString()}</td>
      <td>{item.floor}</td>
      <td>{item.room}</td>
      <td>
        <button onClick={() => DeleteUser(item.id)} className="btn text-warning">
          <i className="bi bi-pen"></i>
        </button>
      </td>
    </tr>
  );
}

function DeleteUser(id){
  
  
  try{
    console.log("http://localhost:3001/users/"+id)
    fetch("http://localhost:3001/users/"+id,{method:'DELETE'})
    window.location.reload(false)

  }
  catch(error){
    console.log("error")
  }
}

export const FetchUsers = ({ userid, handleShow }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch(baseUrl + 'users')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(complaints => {
        const filteredComplaints = complaints;
        setComplaints(filteredComplaints);
      })
      .catch(error => {
        console.error('Error:', error);
        alert(error);
      });
  }, [userid]);

  return (
    <>
      {complaints.map(item => (
        <RenderUsers key={item.id} item={item} handleShow={handleShow} />
      ))}
    </>
  );
};


function Users ()  {
  const location=useLocation()
  const [show, setShow] = useState(false);
  const navigate=useNavigate()
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  if(location.state===null){
    window.location.href='/'
  }
  const id=location.state.id.userId
  const handleShow = (complaint) => {
    setSelectedComplaint(complaint);
    setShow(true);
  };

  


  const handleClose = () => setShow(false);
  const closeButton = (
    <button onClick={handleClose}>&times;</button>
  );

  return (
    <div>
      <section className='complaints w-100'>
        <div className='container'>
          <h3 className='text-center m-2 p-3'>All Users</h3>
          <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
            <thead className='bg-primary text-light'>
              
              <tr >
                <th>UserID</th>
                <th>Block</th>
                <th>Floor</th>
                <th>Room No</th>
                <th>Delete</th>
              </tr>
              
            </thead>
            <tbody>
              <FetchUsers userid = {id} handleShow ={handleShow}/>
              
              {/* {records.map((record, i) => (
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.complaint}</td>
                  <td>{record.type}</td>
                  <td>{record.description}</td>
                  <td>{record.publish}</td>
                  <td>{record.status}</td>
                  <td>{record.statusdesc}</td>
                  <td>
                    <button onClick={() => handleShow(record)} className='btn text-warning'><i className='bi bi-pen'></i></button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </section>
      {/* <Modal show={show} onHide={handleClose} className='d-block'>
        <Modal.Header toggle={handleShow} close={closeButton} className='d-block'>
          <Modal.Title className='text-center'>
            Edit Complaints
          </Modal.Title>
          <Modal.Body>
            {selectedComplaint && <EditForm complaint={selectedComplaint} />}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal.Header>
      </Modal> */}
    </div>
  )
}

export default Users;
