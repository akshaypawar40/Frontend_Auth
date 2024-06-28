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

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // navigate("/categories");
    dispatch(login(email, password));
    console.log(email);
    console.log(password);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/categories");
    } else {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  return (
    <Flex alignItems="center" justifyContent="center" height="80vh">
      <Card p="7" w="400px" align="center" boxShadow="md">
        <Heading size="sm" mb="5">
          Create Your Account
        </Heading>

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
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
            type="submit"
            mb="5"
            w="100%"
            size="sm"
            bgColor="#000000"
            color="#ffffff"
            onClick={submitHandler}
          >
            LOGIN
          </Button>
        </form>
        <Text fontSize="12px">
          Don't Have an Account?{" "}
          <Link
            as={RouterLink}
            to="/"
            color="#000000"
            _hover={{ textDecoration: "none" }}
          >
            SIGN UP
          </Link>
        </Text>
      </Card>
    </Flex>
  );
};

export default Login;
