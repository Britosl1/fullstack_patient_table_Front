import styled from 'styled-components';

export const ModalTitle = styled.text`
  font-size: 30px;
  color: ${props => props.color};
  font-weight: 600;
`

export const ModalImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`

export const ModalLine = styled.div`
  border-width: 10px;
  border-color: ${props => props.color};
  width: 80%;
`

export const ModalImage = styled.img`
  border-radius: 50px;
`
export const ModalInfo = styled.div`
  color: ${props => props.color};
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  width: 80%;
`
export const ModalInsideText = styled.text`
  font-size: 15px;
  color: ${props => props.color};
  font-weight: 300px;
`