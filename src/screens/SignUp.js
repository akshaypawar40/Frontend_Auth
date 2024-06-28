import React, { useState, useEffect } from "react";
import {
  Card,
  Heading,
  Text,
  Flex,
  Button,
  Link,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/categories");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/verification");
    dispatch(register(name, email, password));
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <Flex alignItems="center" justifyContent="center" height="80vh">
      <Card p="7" w="400px" align="center" boxShadow="md">
        <Heading size="sm" mb="5">
          Create Your Account
        </Heading>

        {error && "Something went Wrong"}

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <FormControl mb="4">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb="4">
            <FormLabel>Email </FormLabel>
            <Input
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb="5">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            type="Submit"
            mb="5"
            w="100%"
            size="sm"
            bgColor="#000000"
            color="#ffffff"
          >
            CREATE ACCOUNT
          </Button>
        </form>
        <Text fontSize="12px">
          Have an Account?{" "}
          <Link
            color="#000000"
            as={RouterLink}
            to="/login"
            _hover={{ textDecoration: "none" }}
          >
            LOGIN
          </Link>
        </Text>
      </Card>
    </Flex>
  );
};

export default Signup;
