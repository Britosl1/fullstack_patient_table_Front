import React from 'react';
import NavBar from '../../components/NavBar';
import UsersTable from '../../components/UsersTable';
import { tableColors } from '../../service/styles/colors';
import { HomeContainer } from './styles.js';

function Home() {

  return (
    <HomeContainer color={tableColors.charcoal}>
      <NavBar />
      <div style={{ padding: '50px' }}>
        <UsersTable />
      </div>
    </HomeContainer>
  )
}

export default Home;