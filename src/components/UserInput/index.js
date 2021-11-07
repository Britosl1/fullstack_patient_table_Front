import React from 'react';
import { FormControl } from 'react-bootstrap'

function UserInput({ searchValue, onChange }) {
  return (
    <FormControl
      value={searchValue}
      onChange={onChange}
      type="text" 
      placeholder="Search for user name or nationality..."
      style={{ marginBottom: '20px'}} />
  );
}

export default UserInput;