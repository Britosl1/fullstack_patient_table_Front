import React from 'react';
import renderer from 'react-test-renderer';
import UserInput from '../../../components/UserInput/index';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const nav = renderer
      .create(<UserInput searchValue="Teste" onChange={jest.fn()}/>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

})