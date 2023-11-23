import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import '@testing-library/jest-dom'


test('renders Footer component', () => {
 render(<Footer />)
 expect(screen.getByText('Politica de Privacidad')).toBeInTheDocument()
 expect(screen.getByText('Aviso Legal')).toBeInTheDocument()
 expect(screen.getByText('Política de Cookies')).toBeInTheDocument()
 expect(screen.getByText('Copyright © 2019 EmeriTEA')).toBeInTheDocument()
 expect(screen.getByText('Emeritea@emeritea.com')).toBeInTheDocument()
})
