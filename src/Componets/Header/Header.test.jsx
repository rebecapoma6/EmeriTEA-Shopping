
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';


describe('Header', () => {
 test('renders Header component', () => {
 render(
 <Router>
 <Header />
 </Router>
 );
 const titleElement = screen.getByText(/EmeriTEA Market/i);
 expect(titleElement).toBeInTheDocument();
 });

 test('renders button correctly', () => {
 render(
 <Router>
 <Header />
 </Router>
 );
 const buttonElement = screen.getByRole('button');
 expect(buttonElement).toBeInTheDocument();
 });
});


