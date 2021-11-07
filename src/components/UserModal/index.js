import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';
import { url } from '../../service/api/index';
import { ModalTitle, ModalInfo, ModalInsideText, ModalImage, ModalImageContainer, ModalLine, ModalBody, ButtonContainer } from './styles';
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
  phone,
  location,
}) {

  const updateUser = async (id) => {
    try {
      const response = await axios.put(`${url}/${id}`);
      const data = response.data;

      const results = data;

      console.log(results);
      return results;
    } catch (e) {
      console.log(e);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);

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
      <ModalImageContainer>
        <ModalImage src={image}></ModalImage>
      </ModalImageContainer>
      <ModalBody>
        <ModalLine color={tableColors.charcoal} />
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Email:&nbsp;</ModalInsideText>
          <ModalInsideText >{email}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Name:&nbsp;</ModalInsideText>
          <ModalInsideText >{name}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Nationality:&nbsp;</ModalInsideText>
          <ModalInsideText >{nat}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Gender:&nbsp;</ModalInsideText>
          <ModalInsideText >{gender}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Age:&nbsp;</ModalInsideText>
          <ModalInsideText >{dob}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Phone:&nbsp;</ModalInsideText>
          <ModalInsideText >{phone}</ModalInsideText>
        </ModalInfo>
        <ModalInfo>
          <ModalInsideText color={tableColors.burntSienna}>Location:&nbsp;</ModalInsideText>
          <ModalInsideText >{location}</ModalInsideText>
        </ModalInfo>
      </ModalBody>
      <Modal.Footer>
        <ButtonContainer>
          <Button onClick={updateUser}>
            Update
          </Button>
        </ButtonContainer>
        <Button variant="dark" onClick={deleteUser}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserModal;