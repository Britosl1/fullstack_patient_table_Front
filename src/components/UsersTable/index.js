import React, { useEffect, useState, useCallback } from 'react';
import { Table } from 'react-bootstrap'
import axios from 'axios';
import { format } from 'date-fns';
import { url } from '../../service/api/index';
import { concatUserName, searchValues } from '../../service/utils/usersUtils';
import UserModal from '../UserModal';
import UserInput from '../UserInput';
import TablePagination from '../TablePagination';

function UsersTable() {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [modalData, setModalData] = useState([]);

  const handleClose = () => setShow(false);

  const showPatient = useCallback((patient) => {
    setModalData(patient);
    setShow(true);
  }, [])

  const columns = [
    {
      id: 'Id',
      fullName: 'Full Name',
      email: 'Email',
      nat: 'Nationality',
      gender: 'Gender',
      birth: 'Birth',
      phone: 'Phone',
      location: 'location',
      image: 'Imagem',
    }]

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/?results=50`);
      const data = response.data;

      const results = data;

      return setUser(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <UserInput onChange={(e) => setSearchValue(e.target.value)} searchValue={searchValue} />
      <Table striped bordered hover variant="dark" size="sm" responsive>
        <thead>
          {columns.map((column, index) => (
            <tr key={index}>
              <th>{column.id}</th>
              <th>{column.fullName}</th>
              <th>{column.email}</th>
              <th>{column.location}</th>
              <th>{column.birth}</th>
              <th>{column.gender}</th>
              <th>{column.phone}</th>
              <th>{column.nat}</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {searchValues(user, searchValue).map((_user, index) => (
            <>
              <tr key={index} onClick={() => showPatient(_user)} >
                <td >{_user._id}</td>
                <td>{concatUserName(_user.name.first, _user.name.last)}</td>
                <td>{_user.email}</td>
                <td>{_user.location.city}</td>
                <td>{format(new Date(_user.dob.date), 'dd/MM/yyyy')}</td>
                <td>{_user.gender}</td>
                <td>{_user.phone}</td>
                <td>{_user.nat}</td>
              </tr>
            </>
          ))}
          {modalData &&
            (<UserModal
              handleClose={handleClose}
              show={show}
              email={modalData.email}
              location={modalData.location?.city}
              dob={modalData.dob?.age}
              gender={modalData.gender}
              phone={modalData.phone}
              nat={modalData.nat}
              image={modalData.picture?.medium}
            />)}
        </tbody>
      </Table>
      <TablePagination />
    </>
  );
}

export default UsersTable;