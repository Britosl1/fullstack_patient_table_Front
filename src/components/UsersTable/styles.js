import styled from "styled-components";

export const ShowMoreButton = styled.button`
  border-radius: 6px;
  background-color: ${props => props.color};
  height: 50px;
  width: 130px;
  margin: 8px;
  padding: 8px;
`

export const ShowMoreButtonText = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${props => props.color}
`