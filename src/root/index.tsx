import React from 'react';
import Navigation from './navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
