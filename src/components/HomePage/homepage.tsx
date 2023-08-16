import { Box, Center, Heading } from '@chakra-ui/react';

export const HomePage: React.FC = () => {
  return (
    <Box maxW="100%" mx="auto" mt={8}>
      <Center bg="tomato" h="100px" color="white">
        <Heading>Главная</Heading>
      </Center>
    </Box>
  );
};
