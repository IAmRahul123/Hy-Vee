import React from 'react'
import Modal from 'react-bootstrap/Modal';

const ModalView = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    //   backdropClassName='bg-opacity-25'
    //   style={{background:'transparent'}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
       {props?.children}
      </Modal.Body>
      
    </Modal>
  )
}

export default ModalView