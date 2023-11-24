
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';


test('renders Footer component', () => {
 render(<Footer />);

 const politicaPrivacidadElement = screen.getByText('Política de Privacidad');
 expect(politicaPrivacidadElement).toBeInTheDocument();

 const avisoLegalElement = screen.getByText('Aviso Legal');
 expect(avisoLegalElement).toBeInTheDocument();

 const politicaCookiesElement = screen.getByText('Política de Cookies');
 expect(politicaCookiesElement).toBeInTheDocument();

 const copyrightElement = screen.getByText('Copyright © 2019 EmeriTEA');
 expect(copyrightElement).toBeInTheDocument();

 const correoElement = screen.getByText('Emeritea@emeritea.com');
 expect(correoElement).toBeInTheDocument();
});
