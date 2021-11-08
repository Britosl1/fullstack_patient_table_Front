import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('Snapshot test', () => {
  it('renders correctly', () => {
    const app = renderer
      .create(<App />)
      .toJSON();
    expect(app).toMatchSnapshot();
  });

})
