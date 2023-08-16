import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './store';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { LoginForm } from './components/LoginForm';
import { NewsPage } from './components/NewsPage';
import { ProfilePage } from './components/ProfilePage';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
