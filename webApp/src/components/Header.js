import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Icon from "react-eva-icons";

const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.800"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        {/*<Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Gem Chat
        </Heading>*/}
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <Icon
          name="menu-outline"
          size="medium" // small, medium, large, xlarge
          animation={{
            type: "pulse", // zoom, pulse, shake, flip
            hover: true,
            infinite: false,
          }}
        />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box>
      <Box>
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
