import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
 it('should render the header with the correct links and buttons', () => {
 render(
  <Router>
    <Header />
  </Router>
 );

 expect(screen.getByAltText('LogoEmeriatea')).toBeInTheDocument();
 expect(screen.getByText('EmeriTEA Market')).toBeInTheDocument();
 expect(screen.getByRole('button')).toBeInTheDocument();
 expect(screen.getAllByRole('link')[1]).toBeInTheDocument();

 });
});
