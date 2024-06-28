import React, { useState, useEffect } from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Button,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { logout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const categories = [
    { product: "shoes", price: 299 },
    { product: "Tshirt", price: 299 },
    { product: "Top", price: 299 },
    { product: "Jeans", price: 299 },
    { product: "Trousers", price: 299 },
    { product: "Specs", price: 299 },
    { product: "Hanky", price: 299 },
    { product: "Socks", price: 299 },
    { product: "Watch", price: 299 },
    { product: "Polo Tees", price: 299 },
    { product: "Sleeveless tees", price: 299 },
    { product: "Track Pants", price: 299 },
  ];

  const [checkedCategories, setCheckedCategories] = useState([]);

  useEffect(() => {
    const savedCategories =
      JSON.parse(localStorage.getItem("checkedCategories")) || [];
    setCheckedCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (userInfo) {
      const initialCheckedCategories = userInfo.checkedCategories || [];
      setCheckedCategories(initialCheckedCategories);
    }
  }, [userInfo]);

  useEffect(() => {
    localStorage.setItem(
      "checkedCategories",
      JSON.stringify(checkedCategories)
    );
  }, [checkedCategories]);

  const handleCheckboxChange = (product) => {
    setCheckedCategories((prevState) =>
      prevState.includes(product)
        ? prevState.filter((item) => item !== product)
        : [...prevState, product]
    );
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Flex direction="column">
      <Card p="7" w="400px" boxShadow="md" mt="9">
        <Heading size="sm" mb="5" align="center">
          Please mark your interests!
        </Heading>

        <Text fontSize="14px" align="center" mb="5">
          We will keep you notified.
        </Text>
        <Text fontSize="14px" mb="5">
          My saved interests!
        </Text>
        <ul>
          {categories.map((i) => (
            <li key={i.product} style={{ listStyleType: "none" }}>
              <Checkbox
                isChecked={checkedCategories.includes(i.product)}
                onChange={() => handleCheckboxChange(i.product)}
              >
                {i.product}
              </Checkbox>
            </li>
          ))}
        </ul>
        {/* Ignore logout button */}
        {userInfo && <Button onClick={logoutHandler}>Logout</Button>}
        {/* functionality Not Done */}
        <Flex justifyContent="flex-start" alignItems="center" mt="3">
          <Box px="2">
            <HiChevronDoubleLeft />
          </Box>
          <Box px="2">1</Box>
          <Box px="2">2</Box>
          <Box px="2">3</Box>
          <Box px="2">4</Box>
          <Box px="2">
            <HiChevronDoubleRight />
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
};

export default Categories;
