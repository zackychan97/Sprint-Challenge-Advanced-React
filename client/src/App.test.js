import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";
import Navbar from "./components/Navbar";


describe("testing tests", () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

});

describe("testing tests", () => {
  
  test('Test, hello world! is found', () => {
    const { getByText } = render(<App />);

    getByText("Test, hello world!");
  });

  test('Navbar renders', () => {
    render(<Navbar />)
  });

});