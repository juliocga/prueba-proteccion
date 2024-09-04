import Home from './modules/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { store } from './store'
import { Provider } from 'react-redux'


function App() {

  const queryClient = new QueryClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Home />
      </LocalizationProvider>
    </QueryClientProvider>
    </Provider>
  );
}

export default App;
