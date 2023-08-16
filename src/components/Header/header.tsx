import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <header>
      <Box bg="blue.500" py={4}>
        <Flex
          align="center"
          justify="space-between"
          maxW="container.lg"
          mx="auto"
        >
          <Text fontSize="xl" fontWeight="bold" color="white">
            Мой Приложение
          </Text>
          <nav>
            <Flex as="ul" listStyleType="none">
              <Box as="li" mr={4}>
                <Link to="/" color="white">
                  На главную
                </Link>
              </Box>
              <Box as="li" mr={4}>
                <Link to="/news" color="white">
                  Новости
                </Link>
              </Box>
              <Box as="li">
                <Link to="/profile" color="white">
                  Профиль
                </Link>
              </Box>
            </Flex>
          </nav>
        </Flex>
      </Box>
    </header>
  );
};
