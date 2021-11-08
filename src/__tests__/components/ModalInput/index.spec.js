import React from 'react';
import renderer from 'react-test-renderer';
import ModalInput from '../../../components/ModalInput/index'

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const nav = renderer
      .create(<ModalInput searchValue="Teste" onChange={jest.fn()} value="Value"/>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

})