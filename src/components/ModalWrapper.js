import React from 'react';
import Modal from 'react-modal';
import './ModalWrapper.css';

// could i make an async version of this?
const ModalWrapper = (props) => {
  const visibility = props.isOpen;
  const id = props.id;
  Modal.setAppElement('#root');

  const styles = {
    height: "25vh"
  }

  return (
    <Modal
      isOpen={visibility}
      contentLabel="Example Modal"
      style={styles}
      className="modal"
    >
      <div className="delete-modal-content">
        <div className="delete-modal-text">
          <h2 className="modal-header">Are you sure you want to delete this contact?</h2>
          <div className="subtext">This can't be undone.</div>
        </div>
        <button className="ui button red left" onClick={(e) => props.removeContactHandler(id)}>I'm sure</button>
        <button className="ui button grey right" onClick={(e) => props.removeContactHandler(false)}>Nevermind...</button>
      </div>
    </Modal>
  )
}

export default ModalWrapper;