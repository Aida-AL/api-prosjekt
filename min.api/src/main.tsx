import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImgGrid from './components/ImgGrid'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './app';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App/>
        <ImgGrid />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </StrictMode>
);


