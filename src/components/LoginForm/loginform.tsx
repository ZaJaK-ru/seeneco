import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../authSlice';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Admin' && password === '12345') {
      dispatch(authenticate());
      localStorage.setItem('authenticated', 'true');
      navigate('/profile');
    } else {
      alert('Имя пользователя или пароль введены не верно');
    }
  };

  return (
    <Box maxW="container.md" mx="auto" mt={8}>
      <FormControl>
        <FormLabel>Имя пользователя</FormLabel>
        <Input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Пароль</FormLabel>
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button mt={4} colorScheme="blue" onClick={handleLogin}>
        Войти
      </Button>
    </Box>
  );
};
