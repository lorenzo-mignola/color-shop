import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from '../components/Header';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
