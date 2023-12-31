import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './Page';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const pages = ['home', 'login', 'cookbook']

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <ApolloProvider client={client}>
    <div>
      <Header pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage} />
      <main>
        <Page 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
      </main>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;