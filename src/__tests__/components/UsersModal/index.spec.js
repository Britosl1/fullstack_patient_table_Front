import React from 'react';
import renderer from 'react-test-renderer';
import UserModal from '../../../components/UserModal/index'

describe('Snapshot test', () => {
  it('renders correctly', () => {

    const nav = renderer
      .create(<UserModal />).toJSON();

    expect(nav).toMatchSnapshot();
  });
});
