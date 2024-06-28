import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      py="5"
      bgColor="#e1e1e2"
      pos="fixed"
      bottom="0"
      w="100%"
    >
      <Text color="#000000">
        Copyright {new Date().getFullYear()}. Fashion Store. All Rights
        Reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
