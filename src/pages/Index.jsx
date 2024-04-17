import React, { useState, useEffect } from "react";
import { Box, Button, Text, VStack, Input } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const SimpleComponent = ({ onLike }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike();
  };

  return (
    <Box border="1px" borderColor="gray.200" p={4} borderRadius="md">
      <Text fontSize="lg">Simple Component</Text>
      <Button leftIcon={<FaHeart />} colorScheme="pink" onClick={handleLike}>
        Like {likes}
      </Button>
    </Box>
  );
};

const AppFramework = () => {
  const [totalLikes, setTotalLikes] = useState(0);

  const incrementLikes = () => {
    setTotalLikes(totalLikes + 1);
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Mini JS Framework
      </Text>
      <SimpleComponent onLike={incrementLikes} />
      <Text>Total Likes: {totalLikes}</Text>
    </VStack>
  );
};

export default AppFramework;
