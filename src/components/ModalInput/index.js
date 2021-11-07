import React from 'react';
import { FormControl } from 'react-bootstrap'

function ModalInput({ searchValue, onChange, value }) {
  return (
    <FormControl
      value={searchValue}
      onChange={onChange}
      type="text"
      style={{ marginBottom: '10px' }} 
      placeholder={value}
      />
  )
}

export default ModalInput;