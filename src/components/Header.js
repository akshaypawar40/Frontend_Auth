import React from "react";
// import styles from "../App.css";
import { Flex, Heading, Link, Box } from "@chakra-ui/react";
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="flex-end"
        bgColor="gray.800"
        pos="fixed"
        top="0"
        pt="1"
        w="100%"
        fontSize="14px"
        zIndex="10"
      >
        <Link
          to="/"
          color="whiteAlpha.800"
          _hover={{ color: "gray.500", textDecor: "none" }}
          px="2"
        >
          Help
        </Link>
        <Link
          to="/"
          color="whiteAlpha.800"
          _hover={{ color: "gray.500", textDecor: "none" }}
          px="2"
        >
          Orders & Return
        </Link>
        <Link
          to="/"
          color="whiteAlpha.800"
          _hover={{ color: "gray.500", textDecor: "none" }}
          px="2"
        >
          Hi, John
        </Link>
      </Flex>
      <Flex
        as="header"
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
        pb="6"
        pt="0"
        px="6"
        pos="fixed"
        zIndex="10"
        w="100%"
        top="25px"
        bgColor="gray.800"
      >
        {/* Title*/}
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: "gray.500", textDecor: "none" }}
          >
            Ecommerce
          </Link>
        </Heading>
        <Box>
          <Link
            to="/"
            as={RouterLink}
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            Categories
          </Link>
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            Sale
          </Link>
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            Clearance
          </Link>
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            New Stock
          </Link>
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            Trending
          </Link>
        </Box>
        <Box display="flex">
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            <HiOutlineSearch />
          </Link>
          <Link
            to="/"
            color="whiteAlpha.800"
            px="2"
            _hover={{ textDecoration: "none" }}
          >
            <HiOutlineShoppingCart />
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
