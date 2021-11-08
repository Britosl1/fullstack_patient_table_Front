import React from 'react';
import renderer from 'react-test-renderer';
import UsersTable from '../../../components/UsersTable/index'

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const nav = renderer
      .create(<UsersTable />)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

})