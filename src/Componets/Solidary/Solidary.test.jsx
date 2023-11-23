import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter } from 'react-router-dom';
import Solidary from './Solidary';

describe('Solidary', () => {
 test('renders Solidary component', () => {
 render(
   <BrowserRouter>
     <Solidary />
   </BrowserRouter>
 );
 const titleElement = screen.getByText(/Haz tu Regalo Solidario!/i);
 expect(titleElement).toBeInTheDocument();
 });

 test('renders images correctly', () => {
 render(
   <BrowserRouter>
     <Solidary />
   </BrowserRouter>
 );
 const imageElements = screen.getAllByRole('img');
 expect(imageElements).toHaveLength(4);
 });

 test('renders text correctly', () => {
 render(
   <BrowserRouter>
     <Solidary />
   </BrowserRouter>
 );
 const textElement = screen.getByText(/Haz tu regalo personalizado para eventos, fiestas, bodas, cumpleaños, etc...!/i);
 expect(textElement).toBeInTheDocument();
 });

 test('renders button correctly', () => {
 render(
   <BrowserRouter>
     <Solidary />
   </BrowserRouter>
 );
 const buttonElement = screen.getByRole('button', { name: /Más información aquí!/i });
 expect(buttonElement).toBeInTheDocument();
 });
});
