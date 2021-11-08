import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../../../components/NavBar';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const nav = renderer
      .create(<NavBar />)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

})