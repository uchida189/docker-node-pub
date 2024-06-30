import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);  // Appコンポーネントをレンダリング
  // レンダリング：コンポーネントを画面に表示すること。DOMを生成すること。
  const linkElement = screen.getByText(/learn react/i); // テキストが存在するか確認
  expect(linkElement).toBeInTheDocument();  // テキストが存在すればOK
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Learn React/i);
//   expect(linkElement).toBeInTheDocument();
// });
