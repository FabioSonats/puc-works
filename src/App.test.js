// Importe o AuthContextProvider
import { AuthContextProvider } from './context/AuthContext';

// No seu teste, envolva o componente App com o AuthContextProvider
test('renders learn react link', () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
