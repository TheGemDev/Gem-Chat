import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Divider,
  chakra,
  Link,
  VisuallyHidden,
} from "@chakra-ui/react";

import { Join, SignIn } from "../../components/authbutton/Authbutton";
import Logo from "../../res/index"


const Start: React.FC = () => {
  return (
    <>
      <Container maxW={"3x1"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 6, md: 14 }}
          py={{ base: 20, md: 1 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"10%"}>
            <Logo />
            <Divider />
          </Heading>
          <Text
            as={"span"}
            color={"red.400"}
            fontWeight={600}
            fontSize={"x-large"}>
            - made for you -
          </Text>
          <Text color={"gray.500"}>
            Albert Einstein - In here it's all about fun ;)
          </Text>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}>
            //Join
            <Join />
            <Divider />
            //signin
            <SignIn />

            <Box
              bg={useColorModeValue("gray.50", "gray.900")}
              color={useColorModeValue("gray.700", "gray.200")}></Box>
          </Stack>
          <Text>version 1.0.0</Text>
        </Stack>
      </Container>
    </>
  );
};

export default Start;
