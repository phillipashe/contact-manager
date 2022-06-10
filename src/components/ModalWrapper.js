import React from 'react';
import Modal from 'react-modal';

const ModalWrapper = (props) => {
  const visibility = props.input;
  const id = props.id;
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={visibility}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Are you sure you want to delete this contact?</h2>
      <div>This can't be undone.</div>
      <button onClick={(e) => props.removeContactHandler(id)}>I'm sure</button>
      <button onClick={(e) => props.removeContactHandler(false)}>Nevermind...</button>
    </Modal>
  )
}

export default ModalWrapper;