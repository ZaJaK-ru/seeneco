import React, { useState } from 'react';
import useSWR from 'swr';
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Spinner,
  Alert,
  AlertTitle,
  AlertIcon,
} from '@chakra-ui/react';

interface News {
  fact: string;
  length: number;
}

export const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useSWR(
    `https://catfact.ninja/facts?page=${currentPage}`,
  );

  if (isLoading) return <Spinner />;
  if (!data)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Fetch data error!</AlertTitle>
      </Alert>
    );

  const news = data.data;

  const handleNextPage = () => {
    if (data?.next_page_url) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (data?.prev_page_url) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(data);

  return (
    <Box maxW="container.md" mx="auto" mt={8}>
      <h2>Новости</h2>
      <SimpleGrid columns={2} spacing={4}>
        {news.map((item: News, index: number) => (
          <Box key={index} p={4} borderWidth="1px" rounded="md">
            {item.fact}
          </Box>
        ))}
      </SimpleGrid>
      <Flex mt={4} justifyContent="center">
        <Button
          mr={2}
          colorScheme="blue"
          onClick={handlePrevPage}
          isDisabled={!data.prev_page_url}
        >
          Предыдущая страница
        </Button>
        <Button
          colorScheme="blue"
          onClick={handleNextPage}
          isDisabled={!data.next_page_url}
        >
          Следующая страница
        </Button>
      </Flex>
    </Box>
  );
};
