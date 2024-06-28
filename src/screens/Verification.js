import React from "react";
import { Button, Card, Heading, Text, Flex, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Verification = () => {
  return (
    <Flex direction="column">
      <Card p="7" w="400px" align="center" boxShadow="md" mt="9">
        <Heading size="sm" mb="5">
          Verify your email
        </Heading>

        <Text fontSize="14px" align="center" mb="7">
          Enter the 8 digit code you have received on anu***@gmail.com
        </Text>

        <Flex justifyContent="flex-start" w="100%" mb="3">
          Code
        </Flex>

        <Flex alignItems="center" justifyContent="space-between" w="100%">
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="5"
            border="1px"
            borderColor="#C1C1C1"
          ></Box>
        </Flex>

        <Button
          type="submit"
          mb="5"
          w="100%"
          size="sm"
          bgColor="#000000"
          color="#ffffff"
          as={RouterLink}
          to="/"
          mt="7"
        >
          Verify
        </Button>
      </Card>
    </Flex>
  );
};

export default Verification;
