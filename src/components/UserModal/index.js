import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
import { url } from '../../service/api/index';
import ModalInput from '../ModalInput';
import { ModalTitle, ModalInfo, ModalInsideText, ModalImage, ModalImageContainer, ModalLine } from './styles';
import { tableColors } from '../../service/styles/colors';

function UserModal({
  show,
  handleClose,
  image,
  name,
  email,
  nat,
  gender,
  dob,
  login,
  phone,
  location,
}) {

  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${url}/${id}`);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <ModalTitle color={tableColors.burntSienna}>User Info</ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <>
          <ModalImageContainer>
            <ModalImage src={image}></ModalImage>
          </ModalImageContainer>
          <ModalLine color={tableColors.orangeYellow}/>
          <ul style={{ listStyle: 'none' }}>
            <ModalInfo>
              <ModalInsideText color={tableColors.burntSienna}>{email}</ModalInsideText>
              <li>{login}</li>
              <p>TEste</p>
            </ModalInfo>
            <ModalInput value={email} />
            <li>{name}</li>
            <li>{email}</li>
            <li>{nat}</li>
            <li>{gender}</li>
            <li>{dob}</li>
            <li>{phone}</li>
            <li>{location}</li>
          </ul>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <div>
          <Button variant="light" onClick={updateUser}>
            Update
          </Button>
          <Button variant="secondary" onClick={deleteUser}>
            Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default UserModal;