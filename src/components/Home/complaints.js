import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import EditForm from './EditForm';
import { baseUrl } from '../../shared/baseUrl';


function RenderComplaints({ item, handleShow }) {
  return (
    <tr key={item.id}>
      <td>{item.id.toString()}</td>
      <td>{(item.block +"  "+ item.floor + item.room).toString()}</td>
      <td>{item.type}</td>
      <td>{item.description}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
      <td>{item.statusdesc}</td>
    </tr>
  );
}


export const FetchComplaints = ({ userid, handleShow }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch(baseUrl + 'complaints')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(complaints => {
        const filteredComplaints = complaints.filter(item => item.userid === userid);
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
        <RenderComplaints key={item.id} item={item} handleShow={handleShow} />
      ))}
    </>
  );
};


const Complaints = ({id, room, floor, block}) => {
  const [show, setShow] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

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
          <h3 className='text-center m-2 p-3'>Your Complaints</h3>
          <table className=' table table-sm m-2 mb-5 text-center table-responsive'>
            <thead className='bg-primary text-light'>
              <tr >
                <th>ID</th>
                <th>Class</th>
                <th>Complaint Type</th>
                <th>Description</th>
                <th>Publish Date</th>
                <th>Status</th>
                <th>Status Description</th>
                {/* <th>Edit</th> */}
              </tr>
            </thead>
            <tbody>
              <FetchComplaints userid = {id} handleShow ={handleShow}/>
              
            </tbody>
          </table>
        </div>
      </section>
      <Modal show={show} onHide={handleClose} className='d-block'>
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
      </Modal>
    </div>
  )
}

export default Complaints;
