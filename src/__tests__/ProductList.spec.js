import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '../components/ProductList';
import data from '../models/data.json';

describe("ProductList functionality", () => {
  test('Displays initial product list', () => {
    const expectedLength = data.length;
    render(<ProductList products={data} addToBasket={null} removeFromBasket={null} itemCount={data.length} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(0);
  });

  test('Displays empty product list', () => {
    const emptyData = [];
    const expectedLength = emptyData.length;
    const { getByText } = render(<ProductList products={emptyData} addToBasket={null} removeFromBasket={null} itemCount={emptyData.length} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(1);
    expect(getByText('No items found...')).toBeInTheDocument();
  });
});