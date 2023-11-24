import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Solidary from './Solidary';
import '@testing-library/jest-dom';


test('renders Solidary component', () => {
 render(
  <Router>
    <Solidary />
  </Router>
 );

 const solidaryTitleElement = screen.getByText('Haz Tú Regalo Solidario!');
 expect(solidaryTitleElement).toBeInTheDocument();

 const moreInformationButtonElement = screen.getByText('¡Más información aquí!');
 expect(moreInformationButtonElement).toBeInTheDocument();
});

