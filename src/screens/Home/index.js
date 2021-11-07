import React from 'react';
import NavBar from '../../components/NavBar';
import UsersTable from '../../components/UsersTable';
import { HomeContainer } from './styles.js';

function Home() {

  return (
    <>
      <NavBar />
      <HomeContainer>
        <div style={{ padding: '50px' }}>
          <UsersTable />
        </div>
      </HomeContainer>
    </>
  )
}

export default Home;