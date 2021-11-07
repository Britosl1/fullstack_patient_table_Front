import styled from 'styled-components';

export const ModalTitle = styled.p`
  font-size: 30px;
  color: ${props => props.color};
  font-weight: 600;
`

export const ModalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`

export const ModalLine = styled.div`
  border: solid 2px;
  border-color: ${props => props.color};
  width: 100%;
  margin: 8px 0px;
`

export const ModalImage = styled.img`
  border-radius: 50px;
`
export const ModalInfo = styled.div`
  color: ${props => props.color};
  display: flex;
  /* justify-content: space-between; */
  font-size: 15px;
  width: 70%;
`
export const ModalInsideText = styled.text`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: 300px;
`

export const ButtonContainer = styled.div`
  margin: 0px 10px;
`