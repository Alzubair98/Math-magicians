import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from './home';
import Quote from './Quote';
import Navbar from './Navbar';
import Calculator from '../components/Calculator';
import App from '../App';

describe('Navbar , home & Quote renderer test', () => {
  it('matches the snapshot for home', () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot for Quote', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches the snapshot for caculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  
});
