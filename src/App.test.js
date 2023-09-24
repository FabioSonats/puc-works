import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'; // Importe o seu provedor de contexto aqui

test('renders learn react link', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
