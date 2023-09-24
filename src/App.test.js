// Importe o AuthContextProvider
import { AuthContextProvider } from './seu-caminho-para-o-contexto/AuthContext';

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
