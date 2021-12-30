import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './components/Home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
